import React, { Component } from "react";

import { Link } from "gatsby";
import moment from "moment";
import PostTags from "../PostTags";
import PostCover from "../PostCover";
import config from "../../../data/SiteConfig";
import "./PostPreview.scss";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 225;
    return (
      <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card" key={postInfo.title}>
                    <Link to={postInfo.path}>
                        {/* <div className="custom-card-img">
                            <img className="card-img-top" src={productInfo.cover} alt="Card image cap" />
                        </div> */}
                        <PostCover postNode={postInfo} coverHeight={coverHeight} />
                    </Link>
                    <div className="card-body">
                        <Link to={postInfo.path}>
                            <h5 className="media-title">{postInfo.title}</h5>
                        </Link>
                        <p className="card-subtitle">
                            <small className="text-muted">
                              {moment(postInfo.date).format( config.dateFormat)}
                            </small>
                        </p>
                        <div className="overflow-hidden">
                            <p className="card-text text-justify">{postInfo.excerpt}</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
    );
  }
}

export default PostPreview;
