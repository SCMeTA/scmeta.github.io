import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCMeTA",
  description: "A documents site of SCMeTA, which is a python library of time-based single-cell metabolism data analysis.",
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/usage/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/home/' },
          { text: 'Quick Start', link: '/usage/' },
        ]
      },
      {
        text: 'Installation',
        link: '/install/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SCMeTA/SCMeTA' }
    ]
  },
})
