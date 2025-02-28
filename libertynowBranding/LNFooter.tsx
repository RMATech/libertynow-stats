
/**
 * This is the footer component for the rebranding of Liberty Now AS. It includes copyright information and is rendered on publicly 
 * accessible pages, such as the login page. The component is implemented in the Footer.tsx file located at app/core/components/footer/Footer.tsx.
*/

import React  from 'react';
interface Props{
    className?:string;
}
export const LNFooter:React.FC<Props> = ({className}) => {
    const currentYear = new Date().getFullYear();
    return (
      <div className={className}>
        <p>&copy; {currentYear} Liberty Now AS - All rights reserved</p>
      </div>
    );
  };