import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function PMNotebook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=pmNotebookEntry&select=fields.title,fields.slug,fields.date`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });

        const data = await response.json();

        if (data.items) {
          const formattedEntries = data.items.map((item) => ({
            ...item.fields,
          }));
          setEntries(formattedEntries.sort((a, b) => new Date(b.date) - new Date(a.date)));
        }
      } catch (error) {
        console.error("Error fetching CMS data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const preface = entries.find(entry => entry.slug === 'preface');
  const chapters = entries.filter(entry => entry.slug !== 'preface');

  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/" className="text-slate-600 hover:text-slate-900 font-medium inline-flex items-center transition-colors">
          <span className="mr-2">←</span> Back to Portfolio
        </Link>
      </div>

      <section id="pm-notebook">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-900">Product Management Notebook</h2>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
          </div>
        ) : entries.length === 0 ? (
          <p className="text-slate-500">No notebook entries found. Start writing in your CMS!</p>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            {preface && (
              <Link to={`/pm-notebook/${preface.slug}`} className="block p-6 border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900">{preface.title}</h3>
                <p className="text-slate-500 mt-1">An introduction to the notebook.</p>
              </Link>
            )}
            <ol className="divide-y divide-slate-200">
              {chapters.map((chapter, index) => (
                <li key={chapter.slug}><Link to={`/pm-notebook/${chapter.slug}`} className="block p-6 hover:bg-slate-50 transition-colors"><span className="text-slate-500 mr-4">{index + 1}.</span><span className="font-medium text-slate-800">{chapter.title}</span></Link></li>
              ))}
            </ol>
          </div>
        )}
      </section>
    </main>
  )
}