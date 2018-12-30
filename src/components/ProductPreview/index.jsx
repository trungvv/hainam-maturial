import React from 'react';
import { Link } from 'gatsby';

class ProductPreview extends React.Component {
    render() {
        const {productInfo} = this.props;
        console.log(productInfo);
        return (
            <div className="col col-sm-6 col-md-4 col-lg-3">
                <div className="card" key={productInfo.title}>
                    <Link to={productInfo.path}>
                        <div className="custom-card-img">
                            <img className="card-img-top" src={productInfo.cover} alt="Card image cap" />
                        </div>
                    </Link>
                    <div className="card-body">
                        <Link to={productInfo.path}>
                            <h5 className="media-title">{productInfo.title}</h5>
                        </Link>
                        <p className="card-subtitle">
                            <small className="text-muted">{productInfo.category}</small>
                        </p>
                        <div className="overflow-hidden">
                            <p className="card-text text-justify">{productInfo.shortDesc}</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default ProductPreview;