
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface ModelSelectorProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
}

const ModelSelector = ({ selectedModel, onSelectModel }: ModelSelectorProps) => {
  return (
    <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI Model:</span>
          </div>
          <Select value={selectedModel} onValueChange={onSelectModel}>
            <SelectTrigger className="w-[180px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
              <SelectItem value="gpt-4o">GPT-4o</SelectItem>
              <SelectItem value="gpt-4.5-preview">GPT-4.5 Preview</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelSelector;
