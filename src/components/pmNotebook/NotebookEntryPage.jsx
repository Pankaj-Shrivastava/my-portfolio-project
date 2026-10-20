import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function NotebookEntryPage({ slug }) {
  const [entry, setEntry] = useState(null);
  const [linkedEntries, setLinkedEntries] = useState([]);
  const [linkedAssets, setLinkedAssets] = useState([]);
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
          if (data.includes) {
            if (data.includes.Entry) setLinkedEntries(data.includes.Entry);
            if (data.includes.Asset) setLinkedAssets(data.includes.Asset);
          }
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
      <div className="flex items-center justify-center py-12 bg-paper-card border-2 border-ink rounded-2xl shadow-doodle min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink"></div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="doodle-card p-8 md:p-12 rounded-2xl flex items-center justify-center text-ink-muted min-h-[300px]">
        <p className="font-doodle text-xl">Entry not found in CMS.</p>
      </div>
    );
  }

  const richTextOptions = {
    renderNode: {
      // Embedded images (inline or block assets)
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data?.target?.sys?.id;
        const asset = linkedAssets.find(a => a.sys.id === assetId);
        if (!asset) return null;

        const { file, title, description } = asset.fields;
        const imageUrl = file?.url ? `https:${file.url}` : null;
        if (!imageUrl) return null;

        return (
          <figure className="my-8">
            <img
              src={imageUrl}
              alt={description || title || ''}
              className="w-full rounded-xl border-2 border-ink shadow-doodle-sm"
            />
            {(description || title) && (
              <figcaption className="mt-2 text-center text-sm font-doodle text-ink-muted">
                {description || title}
              </figcaption>
            )}
          </figure>
        );
      },

      [BLOCKS.TABLE]: (node, children) => (
        <div className="overflow-x-auto my-8 border-2 border-ink rounded-xl shadow-doodle-sm">
          <table className="min-w-full divide-y-2 divide-ink m-0">
            <tbody className="divide-y divide-ink/20 bg-paper-card">
              {children}
            </tbody>
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => (
        <tr className="hover:bg-paper-muted transition-colors m-0">{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="px-6 py-4 whitespace-normal text-base text-ink align-top m-0 font-sans">
          {children}
        </td>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="px-6 py-3 bg-paper-muted text-left text-sm font-bold font-doodle text-ink uppercase tracking-wider m-0 border-b-2 border-ink">
          {children}
        </th>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const entryId = node.data?.target?.sys?.id;
        const linkedEntry = linkedEntries.find(e => e.sys.id === entryId);
        
        let href = "#";
        if (linkedEntry && linkedEntry.fields) {
          if (linkedEntry.fields.url) {
            href = linkedEntry.fields.url;
          } else if (linkedEntry.fields.link) {
            href = linkedEntry.fields.link;
          }
        }
        
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-doodle-coral hover:text-doodle-coral-dark underline font-bold transition-colors">
            {children}
          </a>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-doodle-coral hover:text-doodle-coral-dark underline font-bold transition-colors">
            {children}
          </a>
        );
      }
    }
  };

  return (
    <article className="doodle-card p-8 md:p-12 rounded-2xl shadow-doodle">
      <div className="prose prose-slate max-w-none font-sans text-ink leading-relaxed">
        {documentToReactComponents(entry.fields.content, richTextOptions)}
      </div>
    </article>
  );
}