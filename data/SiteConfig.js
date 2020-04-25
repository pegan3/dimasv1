const config = {
  siteTitle: 'Catatan Dimas',
  siteTitleShort: 'Catatan Dimas',
  siteTitleAlt: 'Catatan Dimas',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://dimas.club',
  repo: 'https://github.com/pegan3/dimasv1',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Dimas Setiawan adalah seseorang yang gabut.',
  siteRss: '/rss.xml',
  googleAnalyticsID: '',
  postDefaultCategoryID: 'Tech',
  newsletter: '',
  newsletterEmbed: '',
  userName: 'Dimas',
  userEmail: 'dimas.anand27@gmail.com',
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
      name: 'Newsletter',
      link: '/newsletter/',
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
