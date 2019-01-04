import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags";
import PostCover from "../components/PostCover";
import PostInfo from "../components/PostInfo";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import "./post.scss";

export default class ServiceTemplate extends React.Component {
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
    const expanded = !mobile;
    const postOverlapClass = mobile ? "post-overlap-mobile" : "post-overlap";
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
        {/* <div className="post-page md-grid md-grid--no-spacing"> */}
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
            <link href="/logos/favicon.ico" rel="icon" type="image/x-icon" />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <header className="business-header">
            <div className="container-fluid">
              <div className="row container">
                <div className="col-lg-12">
                  <h1 className="display-3 text-center text-white mt-4">{post.title}</h1>
                </div>
              </div>
            </div>
          </header>
        
        <div className="row container mt-4 mb-4">
          {/* Post Content Column */}
          <div className="col-lg-12">

          <div className="col-lg-8">
            <h1 className="">{post.title}</h1>
            <PostInfo postNode={postNode} />
            <PostCover
                  postNode={postNode}
                  coverHeight={coverHeight}
                />
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <hr/>
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
          {/* <PostSuggestions postNode={postNode} /> */}
        </div>

      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ServiceBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        shortDesc
        cover
        date
        category
        tags
        templateKey
      }
    }
  }
`;
