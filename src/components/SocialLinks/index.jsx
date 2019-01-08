import React, { Component } from "react";
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,

} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    // const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const url = urljoin(config.siteUrl, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    );

    return (
      <div className="social-links col right"><small>Share: </small>
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>
    );
  }
}

export default SocialLinks;
