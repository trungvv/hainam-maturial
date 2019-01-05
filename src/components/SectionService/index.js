import React, { Component } from 'react'
// import { withNamespaces } from 'react-i18next'
import { Link, StaticQuery, graphql } from 'gatsby'
import './style.scss'

const SectionService = ({serviceTitle=null, serviceSubtitle=null, servicesHome}) => {

  const items = [];
  if (servicesHome.edges.length >0) {
    servicesHome.edges.forEach(service => {
      items.push({
          id: service.node.id,
          cover: service.node.frontmatter.cover,
          title: service.node.frontmatter.title,
          category: service.node.frontmatter.category,
          shortDesc: service.node.frontmatter.shortDesc,
          excerpt: service.node.excerpt,
          date: service.node.fields.date,
          slug: service.node.fields.slug,
          position: service.node.frontmatter.position,
          // templateKey: postEdge.node.frontmatter.templateKey,
      });
  });
  }
    const slides = servicesHome? items.map((item, i=0) => {
      ++i;
      return (
        <div className="col-md-6 col-lg-4 " key={i}>
          <div className="media border media-style">
            <div className="mr-3 btn rounded-circle bg-secondary num">
              {i}
            </div>
            <div className="media-body">
              <h3 className="media-title">
              <Link to={item.slug}>
                {item.title}
              </Link>
                
              </h3>

              <div className="overflow-hidden">
                <p className="media-text text-justify">{item.shortDesc}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
    : <p>Chưa có dịch vụ nào</p>

    return (
      <div className="jumbotron container-fluid rounded-0 mb-0" id="service">
        <h1 className="display-4 text-center">
          {/* {t('service-title')} */}
          {serviceTitle}
        </h1>

        <p className="lead text-center">
          {/* {t('service-subtitle')} */}
          {serviceSubtitle}
        </p>

        <hr className="line bg-secondary" />
        {/* <div className="container-fluid"> */}
        <div className="row mt-5 container">{slides}</div>

      </div>
    )
  }


// export default withNamespaces('translation')(SectionService)
export default SectionService;

export const queryServiceHome = graphql`
  fragment SectionServiceFragment on Query {
    servicesHome: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "service"}, active: {eq: true}}},
      limit: 10
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      totalCount
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
  }`

