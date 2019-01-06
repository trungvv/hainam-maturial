import React, { Component } from 'react'
// import { withNamespaces } from 'react-i18next'
import { Link } from 'gatsby'
import './style.scss'

class SectionPricing extends Component {
  render() {
    // const { t } = this.props
    const home = this.props.home;
    return (
      <div className="jumbotron container-fluid rounded-0 mb-0 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h3 className="display-4 ">
                {/* {t('pricing-title')} */}
                {home.pricingTitle}
              </h3>

              <p className="lead">
                Hotline: 0903.531.777 <br /> Email: minhnguyet@hainammedia.com
              </p>

              {/* <hr className="line bg-secondary" /> */}
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="mt-4">
                <Link className="btn btn-secondary btn-lg" to="/pricing">
                  {/* {t('pricing-btn')} */}
                  {home.pricingBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default withNamespaces('translation')(SectionPricing)
export default SectionPricing
