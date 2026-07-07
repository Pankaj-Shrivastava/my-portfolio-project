import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [linkedEntries, setLinkedEntries] = useState([]);
  const [linkedAssets, setLinkedAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
        const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

        if (!SPACE_ID || !ACCESS_TOKEN) {
          console.warn("CMS credentials missing. Please set them in your environment variables.");
          setIsLoading(false);
          return;
        }

        const query = `content_type=project&fields.slug=${slug}&limit=1`;
        const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?${query}`;
        
        const response = await fetch(url, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setProject(data.items[0]);
          if (data.includes) {
            if (data.includes.Entry) setLinkedEntries(data.includes.Entry);
            if (data.includes.Asset) setLinkedAssets(data.includes.Asset);
          }
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <main className="flex-1 container mx-auto px-6 py-16 max-w-3xl">
        <div className="flex items-center justify-center py-12 bg-white border border-slate-200 rounded-2xl shadow-sm min-h-[300px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="flex-1 container mx-auto px-6 py-16 max-w-3xl">
        <div className="bg-white p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center justify-center text-slate-500 min-h-[300px]">
          <p className="mb-4">Project not found in CMS. Make sure a 'project' entry with slug '{slug}' exists.</p>
          <Link to="/#projects" className="text-slate-600 hover:text-slate-900 font-medium inline-flex items-center transition-colors">
            <span className="mr-2">←</span> Back to Portfolio
          </Link>
        </div>
      </main>
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
              className="w-full rounded-xl border border-slate-200 shadow-sm"
            />
            {(description || title) && (
              <figcaption className="mt-2 text-center text-sm text-slate-400">
                {description || title}
              </figcaption>
            )}
          </figure>
        );
      },

      [BLOCKS.TABLE]: (node, children) => (
        <div className="overflow-x-auto my-8 border border-slate-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 m-0">
            <tbody className="divide-y divide-slate-200 bg-white">
              {children}
            </tbody>
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => (
        <tr className="hover:bg-slate-50 transition-colors m-0">{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="px-6 py-4 whitespace-normal text-base text-slate-700 align-top m-0">
          {children}
        </td>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="px-6 py-3 bg-slate-50 text-left text-sm font-semibold text-slate-900 uppercase tracking-wider m-0">
          {children}
        </th>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const entryId = node.data?.target?.sys?.id;
        const linkedEntry = linkedEntries.find(entry => entry.sys.id === entryId);
        
        let href = "#";
        if (linkedEntry && linkedEntry.fields) {
          if (linkedEntry.fields.url) {
            href = linkedEntry.fields.url;
          } else if (linkedEntry.fields.link) {
            href = linkedEntry.fields.link;
          }
        }
        
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800 transition-colors font-medium">
            {children}
          </a>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800 transition-colors font-medium">
            {children}
          </a>
        );
      }
    }
  };

  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-3xl">
      <article className="bg-white p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-800">{project.fields.title}</h1>
        <div className="prose prose-slate max-w-none">
          {documentToReactComponents(project.fields.details, richTextOptions)}
        </div>
      </article>
    </main>
  );
}