import React from 'react';

const Textarea = (props) => {
  return (
    <textarea 
      className="textarea" 
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      readOnly={!props.isEditable}
    ></textarea>
  );
}

export default Textarea;