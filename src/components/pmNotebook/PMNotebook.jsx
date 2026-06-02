import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import NotebookEntryPage from './NotebookEntryPage'

export default function PMNotebook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlug, setActiveSlug] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
        const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

        if (!SPACE_ID || !ACCESS_TOKEN) {
          console.warn("CMS credentials missing. Please set them in your environment variables.");
          setIsLoading(false);
          return;
        }

        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=pmNotebookEntry&select=sys.createdAt,fields.title,fields.slug`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });

        const data = await response.json();

        if (data.items) {
          const formattedEntries = data.items.map((item) => ({
            ...item.fields,
            createdAt: item.sys.createdAt,
          }));
          const sortedEntries = formattedEntries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setEntries(sortedEntries);

          const prefaceEntry = sortedEntries.find(entry => entry.slug === 'preface');
          if (prefaceEntry) {
            setActiveSlug(prefaceEntry.slug);
          } else if (sortedEntries.length > 0) {
            setActiveSlug(sortedEntries[0].slug);
          }
        }
      } catch (error) {
        console.error("Error fetching CMS data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const handleEntryClick = (slug) => {
    setActiveSlug(slug);
    if (window.innerWidth < 1024 && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Small timeout to ensure smooth transition
    }
  };

  const preface = entries.find(entry => entry.slug === 'preface');
  const chapters = entries.filter(entry => entry.slug !== 'preface');

  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-6xl">
      <div className="mb-8">
        <Link to="/" className="text-slate-600 hover:text-slate-900 font-medium inline-flex items-center transition-colors">
          <span className="mr-2">←</span> Back to Portfolio
        </Link>
      </div>

      <section id="pm-notebook">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-900">Product Management Notebook</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar: Table of Contents */}
          <aside className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-24">
            {isLoading ? (
              <div className="flex justify-center py-12 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
              </div>
            ) : entries.length === 0 ? (
              <p className="text-slate-500">No notebook entries found. Start writing in your CMS!</p>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                {preface && (
                  <button onClick={() => handleEntryClick(preface.slug)} className={`w-full text-left block p-6 border-b border-slate-200 transition-colors ${activeSlug === preface.slug ? 'bg-slate-100' : 'hover:bg-slate-50'}`}>
                    <h3 className="text-xl font-semibold text-slate-900">{preface.title}</h3>
                    <p className="text-slate-500 mt-1">An introduction to the notebook.</p>
                  </button>
                )}
                <ol className="divide-y divide-slate-200">
                  {chapters.map((chapter, index) => (
                    <li key={chapter.slug}>
                      <button onClick={() => handleEntryClick(chapter.slug)} className={`w-full text-left block p-6 transition-colors ${activeSlug === chapter.slug ? 'bg-slate-100' : 'hover:bg-slate-50'}`}>
                        <span className="text-slate-500 mr-4">{index + 1}.</span>
                        <span className="font-medium text-slate-800">{chapter.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </aside>

          {/* Right Area: Entry Content */}
          {/* Added scroll-mt-24 to prevent the content from hiding behind the sticky header on mobile scroll */}
          <div className="w-full lg:w-2/3 scroll-mt-24" ref={contentRef}>
            {activeSlug ? (
              <NotebookEntryPage slug={activeSlug} />
            ) : (
              <div className="bg-white p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center text-slate-500 min-h-[300px]">
              No entries available to display.
              </div>
            )}
          </div>
          
        </div>
      </section>
    </main>
  )
}