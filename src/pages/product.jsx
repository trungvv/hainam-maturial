import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import ProductList from "components/ProductList";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Product extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark;
    
    const content = data ? 
      <div>
        <SEO postEdges={data.edges} /> 
        <ProductList productEdges={data.edges}/>
        
      </div>
    : <h1>Khong co du lieu</h1>
  
    
    return (
      <Layout location={this.props.location} title="Sản phẩm">
        <div className="index-container">
          <Helmet>
            <title>{'Sản phẩm'|config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}/product/`} />
            <link href="/logos/favicon.ico" rel="icon" type="image/x-icon" />
          </Helmet>
          <header className="hn-bg-heading">
            <div className="bg_cover">
            <div className="container post-title hn-breadcrumb">
              <h1 className="display-4 text-uppercase text-left text-white">Sản phẩm</h1>
            </div>
            </div>
          </header>
          {content}

        </div>
      </Layout>
    );
  }
}

export default Product;

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
            templateKey
          }
        }
      }
    }
  }
`;
