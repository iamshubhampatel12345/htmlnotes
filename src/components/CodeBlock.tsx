import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for HTML
  const highlightSyntax = (code: string) => {
    // Escape HTML first
    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // HTML comments
    highlighted = highlighted.replace(
      /(&lt;!--[\s\S]*?--&gt;)/g,
      '<span class="text-emerald-400 italic">$1</span>'
    );
    
    // HTML tags with attributes
    highlighted = highlighted.replace(
      /(&lt;\/?)([a-zA-Z][a-zA-Z0-9-]*)(.*?)(&gt;)/g,
      (match, opening, tagName, attrs, closing) => {
        let result = `<span class="text-cyan-400 font-semibold">${opening}${tagName}</span>`;
        
        // Highlight attributes
        if (attrs) {
          attrs = attrs.replace(
            /([a-zA-Z-]+)(=)(&quot;|")(.*?)(\3)/g,
            '<span class="text-pink-400">$1</span><span class="text-yellow-300">$2</span><span class="text-lime-400">$3$4$5</span>'
          );
          result += attrs;
        }
        
        result += `<span class="text-cyan-400 font-semibold">${closing}</span>`;
        return result;
      }
    );
    
    return highlighted;
  };

  const processedCode = highlightSyntax(code);

  return (
    <div className="relative group">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-gray-800 border border-gray-700 border-b-0 rounded-t-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">index.html</span>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-all text-xs font-medium text-gray-300 hover:text-white"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code area */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-b-lg overflow-hidden">
        {/* Line numbers background */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-800/50 border-r border-gray-700"></div>
        
        <pre className="overflow-x-auto p-4 pl-14">
          <code 
            className="text-sm font-mono leading-relaxed block"
            dangerouslySetInnerHTML={{ __html: processedCode }}
          />
        </pre>
        
        {/* Line numbers */}
        <div className="absolute left-0 top-0 p-4 pr-3 text-right select-none pointer-events-none">
          {code.split('\n').map((_, index) => (
            <div key={index} className="text-xs text-gray-600 leading-relaxed font-mono">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}