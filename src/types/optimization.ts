
export interface Optimization {
  originalQuery: string;
  optimizedQuery: string;
  performanceIssues: string[];
  explanation: string;
  suggestedIndexes: string[];
  tableStructureChanges: string[];
  serverConfigSuggestions: string[];
}
