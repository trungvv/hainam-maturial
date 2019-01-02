module.exports = {
  siteTitle: "Hải Nam Media", // Site title.
  siteTitleShort: "Hải Nam Media", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Hải Nam Media", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://hainam-md.trainghiem.top", // Domain of your website without pathPrefix.
  pathPrefix: "/hainam-maturial", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Hải Nam Media website.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "671805693215492", // FB Application ID for using app insights
  siteGATrackingID: "UA-131414981-1", // Tracking code ID for google analytics.
  disqusShortname: "Hai-Nam-Media", // Disqus shortname.
  postDefaultCategoryID: "HaiNamer", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Hải Nam", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Đà Nẵng, Việt Nam", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Với phương châm: “ Sử dụng các sản phẩm của mình phục vụ cho những nhu cầu thiết thực nhất của người dân để làm cho cuộc sống tốt đẹp hơn www.hainammedia.com là Cầu nối thông tin ngành truyền thông.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "http://hainammedia.com",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "http://hainammedia.com",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:hainammedia.dn@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Hải Nam Media" // Copyright string for the footer of the website and RSS feed.
};
