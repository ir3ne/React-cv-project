import React from 'react';

const InputFile = (props) => {
  return (
    <div className="file">
      <label className="file-label">
        <input 
          className="file-input" 
          type="file" 
          name={props.name}
          onChange={props.handleChange} />
        <span className="file-cta">
          <span className="file-icon">
            <span>⬆️</span>
          </span>
          <span className="file-label">
            {props.placeholder}
          </span>
        </span> 
      </label>
    </div>
  );
}

export default InputFile;