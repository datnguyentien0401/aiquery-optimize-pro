
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadButton = () => {
  return (
    <Button 
      variant="outline" 
      className="w-full border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      <Download className="mr-2 h-4 w-4" />
      Tải Xuống Báo Cáo
    </Button>
  );
};

export default DownloadButton;
