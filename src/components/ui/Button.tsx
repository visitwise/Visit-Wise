import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/95',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/95',
    ghost: 'text-secondary bg-transparent hover:bg-accent active:bg-accent/80 border border-secondary/20',
  };
  
  const sizeStyles = {
    sm: 'text-sm h-9 px-4 py-2',
    md: 'text-base h-10 px-5 py-2.5',
    lg: 'text-lg h-12 px-8 py-3',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;