module.exports = {
  title: '尹舒络的博客',
  tagline: 'The tagline of my site',
  url: 'https://yinshuluo.top',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '尹舒络的博客',
      logo: {
        alt: '这是我比较喜欢吃的食物之一',
        src: 'img/hotdog.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: '记录',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/yoosl',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '应用程序开发框架',
          items: [
            {
              label: 'Vue.js',
              href: 'https://staging-cn.vuejs.org',
            },
            {
              label: 'React',
              href: 'https://react.docschina.org/',
            },
            {
              label: 'Koa',
              href: 'https://www.koajs.com.cn/'
            }
          ],
        },
        {
          title: '我的社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/9317407/one-peaceminus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '学校官网',
              href: 'https://www.njmu.edu.cn',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yoosl',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YINSHULUO\`s Blog, Inc. Built with PEACEMINUSONE.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
