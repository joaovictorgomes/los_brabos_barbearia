import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="text-black font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
