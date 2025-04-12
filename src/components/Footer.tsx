
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} AIQuery Optimize Pro. All rights reserved.
          </p>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-slate-600 dark:text-slate-400">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">using</span>
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Lovable
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
