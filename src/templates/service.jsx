import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SectionService from 'components/SectionService'
import SEO from "../components/SEO";
import _ from "lodash";
import config from "../../data/SiteConfig";
import "./post.scss";

export default class PricingTemplate extends React.Component {
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
    const { data: {servicesHome}} = this.props;
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
                className="text-danger text-uppercase"
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
          <div className="col-lg-12 pl-0 pr-0">
            <div className="post-page-contents">
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
        </div>
        {/* Dịch vụ tiêu biểu */}

          <SectionService serviceTitle="Dịch vụ tiêu biểu"  servicesHome={servicesHome}/>

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
    ...SectionServiceFragment
  }
`;
