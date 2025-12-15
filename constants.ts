import { Chapter } from './types';

export const INITIAL_CHAPTERS: Chapter[] = [
  // 1-15 Validated (Mocked as mostly complete)
  { id: '1', title: 'Introduction to Inforiver', status: 'validated', content: '# Introduction to Inforiver\n\nInforiver is a powerful reporting and analytics extension for Power BI...' },
  { id: '2', title: 'Installation & Setup', status: 'validated', content: '# Installation & Setup\n\nTo install Inforiver, navigate to the AppSource...' },
  { id: '3', title: 'Basic Visuals & Charts', status: 'validated' },
  { id: '4', title: 'Header & Footer Customization', status: 'validated' },
  { id: '5', title: 'Row & Column Management', status: 'validated' },
  { id: '6', title: 'Number Formatting', status: 'validated' },
  { id: '7', title: 'Conditional Formatting', status: 'validated' },
  { id: '8', title: 'Notes & Annotations', status: 'validated' },
  { id: '9', title: 'Exporting to PDF & Excel', status: 'validated' },
  { id: '10', title: 'Sorting & Ranking', status: 'validated' },
  { id: '11', title: 'Filtering & Top N', status: 'validated' },
  { id: '12', title: 'Totals & Subtotals', status: 'validated' },
  { id: '13', title: 'Display Settings', status: 'validated' },
  { id: '14', title: 'Themes & Styles', status: 'validated' },
  { id: '15', title: 'Interaction & Navigation', status: 'validated' },
  
  // 16+ Missing (Need Generation)
  { id: '16', title: 'Advanced DAX Integration', status: 'missing' },
  { id: '17', title: 'Data Writeback Capabilities', status: 'missing' },
  { id: '18', title: 'Enterprise Scheduling', status: 'missing' },
  { id: '19', title: 'Forecasting & Simulations', status: 'missing' },
  { id: '20', title: 'Manual Data Input', status: 'missing' },
  { id: '21', title: 'Commentary & Collaboration', status: 'missing' },
  { id: '22', title: 'Scenario Planning', status: 'missing' },
  { id: '23', title: 'Audit Logs & Security', status: 'missing' },
  { id: '24', title: 'API Integration', status: 'missing' },
  { id: '25', title: 'Best Practices for Performance', status: 'missing' },
];

export const INFORIVER_DOCS_URL = "https://docs.inforiver.com/analytics+?fallback=true";
