import React from 'react';

const Button = (props) => {
  return <button className="button is-primary" type={props.type}>{props.text}</button>
}

export default Button;