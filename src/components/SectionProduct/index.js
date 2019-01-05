import React, { Component } from 'react'
import Slider from 'react-slick'
import { graphql } from 'gatsby';
// import { withNamespaces } from 'react-i18next'
import { Link } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import  ProductPreview  from 'components/ProductPreview';

const SectionProduct = ({productTitle=null, productSubtitle=null, productsHome}) => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    const productList = [];
    if (productsHome.edges.length >0) {
      productsHome.edges.forEach(product => {
        productList.push({
            path: product.node.fields.slug,
            cover: product.node.frontmatter.cover,
            title: product.node.frontmatter.title,
            category: product.node.frontmatter.category,
            // shortDesc: product.node.frontmatter.shortDesc,
            excerpt: product.node.excerpt,
            date: product.node.fields.date,
            slug: product.node.fields.slug,
            // templateKey: postEdge.node.frontmatter.templateKey,
        });
    });
    }

    const slides = (productList.length>0) ? productList.map((product, i=0 )=> {
      ++i;
      return (
        <div className="col" key={i}>
          <ProductPreview key={product.title} productInfo={product} />
        </div>
        
      )
    }) : <p>Chưa có sản phẩm nào được chọn!</p>

    const displaySlides = (productList.length>2) ? (
      <Slider {...settings} className="mt-sm-5 row">
        {slides}
      </Slider>
    ): {slides};

    return (
      <div className="jumbotron bg-light mb-0 container-fluid" id="ProductSection">
        <h1 className="display-4 text-center">
          {/* {t('product-title')} */}
          {productTitle}
        </h1>

        <p className="lead text-center">
          {/* {t('product-subtitle')} */}
          {productSubtitle}
        </p>

        <hr className="line bg-secondary" />
        <div className="container">
          {displaySlides}
      </div>
      </div>
    )
  }


// export default withNamespaces('translation')(SectionProduct)
export default SectionProduct

export const sectionProductQuery = graphql`
fragment SectionProductFragment on Query {
  productsHome: allMarkdownRemark(
    filter: {frontmatter: {templateKey: {eq: "product"}, active: {eq: true}}},
    limit: 50
    sort: { fields: [frontmatter___position], order: ASC }
  ) {
    edges {
      node {
        fields {
          slug
          date
        }
        id
        excerpt
        timeToRead
        frontmatter {
          title
          cover
          category
          shortDesc
          templateKey
          active
          position
        }
      }
    }
  }
}`;
