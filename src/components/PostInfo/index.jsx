import React, { Component } from "react";
import { Link } from "gatsby";
import moment from "moment";
import _ from "lodash";
import config from "../../../data/SiteConfig";
import "./PostInfo.scss";

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="row">
        <div className="col">
        {`${moment(postNode.frontmatter.date).format(
            config.dateFormat
          )}`}
        </div>
        <div className="col">
        <Link
          className="category-link"
          // to={`/hainamer/${_.kebabCase(post.category)}`}
          to={`/${post.templateKey}/${_.kebabCase(post.category)}`}
        >
          {post.category}
        </Link>
        </div>
      </div>
     
    );
  }
}

export default PostInfo;
