import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function NotebookEntryPage({ slug }) {
  const [entry, setEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEntry = async () => {
      setIsLoading(true);
      try {
        const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
        const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

        if (!SPACE_ID || !ACCESS_TOKEN) {
          console.warn("CMS credentials missing.");
          return;
        }

        const query = `content_type=pmNotebookEntry&fields.slug=${slug}&limit=1`;
        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?${query}`;
        
        const response = await fetch(url, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setEntry(data.items[0]);
        }
      } catch (error) {
        console.error("Error fetching entry:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchEntry();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12 bg-white border border-slate-200 rounded-2xl shadow-sm min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="bg-white p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center text-slate-500 min-h-[300px]">
        Entry not found.
      </div>
    );
  }

  return (
    <article className="bg-white p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm">
      <div className="prose prose-slate lg:prose-lg max-w-none">
        {documentToReactComponents(entry.fields.content)}
      </div>
    </article>
  );
}