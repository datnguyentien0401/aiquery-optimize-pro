
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2, Database, Server, Code, BarChart } from "lucide-react";

interface QueryOptimizerFormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

const QueryOptimizerForm = ({ onSubmit, isLoading }: QueryOptimizerFormProps) => {
  const [formData, setFormData] = useState({
    query: "SELECT * FROM users WHERE status = 'active'",
    tableStructure: "users(id INT, name VARCHAR(255), email VARCHAR(255), status VARCHAR(20), created_at DATETIME) - ~1,000,000 records",
    indexes: "PRIMARY KEY(id), INDEX(email)",
    performanceIssue: "Truy vấn chậm khi số lượng người dùng tăng lên trên 1 triệu",
    explainResults: "id: 1, select_type: SIMPLE, table: users, type: ALL, rows: 1000000, Extra: Using where",
    serverInfo: "MySQL 8.0, 16GB RAM, 8 CPU cores, 500GB SSD, ~10,000 truy vấn mỗi giờ"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="shadow-md bg-white dark:bg-slate-800">
      <CardHeader className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700">
        <CardTitle className="flex items-center text-slate-800 dark:text-white">
          <Code className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
          Nhập Thông Tin Truy Vấn
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="query" className="w-full">
            <TabsList className="w-full mb-6 bg-slate-100 dark:bg-slate-700">
              <TabsTrigger value="query" className="flex items-center">
                <Code className="mr-2 h-4 w-4" />
                <span>Truy Vấn</span>
              </TabsTrigger>
              <TabsTrigger value="database" className="flex items-center">
                <Database className="mr-2 h-4 w-4" />
                <span>Cấu Trúc DB</span>
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center">
                <BarChart className="mr-2 h-4 w-4" />
                <span>Hiệu Năng</span>
              </TabsTrigger>
              <TabsTrigger value="server" className="flex items-center">
                <Server className="mr-2 h-4 w-4" />
                <span>Server</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="query" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="query" className="text-slate-700 dark:text-slate-300">
                  Câu Truy Vấn MySQL
                </Label>
                <Textarea
                  id="query"
                  name="query"
                  placeholder="Nhập câu truy vấn MySQL cần tối ưu hóa..."
                  className="font-mono text-sm h-60 resize-none bg-slate-50 dark:bg-slate-900"
                  value={formData.query}
                  onChange={handleChange}
                  required
                />
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tableStructure" className="text-slate-700 dark:text-slate-300">
                  Cấu Trúc Bảng và Số Lượng Bản Ghi
                </Label>
                <Textarea
                  id="tableStructure"
                  name="tableStructure"
                  placeholder="Mô tả cấu trúc bảng và số lượng bản ghi..."
                  className="h-32 resize-none bg-slate-50 dark:bg-slate-900"
                  value={formData.tableStructure}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="indexes" className="text-slate-700 dark:text-slate-300">
                  Các Chỉ Mục/Index Hiện Tại
                </Label>
                <Textarea
                  id="indexes"
                  name="indexes"
                  placeholder="Liệt kê các chỉ mục hiện có..."
                  className="h-24 resize-none bg-slate-50 dark:bg-slate-900"
                  value={formData.indexes}
                  onChange={handleChange}
                />
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="performanceIssue" className="text-slate-700 dark:text-slate-300">
                  Vấn Đề Hiệu Suất Hiện Tại
                </Label>
                <Textarea
                  id="performanceIssue"
                  name="performanceIssue"
                  placeholder="Mô tả vấn đề hiệu suất bạn đang gặp phải..."
                  className="h-24 resize-none bg-slate-50 dark:bg-slate-900"
                  value={formData.performanceIssue}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="explainResults" className="text-slate-700 dark:text-slate-300">
                  EXPLAIN Kết Quả Của Câu Query
                </Label>
                <Textarea
                  id="explainResults"
                  name="explainResults"
                  placeholder="Kết quả từ lệnh EXPLAIN..."
                  className="h-24 resize-none bg-slate-50 dark:bg-slate-900"
                  value={formData.explainResults}
                  onChange={handleChange}
                />
              </div>
            </TabsContent>

            <TabsContent value="server" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="serverInfo" className="text-slate-700 dark:text-slate-300">
                  Thông Tin Database Server
                </Label>
                <Textarea
                  id="serverInfo"
                  name="serverInfo"
                  placeholder="Thông tin về CPU, RAM, số lượng bản ghi..."
                  className="h-24 resize-none bg-slate-50 dark:bg-slate-900"
                  value={formData.serverInfo}
                  onChange={handleChange}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang Tối Ưu Hóa...
                </>
              ) : (
                'Tối Ưu Hóa Truy Vấn'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default QueryOptimizerForm;
