const config = {
  siteTitle: 'Catatan Dimas Setiawan',
  siteTitleShort: 'Catatan Dimas Setiawan',
  siteTitleAlt: 'Catatan Dimas Setiawan',
  siteLogo: '/logos/logo1024.png',
  siteUrl: 'https://dimas.club',
  repo: 'https://github.com/pegan3/dimasv1',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Catatan seorang Dimas.',
  siteRss: 'https://dimas.club/rss.xml',
  googleAnalyticsID: 'ua-164491361-1',
  postDefaultCategoryID: 'Catatan harian dimas,Catatan Dimas,Dimas Setiawan,Portofilio Dimas,Tech,Dimas Ananda Setiawan,Catatan Dimas Setiawan',
  newsletter: '',
  newsletterEmbed: '',
  userName: 'Dimas',
  userEmail: 'mail@dimas.club',
  userTwitter: 'dimasanand27',
  menuLinks: [
    {
      name: 'About',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Portofolio',
      link: '/404/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
