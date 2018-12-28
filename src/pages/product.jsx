import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import ProductList from "components/ProductList";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Hainamer extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark;
    
    const content = data ? 
      <div>
        {/* <SEO postEdges={data.edges} />  */}
        <ProductList productEdges={data.edges}/>
        
      </div>
    : <h1>Khong co du lieu</h1>
  
    
    return (
      <Layout location={this.props.location} title="Sản phẩm">
        <div className="index-container">
          <Helmet>
            <title>{'Sản phẩm'|config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          {content}

        </div>
      </Layout>
    );
  }
}

export default Hainamer;

export const productQuery = graphql`
  query productQuery {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "product"}}},
      limit: 50
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
            cover
            category
            shortDesc
          }
        }
      }
    }
  }
`;
