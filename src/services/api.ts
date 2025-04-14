
import { Optimization } from "@/types/optimization";

// Cấu hình API
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  ENDPOINTS: {
    OPTIMIZE: '/optimize-query',
  },
  TIMEOUT: 30000, // 30 seconds
};

// Kiểu dữ liệu cho request tối ưu hóa
export interface OptimizeQueryRequest {
  query: string;
  tableStructure: string;
  indexes: string;
  performanceIssue: string;
  explainResults: string;
  serverInfo: string;
  model: string;
}

// Service để tương tác với backend API
export const ApiService = {
  /**
   * Gửi request để tối ưu hóa truy vấn
   * @param data Dữ liệu từ form
   * @returns Promise với kết quả tối ưu hóa
   */
  async optimizeQuery(data: OptimizeQueryRequest): Promise<Optimization> {
    try {
      // TODO: Khi đã có backend API, hãy bỏ comment đoạn code sau
      /*
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.OPTIMIZE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `API request failed with status ${response.status}`
        );
      }

      return await response.json();
      */

      // Mã mô phỏng - sẽ bị loại bỏ khi có backend thực tế
      console.log('Sending optimization request to API (simulated):', data);
      
      // Mô phỏng độ trễ mạng
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Phản hồi mô phỏng
      return {
        id: Date.now().toString(),
        originalQuery: data.query,
        optimizedQuery: data.query
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
        ],
        createdAt: new Date().toISOString(),
        feedback: null
      };
    } catch (error) {
      console.error('Error optimizing query:', error);
      throw error;
    }
  },

  /**
   * Gửi phản hồi về hiệu quả của tối ưu hóa
   * @param optimization Thông tin tối ưu hóa với phản hồi
   */
  async submitFeedback(optimization: Optimization): Promise<void> {
    try {
      // TODO: Khi đã có backend API, hãy bỏ comment đoạn code sau
      /*
      const response = await fetch(`${API_CONFIG.BASE_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          optimizationId: optimization.id,
          feedback: optimization.feedback
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit feedback: ${response.statusText}`);
      }
      */

      // Mã mô phỏng
      console.log('Feedback submitted (simulated):', optimization.feedback);
      console.log('Full optimization data:', optimization);
      
      // Mô phỏng độ trễ mạng
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return;
    } catch (error) {
      console.error('Error submitting feedback:', error);
      throw error;
    }
  }
};
