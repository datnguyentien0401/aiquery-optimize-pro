
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Code, ListChecks, Database } from "lucide-react";
import { Optimization } from "@/types/optimization";
import OptimizationFeedback from "./OptimizationFeedback";
import OptimizationResultsLoading from "./optimization-results/OptimizationResultsLoading";
import OptimizationResultsEmpty from "./optimization-results/OptimizationResultsEmpty";
import QueryTab from "./optimization-results/QueryTab";
import IssuesTab from "./optimization-results/IssuesTab";
import SuggestionsTab from "./optimization-results/SuggestionsTab";
import DownloadButton from "./optimization-results/DownloadButton";

interface OptimizationResultsProps {
  optimization: Optimization | null;
  isLoading: boolean;
  onFeedbackSubmit?: (optimization: Optimization) => void;
}

const OptimizationResults = ({ optimization, isLoading, onFeedbackSubmit }: OptimizationResultsProps) => {
  if (isLoading) {
    return <OptimizationResultsLoading />;
  }

  if (!optimization) {
    return <OptimizationResultsEmpty />;
  }

  const handleFeedbackSubmit = (feedback: 'effective' | 'ineffective') => {
    if (optimization && onFeedbackSubmit) {
      const updatedOptimization = {
        ...optimization,
        feedback
      };
      onFeedbackSubmit(updatedOptimization);
    }
  };

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

          <TabsContent value="query">
            <QueryTab optimization={optimization} />
          </TabsContent>

          <TabsContent value="issues">
            <IssuesTab optimization={optimization} />
          </TabsContent>

          <TabsContent value="suggestions">
            <SuggestionsTab optimization={optimization} />
          </TabsContent>
        </Tabs>

        {optimization && <OptimizationFeedback 
          optimization={optimization} 
          onFeedbackSubmit={handleFeedbackSubmit} 
        />}

        <div className="mt-6">
          <DownloadButton />
        </div>
      </CardContent>
    </Card>
  );
};

export default OptimizationResults;
