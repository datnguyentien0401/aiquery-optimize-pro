
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Optimization } from "@/types/optimization";

interface OptimizationFeedbackProps {
  optimization: Optimization;
  onFeedbackSubmit: (feedback: 'effective' | 'ineffective') => void;
}

const OptimizationFeedback = ({ optimization, onFeedbackSubmit }: OptimizationFeedbackProps) => {
  const [selectedFeedback, setSelectedFeedback] = useState<'effective' | 'ineffective' | null>(
    optimization.feedback || null
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(!!optimization.feedback);
  const { toast } = useToast();

  const handleFeedbackChange = (value: 'effective' | 'ineffective') => {
    setSelectedFeedback(value);
  };

  const handleSubmit = () => {
    if (!selectedFeedback) {
      toast({
        title: "Vui lòng chọn phản hồi",
        description: "Hãy cho chúng tôi biết liệu việc tối ưu hóa có hiệu quả không",
        variant: "destructive",
      });
      return;
    }

    onFeedbackSubmit(selectedFeedback);
    setIsSubmitted(true);
    
    toast({
      title: "Cảm ơn phản hồi của bạn!",
      description: "Phản hồi của bạn sẽ giúp cải thiện hệ thống tối ưu hóa của chúng tôi.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 rounded-md p-4 mt-6 flex items-center justify-center">
        <CheckCircle className="text-green-600 dark:text-green-400 mr-2 h-5 w-5" />
        <p className="text-sm text-green-800 dark:text-green-300">
          Cảm ơn bạn đã gửi phản hồi về kết quả tối ưu hóa!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <Separator className="mb-4" />
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Đánh Giá Kết Quả Tối Ưu Hóa</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Các đề xuất tối ưu hóa có giúp cải thiện hiệu suất truy vấn của bạn không?
        </p>

        <RadioGroup 
          value={selectedFeedback || ""} 
          onValueChange={handleFeedbackChange as (value: string) => void}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="effective" id="effective" />
            <Label htmlFor="effective" className="flex items-center">
              <ThumbsUp className="h-4 w-4 text-green-500 mr-1" />
              <span>Có, hiệu quả</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ineffective" id="ineffective" />
            <Label htmlFor="ineffective" className="flex items-center">
              <ThumbsDown className="h-4 w-4 text-red-500 mr-1" />
              <span>Không hiệu quả</span>
            </Label>
          </div>
        </RadioGroup>

        <Button 
          onClick={handleSubmit} 
          variant="outline" 
          className="w-full border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          Gửi Phản Hồi
        </Button>
      </div>
    </div>
  );
};

export default OptimizationFeedback;
