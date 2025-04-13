
export interface Optimization {
  id?: string;
  originalQuery: string;
  optimizedQuery: string;
  performanceIssues: string[];
  explanation: string;
  suggestedIndexes: string[];
  tableStructureChanges: string[];
  serverConfigSuggestions: string[];
  feedback?: 'effective' | 'ineffective' | null;
  createdAt?: string;
}
