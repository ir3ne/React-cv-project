import React from 'react';

const Input = (props) => {
  return (
    <div className="field">
      <div className="control">
        <input 
          className="input is-small" 
          name={props.name}
          type={props.type} 
          placeholder={props.placeholder}
          pattern={props.type === 'tel' ? '[0-9]{3}-[0-9]{3}-[0-9]{4}' : null} 
          onChange={props.handleChange}
          // onChange={(e) => console.log(e.target.value)}
          readOnly={!props.isEditable}
        />
      </div>
    </div>
  );
}

export default Input;