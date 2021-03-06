import React from 'react';
import { Link } from 'gatsby';
import PostCover from 'components/PostCover';

class ProductPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mobile: true
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
        if (window.innerWidth >= 640) {
          this.setState({ mobile: false });
        } else {
          this.setState({ mobile: true });
        }
      }
    render() {
        const {productInfo} = this.props;
        const { mobile } = this.state;
        const coverHeight = mobile ? 162 : 225;
        return (
            // <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card" key={productInfo.title}>
                    <Link to={productInfo.path}>
                        <PostCover postNode={productInfo} coverHeight={coverHeight} />
                    </Link>
                    <div className="card-body">
                        <Link to={productInfo.path}>
                            <h5 className="media-title">{productInfo.title}</h5>
                        </Link>
                        <p className="card-subtitle text-uppercase">
                            <small className="text-muted">{productInfo.category}</small>
                        </p>
                        <div className="overflow-hidden">
                            <p className="card-text text-justify">{productInfo.excerpt}</p>
                        </div>
                    </div>
                    
                </div>
                
            // </div>
        );
    }
}
export default ProductPreview;