import React from 'react';

const Input = (props) => {
  return (
    <div className="field">
      <div className="control">
        <input 
          className="input" 
          name={props.name}
          type={props.type} 
          placeholder={props.placeholder}
          value={props.value}
          pattern={props.type === 'tel' ? '[0-9]{3}-[0-9]{3}-[0-9]{4}' : null} 
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default Input;