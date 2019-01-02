import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Nav from 'components/Navi';
import Footer from 'components/Footer';
import config from "../../data/SiteConfig";
import 'scss/gatstrap.scss'

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
     
        <div>
          <Nav title={config.siteDescription.title} {...this.props} />
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children}
          <Footer />
        </div>
    );
  }
}
