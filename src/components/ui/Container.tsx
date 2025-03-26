
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container = ({ 
  children, 
  className, 
  as: Component = "div", 
  ...props 
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        "container mx-auto px-6 py-12 md:py-24",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
