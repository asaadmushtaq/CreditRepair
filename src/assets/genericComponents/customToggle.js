import React from "react";
import { Button } from "react-bootstrap";

export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
        bsPrefix="input-group rounded p-2 custom-toggle-button custom-grey-button"
        variant="light"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>
        {children}
    </Button>
));