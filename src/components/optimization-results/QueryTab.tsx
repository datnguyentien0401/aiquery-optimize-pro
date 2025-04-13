
import { Badge } from "@/components/ui/badge";
import { Optimization } from "@/types/optimization";

interface QueryTabProps {
  optimization: Optimization;
}

const QueryTab = ({ optimization }: QueryTabProps) => {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Truy Vấn Gốc</h3>
          <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
            Gốc
          </Badge>
        </div>
        <div className="relative">
          <pre className="p-4 rounded-md bg-slate-50 dark:bg-slate-900 text-sm font-mono overflow-x-auto">
            {optimization.originalQuery}
          </pre>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Truy Vấn Đã Tối Ưu</h3>
          <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800">
            Đã Tối Ưu
          </Badge>
        </div>
        <div className="relative">
          <pre className="p-4 rounded-md bg-green-50 dark:bg-slate-900 dark:border dark:border-green-800 text-sm font-mono overflow-x-auto">
            {optimization.optimizedQuery}
          </pre>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Giải Thích</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {optimization.explanation}
        </p>
      </div>
    </div>
  );
};

export default QueryTab;
