import React, { useState, useEffect } from 'react';
import { Chapter } from '../types';
import { ThinkingStatus } from './ThinkingStatus';
import { suggestOutline, generateChapterContent } from '../services/gemini';

interface ChapterViewProps {
  chapter: Chapter;
  onUpdateChapter: (id: string, content: string) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter, onUpdateChapter }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [outline, setOutline] = useState<string>('');
  const [isOutlineLoading, setIsOutlineLoading] = useState(false);
  const [references, setReferences] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingFile, setIsLoadingFile] = useState(false);

  // Effect to load chapter content from file if available and content is missing
  useEffect(() => {
    const loadContent = async () => {
      if (chapter.fileName && !chapter.content) {
        setIsLoadingFile(true);
        setError(null);
        try {
          // Attempt to fetch from the public chapters directory
          const response = await fetch(`/chapters/${chapter.fileName}`);
          if (!response.ok) {
            throw new Error(`Failed to load chapter file: ${response.statusText}`);
          }
          const text = await response.text();
          onUpdateChapter(chapter.id, text);
        } catch (e) {
          console.error("Error loading chapter file:", e);
          // Don't set error state here to allow fallback to generation UI, 
          // or we can set a specific "file load error" if preferred.
          // For now, we'll let it fall through to the "Missing" UI but with a console error.
        } finally {
          setIsLoadingFile(false);
        }
      }
    };

    loadContent();
  }, [chapter.id, chapter.fileName, chapter.content, onUpdateChapter]);

  const handleSuggestOutline = async () => {
    setIsOutlineLoading(true);
    setError(null);
    try {
      const suggested = await suggestOutline(chapter.title);
      setOutline(suggested);
    } catch (e) {
        setError("Failed to generate outline.");
    } finally {
      setIsOutlineLoading(false);
    }
  };

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const result = await generateChapterContent({
        title: chapter.title,
        outline: outline || undefined
      });
      onUpdateChapter(chapter.id, result.content);
      setReferences(result.references);
    } catch (e) {
      setError("Failed to generate content. Please ensure API key is set.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (isLoadingFile) {
    return (
      <div className="flex flex-col items-center justify-center p-12 h-full">
        <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500">Loading chapter content...</p>
      </div>
    );
  }

  if (chapter.status === 'missing' && !chapter.content) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-12">
        {isGenerating ? (
          <ThinkingStatus />
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900">Chapter Content Missing</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              This chapter has not been written yet. Use the AI Architect to research docs.inforiver.com and draft the content automatically.
            </p>

            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                    {error}
                </div>
            )}

            <div className="max-w-xl mx-auto space-y-4 text-left bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
              <label className="block text-sm font-medium text-gray-700">Recommended Outline (Optional)</label>
              <div className="relative">
                <textarea 
                  value={outline}
                  onChange={(e) => setOutline(e.target.value)}
                  placeholder="Click 'Suggest Outline' or type your own structure..."
                  className="w-full h-32 p-3 text-sm border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500 bg-white shadow-sm"
                />
                 {isOutlineLoading && (
                    <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                )}
              </div>
              <div className="flex justify-between items-center pt-2">
                 <button 
                   onClick={handleSuggestOutline}
                   className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center"
                   disabled={isOutlineLoading}
                 >
                   <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   Suggest Outline
                 </button>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleGenerateContent}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Generate Chapter (Deep Think Mode)
              </button>
              <p className="mt-2 text-xs text-gray-400">Uses Gemini 3 Pro (32k token thinking budget)</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Display Content
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8 border-b border-gray-200 pb-4">
         <div className="flex justify-between items-start">
             <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{chapter.title}</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        chapter.status === 'validated' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                        {chapter.status.toUpperCase()}
                    </span>
                    <span>•</span>
                    <span>ID: {chapter.id}</span>
                </div>
             </div>
             {chapter.status !== 'validated' && (
                 <button 
                    onClick={() => onUpdateChapter(chapter.id, '')} // Reset to allow re-gen
                    className="text-gray-400 hover:text-brand-600 transition-colors"
                    title="Regenerate Content"
                 >
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                 </button>
             )}
         </div>
      </div>

      <article className="markdown-body prose max-w-none">
        {/* Simple whitespace handling for this example, in real app use react-markdown */}
        <div className="whitespace-pre-wrap font-sans text-gray-700">
          {chapter.content || "No content available."}
        </div>
      </article>

      {references.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Sources Referenced</h4>
              <ul className="space-y-1">
                  {references.map((ref, i) => (
                      <li key={i}>
                          <a href={ref} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-600 hover:underline break-all">
                              {ref}
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      )}
    </div>
  );
};