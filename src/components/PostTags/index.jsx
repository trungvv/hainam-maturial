import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./PostTags.scss";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        Tags: {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
            <span className="badge badge-pill badge-light">{tag}</span>
              {/* <Chip label={tag} className="post-preview-tags" /> */}
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
