import React from 'react';

const WorkInformationPreview = (props) => {
  return (
    <div>
      <h4>Work Experience</h4>
      {props.workCompiled.map(w => {
        return (
          <div key={w.id}>
            <div>{w.role}</div>    
            <div>{w.where}</div> 
            <div>
              <div>{w.startDate}</div>    
              <div>{w.endDate}</div>    
            </div>   
            <div>{w.description}</div>    
          </div>
        )
      })}
      <div></div>
    </div>
  );
}

export default WorkInformationPreview;