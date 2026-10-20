import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { DoodleStar, DoodleRaysLeft } from '../doodle/DoodleDecors';

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
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex items-center justify-center py-16 bg-paper-card border-2 border-ink rounded-2xl shadow-doodle min-h-[300px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink"></div>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        <div className="doodle-card p-8 md:p-12 rounded-2xl flex flex-col items-center justify-center text-center text-ink min-h-[300px]">
          <p className="font-doodle text-xl mb-6">
            Project entry for <span className="font-bold text-doodle-coral">"{slug}"</span> not found in CMS.
          </p>
          <Link 
            to="/#projects" 
            className="pressable-btn px-5 py-2.5 bg-doodle-coral text-white font-doodle text-lg font-bold rounded-xl shadow-doodle"
          >
            ← Back to Sketchbook
          </Link>
        </div>
      </main>
    );
  }

  const richTextOptions = {
    renderNode: {
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
              className="w-full rounded-2xl border-2 border-ink shadow-doodle-sm"
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
    <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
      <div className="mb-6">
        <Link 
          to="/#projects" 
          className="pressable-btn inline-flex items-center gap-2 px-4 py-1.5 bg-paper-card border-2 border-ink rounded-xl font-doodle text-base font-bold text-ink shadow-doodle-sm"
        >
          <span>←</span> Back to Projects
        </Link>
      </div>

      <article className="doodle-card p-8 md:p-12 rounded-2xl shadow-doodle relative">
        <div className="absolute -top-3.5 -right-3 text-doodle-mustard">
          <DoodleStar className="w-8 h-8" />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <DoodleRaysLeft className="w-6 h-6 text-doodle-coral" />
          <span className="font-doodle text-sm font-bold uppercase tracking-wider text-doodle-coral">
            Project Case Study
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold font-doodle tracking-tight mb-6 text-ink">
          {project.fields.title}
        </h1>

        <div className="prose prose-slate max-w-none text-ink font-sans leading-relaxed">
          {documentToReactComponents(project.fields.details, richTextOptions)}
        </div>
      </article>
    </main>
  );
}