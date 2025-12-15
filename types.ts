export interface Chapter {
  id: string;
  title: string;
  status: 'validated' | 'draft' | 'missing';
  content?: string;
  lastUpdated?: string;
}

export interface GenerationConfig {
  model: 'gemini-2.5-flash' | 'gemini-3-pro-preview';
  useSearch: boolean;
  thinkingBudget?: number;
}

export interface SearchResult {
  title: string;
  url: string;
}
