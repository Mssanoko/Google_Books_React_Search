import React from "react";

const bookButton = props => (
    <button className={'book-btn btn btn-${props.btntype} btn-sm'} {...props}>
    {props.children}
    </button>
);

export default bookButton;