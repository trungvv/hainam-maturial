import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
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
    const { data } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const { data: {productsHome, servicesHome}} = this.props;
    // console.log(servicesHome);
    return (
      <Layout location={this.props.location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
            <link href="/logos/favicon.ico" rel="icon" type="image/x-icon" />
          </Helmet>
          <SEO />

          <Banner home={home}/>
          <SectionProduct productTitle={home.productTitle} productSubtitle={home.productSubtitle} productsHome={productsHome} />
          <SectionService serviceTitle={home.serviceTitle} serviceSubtitle={home.serviceSubtitle} servicesHome={servicesHome}/>
          <SectionCustomer home={home}/>
          <SectionPricing home={home}/>
          <SectionContact />
        </div>
      </Layout>
    );
  }
}
Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
export default Index;

export const homepageQuery = graphql`
query homePageData {
	homePageData: allMarkdownRemark (
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
          productTitle
          productSubtitle
          serviceTitle
          serviceSubtitle
          customerTitle
          customers {
            id
            image
            imageAlt
            linkType
            linkURL
          }
          pricingTitle
          pricingBtn
          contactSubtitle
          offices {
            id
            office
            address
            phone
            fax
            hotline
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

...SectionProductFragment
...SectionServiceFragment
}`;