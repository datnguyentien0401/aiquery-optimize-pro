
import { AlertCircle } from "lucide-react";
import { Optimization } from "@/types/optimization";

interface IssuesTabProps {
  optimization: Optimization;
}

const IssuesTab = ({ optimization }: IssuesTabProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Các Vấn Đề Hiệu Suất</h3>
        <ul className="space-y-2">
          {optimization.performanceIssues.map((issue, index) => (
            <li key={index} className="flex items-start">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 dark:text-slate-400 text-sm">{issue}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IssuesTab;
