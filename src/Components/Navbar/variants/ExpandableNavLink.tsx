import React from "react";
import LinkWrapper from "../linkWrapper/LinkWrapper";
import { BaseNavLinkProps } from "../bases/BaseNavlink";

export interface ExpandableNavLinkProps extends BaseNavLinkProps {
    label: string;
    subLinks: { to: string; label: string }[];
}

const ExpandableNavLink: React.FC<ExpandableNavLinkProps> = ({
    to,
    label,
    subLinks,
}) => {
    return (
        <div className="expandable-nav-link">
            <LinkWrapper to={to}>
                <span className="nav-item">{label}</span>
            </LinkWrapper>
            <div className="sub-links">
                {subLinks.map((subLink) => (
                    <LinkWrapper key={subLink.to} to={subLink.to}>
                        <span>{subLink.label}</span>
                    </LinkWrapper>
                ))}
            </div>
        </div>
    );
};

export default ExpandableNavLink;
