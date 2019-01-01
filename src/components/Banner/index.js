import React, { Component } from 'react'
import Slider from 'react-slick'
// import { withNamespaces } from 'react-i18next'
import { Link } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

// const items = [
//   {
//     id: 1,
//     image:
//       'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/42660512_749028275480279_8399454433099907072_o.jpg?_nc_cat=110&_nc_ht=scontent.fdad3-1.fna&oh=58270b6d574314d704b4a0de7b755379&oe=5CA5B99A',
//     imageAlt: 'Slide 1',
//     linkType: 'Slide 1',
//   },
//   {
//     id: 2,
//     image:
//       'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/41006969_737700396613067_5465604080413966336_o.jpg?_nc_cat=107&_nc_ht=scontent.fdad3-2.fna&oh=1abbf4c03a71ae0a7c31b2a690ba112e&oe=5CA6F3AF',
//     imageAlt: 'Slide 2',
//     linkType: 'Slide 2',
//   },
//   {
//     id: 3,
//     image:
//       'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/40141616_732633677119739_3246191322322698240_n.jpg?_nc_cat=106&_nc_ht=scontent.fdad3-1.fna&oh=e2267832c00d98f9b716853f1c40d7b2&oe=5CD7EC29',
//     imageAlt: 'Slide 3',
//     linkType: 'Slide 3',
//   },
// ]

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
      return (
          <div className="custom-banner" key={item.id}>
            <img className="card-img-top" src={item.image} alt={item.imageAlt} />
          </div>

      )
    })

    return (
      // <div className="jumbotron bg-light mb-0">
      <div className="container-fluid"> 
        <Slider {...settings} className="row">
          {slides}
        </Slider>
        {/* </div> */}
      </div>
    )
  }
}

// export default withNamespaces('translation')(Banner)
export default Banner
