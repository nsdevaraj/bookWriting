import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChapterView } from './components/ChapterView';
import { INITIAL_CHAPTERS } from './constants';
import { Chapter } from './types';

function App() {
  const [chapters, setChapters] = useState<Chapter[]>(INITIAL_CHAPTERS);
  const [currentChapterId, setCurrentChapterId] = useState<string>('1');

  const currentChapter = chapters.find(c => c.id === currentChapterId) || chapters[0];

  const handleUpdateChapter = (id: string, content: string) => {
    setChapters(prev => prev.map(c => {
      if (c.id === id) {
        // If content is empty string, we treat it as reset to missing
        if (content === '') {
            return { ...c, content: undefined, status: 'missing' };
        }
        return { ...c, content, status: 'draft', lastUpdated: new Date().toISOString() };
      }
      return c;
    }));
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar 
        chapters={chapters} 
        currentChapterId={currentChapterId} 
        onSelectChapter={setCurrentChapterId} 
      />
      
      <main className="flex-1 overflow-y-auto bg-white scroll-smooth">
        <ChapterView 
          chapter={currentChapter} 
          onUpdateChapter={handleUpdateChapter}
        />
      </main>

      {/* Floating Info Pill */}
      <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg text-xs font-medium z-50 flex items-center space-x-2">
         <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
         <span>Gemini 3 Pro Active</span>
      </div>
    </div>
  );
}

export default App;