// components/ui/Button.tsx

import React from 'react';

const Button: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className=" text-black font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button; // Certifique-se de exportar o componente Button aqui
