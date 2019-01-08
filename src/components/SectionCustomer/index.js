import React, { Component } from 'react'
import Slider from 'react-slick'
// import { withNamespaces } from 'react-i18next'
import PostCover from 'components/PostCover';
import CustomLink from 'components/CustomLink';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

class SectionCustomer extends Component {
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    // const settings = {
    //   className: "center",
    //   centerMode: true,
    //   infinite: true,
    //   centerPadding: "60px",
    //   slidesToShow: 3,
    //   speed: 500,
    //   rows: 2,
    //   slidesPerRow: 2
    // };

    const items = this.props.home.customers;
    const slides = (items.length>0)? items.map((item, i=0) => {
      ++i;
      return (
        <div className="" key={i}>
          {/* <img className="card-img-top" src={item.image} alt={item.imageAlt} /> */}
          <CustomLink linkType={item.linkType} to={item.linkURL}>
            {/* <PostCover postNode={{cover: item.image}} coverHeight={mobile}/> */}
            <img className="card-img-top" src={item.image} alt={item.imageAlt} />
          </CustomLink>
        </div>
      )
    })
    : <p>Chưa có thông tin khách hàng</p>
    // console.log(items);
    return (
      <div className="jumbotron bg-light mb-0" id="customers">
        <h1 className="display-4 text-center">
          {/* {t('customer-title')} */}
          {this.props.home.customerTitle}
        </h1>

        {/* <p className="lead text-center">{t('customer-subtitle')}</p> */}

        <hr className="line bg-secondary" />
        {/* <div className="container-fluid"> */}
        <Slider {...settings} className="mt-sm-5 container">
          {slides}
        </Slider>
        {/* </div> */}
      </div>
    )
  }
}

// export default withNamespaces('translation')(SectionCustomer)
export default SectionCustomer
