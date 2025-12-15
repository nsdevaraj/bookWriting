import React from 'react';
import { Chapter } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  currentChapterId: string | null;
  onSelectChapter: (id: string) => void;
}

const ChapterItem: React.FC<{ chapter: Chapter, isActive: boolean, onClick: () => void }> = ({ chapter, isActive, onClick }) => {
  let statusColor = "bg-gray-200 text-gray-600";
  let statusIcon = null;

  if (chapter.status === 'validated') {
    statusColor = "bg-green-100 text-green-700";
    statusIcon = (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
  } else if (chapter.status === 'missing') {
    statusColor = "bg-amber-100 text-amber-700";
    statusIcon = (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
  } else {
    // Draft
    statusColor = "bg-blue-100 text-blue-700";
    statusIcon = (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 flex items-center justify-between group transition-colors duration-150 ${
        isActive 
          ? 'bg-brand-50 border-r-4 border-brand-500' 
          : 'hover:bg-gray-50 border-r-4 border-transparent'
      }`}
    >
      <div className="flex items-center space-x-3 overflow-hidden">
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium ${isActive ? 'bg-brand-200 text-brand-800' : 'bg-gray-100 text-gray-500'}`}>
          {chapter.id}
        </span>
        <span className={`text-sm truncate font-medium ${isActive ? 'text-brand-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
          {chapter.title}
        </span>
      </div>
      
      <div className={`flex-shrink-0 ml-2 p-1 rounded-full ${statusColor}`}>
        {statusIcon}
      </div>
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ chapters, currentChapterId, onSelectChapter }) => {
  return (
    <div className="w-80 h-full bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-10 shadow-sm">
      <div className="p-5 border-b border-gray-100 bg-white">
        <div className="flex items-center space-x-2 text-brand-600 mb-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h1 className="text-lg font-bold tracking-tight text-gray-900">Inforiver Book</h1>
        </div>
        <p className="text-xs text-gray-500 ml-8">AI-Powered Documentation</p>
      </div>
      
      <div className="flex-1 overflow-y-auto pb-4">
        <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Chapters
        </div>
        <div className="space-y-0.5">
          {chapters.map(chapter => (
            <ChapterItem 
              key={chapter.id} 
              chapter={chapter} 
              isActive={currentChapterId === chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
            />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between text-xs text-gray-500">
           <span>{chapters.filter(c => c.status === 'validated').length} / {chapters.length} Validated</span>
           <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full" 
                style={{ width: `${(chapters.filter(c => c.status === 'validated').length / chapters.length) * 100}%` }}
              ></div>
           </div>
        </div>
      </div>
    </div>
  );
};