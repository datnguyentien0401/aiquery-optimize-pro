
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles } from "lucide-react";

const OptimizationResultsLoading = () => {
  return (
    <Card className="shadow-md bg-white dark:bg-slate-800 h-full">
      <CardHeader className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700">
        <CardTitle className="flex items-center text-slate-800 dark:text-white">
          <Sparkles className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
          Kết Quả Tối Ưu Hóa
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-px w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-4 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-10 rounded-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default OptimizationResultsLoading;
