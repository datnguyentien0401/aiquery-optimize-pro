
import { Brain } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-semibold text-slate-800 dark:text-white">
              AIQuery Optimize Pro
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
            >
              Docs
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
