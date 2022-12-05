import React, { useState } from "react";
import './button.css'

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  const [link] = useState(props.link);
  return (
    <button href={link} className={`button-${variant} btn-${size}`}>{props.children}</button>
  );
}
export default Button;