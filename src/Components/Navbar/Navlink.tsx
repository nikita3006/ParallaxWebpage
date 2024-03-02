import React from "react";
import BaseNavLink, { BaseNavLinkProps } from "./bases/BaseNavlink";
import ExpandableNavLink, {
    ExpandableNavLinkProps,
} from "./variants/ExpandableNavLink";
import SimpleNavLink, { SimpleNavLinkProps } from "./variants/SimpleNavLink";


type NavlinkVariants =
    | ({
          variant: "expandableNavlink";
      } & ExpandableNavLinkProps)
    | ({
          variant: "simpleNavlink";
      } & SimpleNavLinkProps)

    | ({ variant: undefined | "base-navlink" } & BaseNavLinkProps);

const Navlink: React.FC<NavlinkVariants> = ({ variant, ...props }) => {
    switch (variant) {
    case "expandableNavlink":
        return <ExpandableNavLink {...(props as ExpandableNavLinkProps)} />;

    case "simpleNavlink":
        return <SimpleNavLink {...(props as SimpleNavLinkProps)} />;

    default:
        return <BaseNavLink {...props} />;
    }
};

export default Navlink;
