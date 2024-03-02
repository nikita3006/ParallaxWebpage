import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkWrapperProps {
    to: string;
    children: ReactNode;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
    to,
    children,
}) => {
    return (
        <Link to={to}>
            {children}
        </Link>
    );
};

export default LinkWrapper;
