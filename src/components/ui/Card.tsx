import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = false,
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-sm p-8';
  const hoverStyles = hoverEffect ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;