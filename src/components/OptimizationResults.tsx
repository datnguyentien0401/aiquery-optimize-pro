
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Optimization } from "@/types/optimization";
import { Sparkles, AlertCircle, Database, Server, Download, Code, ListChecks } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizationResultsProps {
  optimization: Optimization | null;
  isLoading: boolean;
}

const OptimizationResults = ({ optimization, isLoading }: OptimizationResultsProps) => {
  if (isLoading) {
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
          <Separator />
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
  }

  if (!optimization) {
    return (
      <Card className="shadow-md bg-white dark:bg-slate-800 h-full">
        <CardHeader className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700">
          <CardTitle className="flex items-center text-slate-800 dark:text-white">
            <Sparkles className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
            Kết Quả Tối Ưu Hóa
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <div className="h-full flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="h-16 w-16 text-slate-400 dark:text-slate-500 mb-4" />
            <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">
              Chưa Có Kết Quả Tối Ưu Hóa
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              Nhập thông tin về truy vấn MySQL của bạn và nhấn "Tối Ưu Hóa Truy Vấn" để nhận các đề xuất cải thiện hiệu suất.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-md bg-white dark:bg-slate-800 h-full">
      <CardHeader className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700">
        <CardTitle className="flex items-center text-slate-800 dark:text-white">
          <Sparkles className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
          Kết Quả Tối Ưu Hóa
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <Tabs defaultValue="query" className="w-full">
          <TabsList className="w-full mb-6 bg-slate-100 dark:bg-slate-700">
            <TabsTrigger value="query" className="flex items-center">
              <Code className="mr-2 h-4 w-4" />
              <span>Truy Vấn</span>
            </TabsTrigger>
            <TabsTrigger value="issues" className="flex items-center">
              <ListChecks className="mr-2 h-4 w-4" />
              <span>Vấn Đề</span>
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="flex items-center">
              <Database className="mr-2 h-4 w-4" />
              <span>Đề Xuất</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="query" className="space-y-4">
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
          </TabsContent>

          <TabsContent value="issues" className="space-y-4">
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
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-6">
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
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <Button 
            variant="outline" 
            className="w-full border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Download className="mr-2 h-4 w-4" />
            Tải Xuống Báo Cáo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OptimizationResults;
