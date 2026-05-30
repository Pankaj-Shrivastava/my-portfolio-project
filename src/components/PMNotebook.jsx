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

        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?content_type=pmNotebookEntry`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });

        const data = await response.json();

        if (data.items) {
          const formattedEntries = data.items.map((item) => ({
            id: item.sys.id,
            title: item.fields.title,
            date: new Date(item.fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            content: item.fields.content,
            tags: item.fields.tags || [],
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

  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
          <span className="mr-2">←</span> Back to Portfolio
        </Link>
      </div>
      
      <section id="pm-notebook">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-800">Product Management Notebook</h2>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : entries.length === 0 ? (
          <p className="text-slate-600">No notebook entries found. Start writing in your CMS!</p>
        ) : (
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-4 space-y-8">
            {entries.map((entry) => (
            <div key={entry.id} className="pl-6 md:pl-8 relative">
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-50"></span>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800">{entry.title}</h3>
                  <time className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">{entry.date}</time>
                </div>
                <p className="text-slate-600 leading-relaxed">{entry.content}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </section>
    </main>
  )
}