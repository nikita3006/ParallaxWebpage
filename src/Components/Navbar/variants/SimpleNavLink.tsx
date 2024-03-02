import React from "react";
import LinkWrapper from "../linkWrapper/LinkWrapper";
import { BaseNavLinkProps } from "../bases/BaseNavlink";

export interface SimpleNavLinkProps extends BaseNavLinkProps {
    label: string;
}

const SimpleNavLink: React.FC<SimpleNavLinkProps> = ({ to, label }) => {
    return (
        <LinkWrapper to={to}>
            <span className="nav-item">{label}</span>
        </LinkWrapper>
    );
};

export default SimpleNavLink;
