import React from "react";

interface ChatbotMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function ChatbotMessage({ role, content }: ChatbotMessageProps) {
  const isAssistant = role === "assistant";

  // A simple function to render markdown bold and links
  const renderMessageContent = (text: string) => {
    // We want to handle markdown formatting: **bold** and [text](url)
    // First, let's split the text by links: \[([^\]]+)\]\(([^)]+)\)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    
    type Part = 
      | { type: "text"; content: string }
      | { type: "link"; text: string; url: string };

    const parts: Part[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const plainText = text.substring(lastIndex, match.index);
      const linkText = match[1];
      const linkUrl = match[2];

      if (plainText) {
        parts.push({ type: "text", content: plainText });
      }

      parts.push({ type: "link", text: linkText, url: linkUrl });
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push({ type: "text", content: text.substring(lastIndex) });
    }

    return (
      <div className="whitespace-pre-line leading-relaxed break-words text-sm font-medium">
        {parts.map((part, idx) => {
          if (part.type === "link") {
            const isAnchor = part.url.startsWith("#");
            
            return (
              <a
                key={idx}
                href={part.url}
                target={isAnchor ? "_self" : "_blank"}
                rel={isAnchor ? "" : "noopener noreferrer"}
                className={`inline-flex items-center gap-0.5 font-bold transition-all px-2 py-0.5 rounded-md border text-xs mx-0.5 cursor-pointer ${
                  isAssistant 
                    ? "text-indigo-600 hover:text-indigo-800 bg-indigo-50 border-indigo-100 hover:border-indigo-200" 
                    : "text-white hover:text-slate-100 bg-white/20 border-white/30 hover:border-white/50"
                }`}
              >
                {part.text}
              </a>
            );
          }

          // Let's parse bold text **bold** inside the text part
          const textContent = part.content || "";
          const boldRegex = /\*\*([^*]+)\*\*/g;
          const textParts = [];
          let textLastIndex = 0;
          let boldMatch;

          while ((boldMatch = boldRegex.exec(textContent)) !== null) {
            const normalText = textContent.substring(textLastIndex, boldMatch.index);
            const boldText = boldMatch[1];

            if (normalText) {
              textParts.push(<React.Fragment key={`n-${boldMatch.index}`}>{normalText}</React.Fragment>);
            }
            textParts.push(
              <strong key={`b-${boldMatch.index}`} className={`font-extrabold ${isAssistant ? "text-slate-900" : "text-white underline decoration-white/30"}`}>
                {boldText}
              </strong>
            );
            textLastIndex = boldMatch.index + boldMatch[0].length;
          }

          if (textLastIndex < textContent.length) {
            textParts.push(
              <React.Fragment key={`n-last`}>
                {textContent.substring(textLastIndex)}
              </React.Fragment>
            );
          }

          return <span key={idx}>{textParts}</span>;
        })}
      </div>
    );
  };

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.03)] border transition-all duration-200 ${
          isAssistant
            ? "bg-white border-slate-200 text-slate-800 rounded-tl-none"
            : "bg-gradient-to-tr from-purple-600 via-indigo-600 to-indigo-700 border-indigo-600 text-white rounded-tr-none"
        }`}
      >
        {renderMessageContent(content)}
      </div>
    </div>
  );
}
