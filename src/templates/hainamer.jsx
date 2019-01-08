import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags";
import PostCover from "../components/PostCover";
import PostInfo from "../components/PostInfo";
import SocialLinks from "../components/SocialLinks";
// import PostSuggestions from "../components/PostSuggestions";

import SEO from "../components/SEO";
import moment from "moment";
import _ from "lodash";
import config from "../../data/SiteConfig";
import "./post.scss";

export default class PostTemplate extends React.Component {
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
    const { mobile } = this.state;
    const { slug } = this.props.pageContext;
    // const expanded = !mobile;
    // const postOverlapClass = mobile ? "post-overlap-mobile" : "post-overlap";
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    const coverHeight = mobile ? 180 : 350;
    return (
      <Layout location={this.props.location}>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
            <link href="/logos/favicon.ico" rel="icon" type="image/x-icon" />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />

        <header className="hn-bg-heading">
          <div className="bg_cover">
          <div className="container post-title hn-breadcrumbs ">
            <h1 className="display-4 text-left text-white">{post.title}</h1>
            <p>
              <Link
                className="text-white"
                // to={`/hainamer/${_.kebabCase(post.category)}`}
                to={`/${post.templateKey}/${_.kebabCase(post.category)}`}
              >
                {post.category}
              </Link>
            </p>
          </div>
          </div>
          
        </header>
         
        <div className="row container mb-4">
          {/* Post Content Column */}
          <div className="col-lg-8">
            <div className="post-page-contents">
              {/* <h1 className="">{post.title}</h1> */}
              <div className="pb-3">
                <PostCover
                  postNode={postNode}
                  coverHeight={coverHeight}
                />
              </div>
              <div className="">
                {`${moment(postNode.frontmatter.date).format(
                  config.dateFormat
                )}`}
              </div>
              {/* <PostInfo postNode={postNode} /> */}
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <hr />
              <div className="row">
                <PostTags tags={post.tags} className="col" />
                <SocialLinks
                  postPath={slug}
                  postNode={postNode}
                  mobile={this.state.mobile}
                  className="col"
                />
              </div>
            </div>

          </div>
          {/* Related Post Column */}
          <div className="col-lg-4 bg-light">
            <p>Related Post Column</p>
          </div>
          {/* <PostSuggestions postNode={postNode} /> */}
        </div>

      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        templateKey
      }
    }
  }
`;
