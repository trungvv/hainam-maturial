import React, { Component } from 'react'
import Slider from 'react-slick'
// import { withNamespaces } from 'react-i18next'
import { Link } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import PostCover from 'components/PostCover';


class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const items = this.props.bannerImage.bannerImage;
    // console.log(items);
    const slides = items.map(item => {
      const postNode = {cover: item.image}; 
      return (
          <div className="custom-banner" key={item.id}>
            {/* <img className="card-img-top" src={item.image} alt={item.imageAlt} /> */}
            <PostCover postNode={postNode} coverHeight="auto"/>
          </div>

      )
    })

    return (

      <div className="container-fluid"> 
        <Slider {...settings} className="row">
          {slides}
        </Slider>
      </div>
    )
  }
}

// export default withNamespaces('translation')(Banner)
export default Banner
