import React from 'react';

const Button = (props) => {
  return <button className={props.className} type={props.type} onClick={props.handleClick}>{props.text}</button>
}

export default Button;