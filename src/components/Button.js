import React from 'react';

const Button = (props) => {
  return <button className="button is-primary" type={props.type} onClick={props.handleWorkExperience}>{props.text}</button>
}

export default Button;