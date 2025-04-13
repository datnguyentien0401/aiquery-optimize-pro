
import { Database, Server } from "lucide-react";
import { Optimization } from "@/types/optimization";

interface SuggestionsTabProps {
  optimization: Optimization;
}

const SuggestionsTab = ({ optimization }: SuggestionsTabProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Đề Xuất Chỉ Mục</h3>
        <div className="bg-blue-50 dark:bg-slate-900 dark:border dark:border-blue-800 rounded-md p-3">
          <ul className="space-y-2">
            {optimization.suggestedIndexes.map((index, i) => (
              <li key={i} className="font-mono text-xs text-slate-700 dark:text-slate-300">
                {index}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Đề Xuất Cấu Trúc Bảng</h3>
        <ul className="space-y-2">
          {optimization.tableStructureChanges.map((change, index) => (
            <li key={index} className="flex items-start">
              <Database className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 dark:text-slate-400 text-sm">{change}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Đề Xuất Cấu Hình Server</h3>
        <ul className="space-y-2">
          {optimization.serverConfigSuggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start">
              <Server className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 dark:text-slate-400 text-sm">{suggestion}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuggestionsTab;
