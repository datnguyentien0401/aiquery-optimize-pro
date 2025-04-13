
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Sparkles } from "lucide-react";

const OptimizationResultsEmpty = () => {
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
};

export default OptimizationResultsEmpty;
