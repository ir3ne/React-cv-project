import React from 'react';

const WorkInformationPreview = (props) => {
  return (
    <div>
      {/* <h4>Work Experience</h4> */}
      {props.workCompiled.map(w => {
        return (
          <div key={w.id}>
            <div className="has-text-weight-bold"><span style={{width: '25px'}}>🧰</span> {w.role}</div>  
            <div style={{marginLeft: '20px'}}>
              <div>{w.where}</div> 
              <div className="has-text-grey mt-2 is-size-7">{w.startDate ? `From: ${w.startDate}` : null}</div>    
              <div className="has-text-grey is-size-7">{w.endDate ? `To: ${w.endDate}` : null}</div>    
              <div className="mt-2">{w.description}</div>
            </div>    
          </div>
        )
      })}
      <div></div>
    </div>
  );
}

export default WorkInformationPreview;