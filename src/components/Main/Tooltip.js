import React from 'react';

export const Tooltip = (tooltip) => 
  <div>
    {Object.keys(tooltip).map((fieldName, i) => {
      if(tooltip[fieldName].length > 0){
        return (
          <p key={i}>{tooltip[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div> 

