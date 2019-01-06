import React, { Component } from 'react'
import Slider from 'react-slick'
// import { withNamespaces } from 'react-i18next'
import { Link } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import PostCover from 'components/PostCover';
import CustomLink from 'components/CustomLink';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: 225
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ mobile: window.innerWidth/2.7 });
    // if (window.innerWidth >= 640) {
    //   this.setState({ mobile: false });
    // } else {
    //   this.setState({ mobile: true });
    // }
  }
  render() {
    // Process screen size
    const { mobile } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const items = this.props.home.bannerImage;
    // console.log(items);
    const slides = items.map(item => {
      const postNode = {cover: item.image}; 
      return (
          <div className="card" key={item.id}>
            <CustomLink linkType={item.linkType} to={item.linkURL}>
              <PostCover postNode={postNode} coverHeight={mobile}/>
            </CustomLink>
            
          </div>

      )
    })

    return (

      <div className="container-fluid" id="HomeBanner"> 
        <Slider {...settings} className="row">
          {slides}
        </Slider>
      </div>
    )
  }
}

// export default withNamespaces('translation')(Banner)
export default Banner
