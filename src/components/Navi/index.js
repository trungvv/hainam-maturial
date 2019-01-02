import React from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
// import LanguageSwitcher from 'components/LanguageSwitcher'
// import { withNamespaces } from 'react-i18next'
import './style.scss'

class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { location, title } = this.props
    return (
      // <div className="fixed-top">
      <Navbar className="navbar-expand-md navbar-light sticky-top">
        <NavbarBrand href="/">
            <img src="/logos/logo.svg" alt={title} width="100px" height="30px" />
        </NavbarBrand>

        {/* Toggler/collapsible Button */}
        <NavbarToggler onClick={this.toggle} className="btn-sm" />

        {/* Navbar links */}
        <Collapse
          isOpen={this.state.isOpen}
          navbar
          className="justify-content-end"
        >
          <Nav navbar>
            <NavItem
              className={
                location.pathname === '/' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                {/* {t('menu-item-home')} */}
                Home
              </Link>
            </NavItem>
            {/* Sản phẩm */}
            <UncontrolledDropdown
              nav
              inNavbar
              className={
                location.pathname === '/product/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <DropdownToggle nav caret>
                {/* {t('menu-item-product')} */}
                Sản phẩm
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/product/film/" className="nav-link">
                    {/* {t('menu-subitem-film')} */}
                    Phim
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/product/news/" className="nav-link">
                    {/* {t('menu-subitem-news')} */}
                    Chương trình tin tức
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/product/gameshows/" className="nav-link">
                    {/* {t('menu-subitem-gameshows')} */}
                    Gameshows
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/product/public/" className="nav-link">
                    {/* {t('menu-subitem-public')} */}
                    Chương trình xã hội
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/product/others/" className="nav-link">
                    {/* {t('menu-subitem-product-others')} */}
                    Sản phẩm khác
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Dịch vụ */}
            <UncontrolledDropdown
              nav
              inNavbar
              className={
                location.pathname === '/service/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <DropdownToggle nav caret>
                {/* {t('menu-item-service')} */}
                Dịch vụ
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/service/media/" className="nav-link">
                    {/* {t('menu-subitem-media')} */}
                    Media
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/service/pr/" className="nav-link">
                    {/* {t('menu-subitem-pr')} */}
                    Public Relations
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/service/event/" className="nav-link">
                    {/* {t('menu-subitem-event')} */}
                    Tổ chức Event
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/service/digitalmarketing/" className="nav-link">
                    {/* {t('menu-subitem-digitalMarketing')} */}
                    Digital Marketing
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/service/ooh/" className="nav-link">
                    {/* {t('menu-subitem-ooh')} */}
                    OOH
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Khách hàng */}
            <NavItem
              className={
                location.pathname === '/customers'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                {/* {t('menu-item-customer')} */}
                Khách hàng
              </Link>
            </NavItem>
            {/* Bảng giá */}
            <UncontrolledDropdown
              nav
              inNavbar
              className={
                location.pathname === '/pricing/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <DropdownToggle nav caret>
                {/* {t('menu-item-pricing')} */}
                Bảng giá
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/pricing/enews/" className="nav-link">
                    {/* {t('menu-subitem-eNews')} */}
                    Báo điện tử
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/pricing/newspaper/" className="nav-link">
                    {/* {t('menu-subitem-newspaper')} */}
                    Báo giấy
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/pricing/television" className="nav-link">
                    {/* {t('menu-subitem-television')} */}
                    Truyền hình
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/pricing/ooh/" className="nav-link">
                    {/* {t('menu-subitem-ooh')} */}
                    OOH
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Ngôn ngữ */}
            {/* <LanguageSwitcher /> */}
          </Nav>
        </Collapse>
      </Navbar>
      // </div>
    )
  }
}
// export default withNamespaces('translation')(Navi)
export default Navi