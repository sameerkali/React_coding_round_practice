import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-300">
        <span className="text-sm font-semibold text-gray-600">{language}</span>
        <button
          onClick={handleCopy}
          className={`px-3 py-1 text-sm font-medium text-white rounded-md transition-colors ${
            copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={atelierLakesideDark}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: '1rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export default Code