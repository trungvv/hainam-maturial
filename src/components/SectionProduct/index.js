import React, { Component } from 'react'
import Slider from 'react-slick'
// import { withNamespaces } from 'react-i18next'
import { Link } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

const items = [
  {
    id: 1,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_concert_2-min-370x222.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 2,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_sport_2-2-370x222.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 3,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_festival_3-min-370x222.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  {
    id: 4,
    src:
      'https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_conference_2-2-370x222.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    category: 'Phim',
    title: 'Card title',
    desc:
      'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
]

class SectionProduct extends Component {
  render() {
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
    const { t } = this.props
    const slides = items.map(item => {
      return (
        <div className="col" key={item.id}>
          <div className="card" >
            <img className="card-img-top" src={item.src} alt="Card image cap" />
            <div className="card-body">
              <h5 className="media-title">{item.title}</h5>
              <p className="card-subtitle">
                <small className="text-muted">{item.category}</small>
              </p>
              <div className="overflow-hidden">
                <p className="card-text text-justify">{item.desc}</p>
              </div>

              <Link to="#" className="btn btn-outline-secondary">
                {/* {t('btn-detail')} */}
                Chi tiết
              </Link>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="jumbotron bg-light mb-0">
        <h1 className="display-4 text-center">
          {/* {t('product-title')} */}
          Sản phẩm tiêu biểu
        </h1>

        <p className="lead text-center">
          {/* {t('product-subtitle')} */}
          There is a lot of exciting stuff going on in the stars above us that
          makes
        </p>

        <hr className="line bg-secondary" />
        {/* <div className="container-fluid"> */}

        <Slider {...settings} className="mt-sm-5 row">
            {slides}
        </Slider>
      </div>
    )
  }
}

// export default withNamespaces('translation')(SectionProduct)
export default SectionProduct
