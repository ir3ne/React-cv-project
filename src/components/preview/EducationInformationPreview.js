import React from 'react';

const EducationInformationPreview = (props) => {
  return (
    <div>
      {/* <h4>Education Experience</h4> */}
      {props.educationCompiled.map(ed => {
        return (
          <div key={ed.id}>
            <div>{ed.course}</div>    
            <div>{ed.where}</div> 
            <div>
              <div>{ed.startDate}</div>    
              <div>{ed.endDate}</div>    
            </div>  
          </div>
        )
      })}
      <div></div>
    </div>
  );
}

export default EducationInformationPreview;