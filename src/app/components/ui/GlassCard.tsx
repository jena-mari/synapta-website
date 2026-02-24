import React from 'react';

// We extend the standard HTML Div attributes so TypeScript 
// recognizes className, id, onClick, etc.
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GlassCard({ children, className, ...props }: Props) {
  return (
    <div 
      // We combine your base styles with the incoming className prop
      className={`bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}