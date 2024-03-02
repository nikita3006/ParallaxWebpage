import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface BaseNavLinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement>  {
    to: string;
    children?: ReactNode;
}

const BaseNavLink: React.FC<BaseNavLinkProps> = ({ to, children }) => {
    return <Link to={to}>{children}</Link>;
};

export default BaseNavLink;
