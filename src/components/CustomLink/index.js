import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export const CustomLink = ({ linkType, to, children, className = "" }) => {
  if (linkType === "internal") {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  } else {
    return (
      <a className={className} href={to} target="_blank">
        {children}
      </a>
    );
  }
};

CustomLink.propTypes = {
  linkType: PropTypes.string,
};

export default CustomLink;