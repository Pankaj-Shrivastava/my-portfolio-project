import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function NotebookEntryPage() {
  const { slug } = useParams();
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

  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/pm-notebook" className="text-slate-600 hover:text-slate-900 font-medium inline-flex items-center transition-colors">
          <span className="mr-2">←</span> Back to Table of Contents
        </Link>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
        </div>
      ) : entry ? (
        <article className="bg-white p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">{entry.fields.title}</h1>
          <time className="block text-slate-500 mb-8">{new Date(entry.fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          <div className="prose prose-slate lg:prose-lg max-w-none">
            {documentToReactComponents(entry.fields.content)}
          </div>
        </article>
      ) : (
        <p className="text-slate-500">Entry not found.</p>
      )}
    </main>
  );
}