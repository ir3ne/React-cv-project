import React from 'react';

const EducationInformationPreview = (props) => {
  return (
    <div>
      <h4 className="mb-2">Education Experience</h4>
      {props.educationCompiled.map(ed => {
        return (
          <div key={ed.id}>
            <div className="has-text-weight-bold"><span style={{width: '25px'}}>📚</span> {ed.course}</div>  
            <div style={{marginLeft: '20px'}}>
              <div>{ed.where}</div> 
              <div className="has-text-grey mt-2 is-size-7">{ed.startDate ? `From: ${ed.startDate}` : null}</div>    
              <div className="has-text-grey is-size-7">{ed.endDate ? `To: ${ed.endDate}` : null}</div>    
            </div>
          </div>
        )
      })}
      <div></div>
    </div>
  );
}

export default EducationInformationPreview;