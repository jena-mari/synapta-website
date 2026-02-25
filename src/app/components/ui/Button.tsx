import React from 'react';

// 1. Define the props, including the optional 'variant'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline'; // Add 'variant' here
}

export default function Button({ 
  children, 
  variant = 'primary', // Default to primary if not specified
  className = "", 
  ...props 
}: ButtonProps) {
  
  // 2. Define the styles for each variant
  const variantStyles = {
    primary: "bg-gradient-to-r from-synaptaPurple to-synaptaBlue text-white shadow-lg",
    outline: "border border-white/30 text-white hover:bg-white/10"
  };

  return (
    <button 
      // 3. Combine base styles, variant styles, and the custom className
      className={`px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}