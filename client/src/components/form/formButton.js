import React from "react";

export const formButton = props => (
    <button {...props} style= {{ float: "right", marginBottom: 10}} className="btn btn-secondary">
    {props.children}
    </button>
);