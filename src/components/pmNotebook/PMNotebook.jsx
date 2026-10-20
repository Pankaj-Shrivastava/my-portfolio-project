import React, { useState, useEffect, useRef } from 'react';
import NotebookEntryPage from './NotebookEntryPage';
import { DoodleStar, DoodleRaysLeft, DoodleScribble } from '../doodle/DoodleDecors';

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
      }, 100);
    }
  };

  const preface = entries.find(entry => entry.slug === 'preface');
  const chapters = entries.filter(entry => entry.slug !== 'preface');

  return (
    <main className="flex-1 container mx-auto px-6 py-12 max-w-6xl">
      <section id="pm-notebook">
        
        {/* Notebook Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-dashed border-ink/20">
          <div className="flex items-center gap-3">
            <DoodleRaysLeft className="w-7 h-7 text-doodle-mustard" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-doodle text-ink tracking-tight">
                <span className="highlighter-mustard">Product Management Notebook</span>
              </h1>
              <p className="font-doodle text-base text-ink-muted mt-1">
                Field notes, product tear-downs, frameworks & design philosophies.
              </p>
            </div>
          </div>
          <DoodleStar className="w-8 h-8 text-doodle-coral hidden sm:block animate-star-spin" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar: Sketchbook Index / TOC */}
          <aside className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-24">
            {isLoading ? (
              <div className="flex justify-center py-12 bg-paper-card border-2 border-ink rounded-2xl shadow-doodle">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink"></div>
              </div>
            ) : entries.length === 0 ? (
              <div className="p-6 bg-paper-card border-2 border-ink rounded-2xl shadow-doodle text-center">
                <p className="font-doodle text-lg text-ink-muted">No notebook entries found yet.</p>
              </div>
            ) : (
              <div className="doodle-card rounded-2xl overflow-hidden shadow-doodle">
                <div className="bg-paper-muted px-5 py-3 border-b-2 border-ink flex items-center justify-between">
                  <span className="font-doodle text-sm font-bold tracking-wider uppercase text-ink">
                    📑 Table of Contents
                  </span>
                  <span className="text-xs font-doodle text-ink-muted">{entries.length} notes</span>
                </div>

                {preface && (
                  <button 
                    onClick={() => handleEntryClick(preface.slug)} 
                    className={`w-full text-left block p-5 border-b-2 border-ink/20 transition-all font-doodle ${
                      activeSlug === preface.slug 
                        ? 'bg-doodle-mustard/20 font-bold border-l-4 border-l-doodle-coral text-ink' 
                        : 'hover:bg-paper-muted text-ink-light'
                    }`}
                  >
                    <div className="text-lg font-bold">{preface.title}</div>
                    <p className="text-sm text-ink-muted mt-0.5">An introduction to the notebook.</p>
                  </button>
                )}

                <ol className="divide-y divide-ink/10">
                  {chapters.map((chapter, index) => (
                    <li key={chapter.slug}>
                      <button 
                        onClick={() => handleEntryClick(chapter.slug)} 
                        className={`w-full text-left block px-5 py-4 transition-all font-doodle ${
                          activeSlug === chapter.slug 
                            ? 'bg-doodle-mustard/20 font-bold border-l-4 border-l-doodle-coral text-ink' 
                            : 'hover:bg-paper-muted text-ink-light'
                        }`}
                      >
                        <span className="text-xs font-bold text-doodle-coral mr-2.5">
                          #{String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-base font-semibold">{chapter.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </aside>

          {/* Right Area: Entry Content */}
          <div className="w-full lg:w-2/3 scroll-mt-24" ref={contentRef}>
            {activeSlug ? (
              <NotebookEntryPage slug={activeSlug} />
            ) : (
              <div className="doodle-card p-8 md:p-12 rounded-2xl flex items-center justify-center text-ink-muted min-h-[300px]">
                <p className="font-doodle text-xl">Select a chapter from the left to start reading.</p>
              </div>
            )}
          </div>
          
        </div>
      </section>
    </main>
  );
}