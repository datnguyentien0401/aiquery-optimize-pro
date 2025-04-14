
import { useState } from "react";
import QueryOptimizerForm from "@/components/QueryOptimizerForm";
import OptimizationResults from "@/components/OptimizationResults";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Optimization } from "@/types/optimization";
import ModelSelector from "@/components/ModelSelector";
import { ApiService } from "@/services/api";

const Index = () => {
  const [optimization, setOptimization] = useState<Optimization | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const { toast } = useToast();

  const handleOptimize = async (formData: any) => {
    setIsLoading(true);
    try {
      console.log("Submitting for optimization with model:", selectedModel);
      console.log("Form data:", formData);
      
      const result = await ApiService.optimizeQuery({
        ...formData,
        model: selectedModel
      });
      
      setOptimization(result);
      toast({
        title: "Tối ưu hóa hoàn tất",
        description: "Kết quả tối ưu hóa cho truy vấn của bạn đã sẵn sàng!",
      });
    } catch (error) {
      console.error("Error during optimization:", error);
      toast({
        title: "Lỗi",
        description: "Đã xảy ra lỗi khi tối ưu hóa truy vấn. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedbackSubmit = async (updatedOptimization: Optimization) => {
    setOptimization(updatedOptimization);
    
    try {
      await ApiService.submitFeedback(updatedOptimization);
      toast({
        title: "Cảm ơn bạn!",
        description: "Phản hồi của bạn đã được ghi nhận.",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Lỗi",
        description: "Không thể gửi phản hồi. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
              MySQL Query Optimizer
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Tối ưu hóa các câu truy vấn MySQL của bạn với sức mạnh của AI. Nhập thông tin về truy vấn và cơ sở dữ liệu của bạn để nhận các đề xuất tối ưu hóa.
            </p>
          </div>
          
          <div className="mb-6">
            <ModelSelector 
              selectedModel={selectedModel} 
              onSelectModel={setSelectedModel} 
            />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <QueryOptimizerForm onSubmit={handleOptimize} isLoading={isLoading} />
            <OptimizationResults 
              optimization={optimization} 
              isLoading={isLoading}
              onFeedbackSubmit={handleFeedbackSubmit}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
