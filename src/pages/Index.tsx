
import { useState } from "react";
import QueryOptimizerForm from "@/components/QueryOptimizerForm";
import OptimizationResults from "@/components/OptimizationResults";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Optimization } from "@/types/optimization";
import ModelSelector from "@/components/ModelSelector";

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
      
      // Construct the prompt
      const prompt = `
Tôi cần tối ưu hóa câu truy vấn MySQL sau:

${formData.query}

Thông tin bổ sung:
- Cấu trúc bảng và số lượng bản ghi: ${formData.tableStructure}
- Các chỉ mục/index hiện tại: ${formData.indexes}
- Vấn đề hiện tại: ${formData.performanceIssue}
- EXPLAIN kết quả của câu query: ${formData.explainResults}
- Thông tin Database server: ${formData.serverInfo}

Vui lòng:
1. Phân tích các vấn đề hiệu suất trong câu truy vấn hiện tại
2. Đề xuất câu truy vấn được tối ưu hóa
3. Giải thích các thay đổi và lý do
4. Đề xuất các chỉ mục bổ sung nếu cần
5. Đề xuất các thay đổi cấu trúc bảng nếu có thể cải thiện hiệu suất
6. Đề xuất cách tăng hiệu năng khác liên quan đến cấu hình server
`;

      // In a real implementation, this would call the OpenAI API
      // For now, we'll simulate a response
      const simulatedResponse = {
        originalQuery: formData.query,
        optimizedQuery: formData.query
          .replace("SELECT *", "SELECT id, name, created_at")
          .replace("WHERE", "WHERE id > 1000 AND ")
          .concat(" LIMIT 100"),
        performanceIssues: [
          "Sử dụng SELECT * khi chỉ cần một số cột nhất định",
          "Thiếu điều kiện lọc hiệu quả",
          "Không sử dụng LIMIT để giới hạn kết quả",
          "Thiếu chỉ mục cho cột trong điều kiện WHERE"
        ],
        explanation: "Câu truy vấn đã được tối ưu bằng cách chỉ chọn các cột cần thiết, thêm điều kiện lọc hiệu quả, và giới hạn kết quả trả về.",
        suggestedIndexes: [
          "CREATE INDEX idx_user_id ON users(id)",
          "CREATE INDEX idx_created_at ON users(created_at)"
        ],
        tableStructureChanges: [
          "Cân nhắc phân chia bảng nếu có quá nhiều dữ liệu lịch sử",
          "Sử dụng ENUM thay vì VARCHAR cho các cột có giá trị cố định"
        ],
        serverConfigSuggestions: [
          "Tăng innodb_buffer_pool_size để phù hợp với 75% RAM server",
          "Điều chỉnh query_cache_size nếu có nhiều truy vấn đọc",
          "Xem xét việc sử dụng đĩa SSD cho cơ sở dữ liệu"
        ]
      };

      // Simulate API delay
      setTimeout(() => {
        setOptimization(simulatedResponse);
        setIsLoading(false);
        toast({
          title: "Tối ưu hóa hoàn tất",
          description: "Kết quả tối ưu hóa cho truy vấn của bạn đã sẵn sàng!",
        });
      }, 2000);
    } catch (error) {
      console.error("Error during optimization:", error);
      setIsLoading(false);
      toast({
        title: "Lỗi",
        description: "Đã xảy ra lỗi khi tối ưu hóa truy vấn. Vui lòng thử lại sau.",
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
            <OptimizationResults optimization={optimization} isLoading={isLoading} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
