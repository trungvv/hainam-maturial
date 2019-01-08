import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Hainamer extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark;
    
    const content = data ? 
      <div>
        <SEO postEdges={data.edges} />
        <PostListing postEdges={data.edges} />
      </div>
    : <h1>Khong co du lieu</h1>
  
    
    return (
      <Layout location={this.props.location} title="HaiNamer">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}/hainamer/`} />
            <link href="/logos/favicon.ico" rel="icon" type="image/x-icon" />
          </Helmet>
          <header className="hn-bg-heading">
            <div className="bg_cover">
            <div className="container post-title hn-breadcrumb">
              <h1 className="display-4 text-uppercase text-left text-white">Hai Namer</h1>
            </div>
            </div>
          </header>

          {content}

        </div>
      </Layout>
    );
  }
}

export default Hainamer;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "hainamer"}}},
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            templateKey
          }
        }
      }
    }
  }
`;
