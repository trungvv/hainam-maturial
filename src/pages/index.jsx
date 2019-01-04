import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Banner from "../components/Banner"
import SectionProduct from 'components/SectionProduct';
import SectionService from 'components/SectionService';
import SectionCustomer from 'components/SectionCustomer';
import SectionPricing from 'components/SectionPricing';
import SectionContact from 'components/SectionContact';
class Index extends React.Component {
  render() {
    // console.log(this.props.data.allMarkdownRemark)
    const { frontmatter: bannerImage } = this.props.data.allMarkdownRemark.edges[0].node;
    return (
      <Layout location={this.props.location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
            <link href="/logos/favicon.ico" rel="icon" type="image/x-icon" />
          </Helmet>
          {/* <SEO postEdges={postEdges} /> */}

          <Banner bannerImage={bannerImage}/>
          <SectionProduct />
          <SectionService />
          <SectionCustomer />
          <SectionPricing />
          <SectionContact />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const homepageQuery = graphql`
query homePageData {
	allMarkdownRemark (
    filter: { frontmatter: { templateKey: {eq: "home-page" }}}
  ) {
    edges {
      node {
        frontmatter {
          title
          templateKey
          bannerImage {
            id
            image
            imageAlt
            linkType
            linkURL
          }
          seo {
            browserTitle
            description
            title
          }
        }
      }
    }
  }
}`;