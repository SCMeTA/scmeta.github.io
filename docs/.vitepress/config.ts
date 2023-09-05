import { defineConfig } from 'vitepress'

// https://vitepress.dev/guide/custom-theme

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
      { text: 'Introduction', link: '/' },
      { text: 'Quick Start', link: '/usage/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/home/',
      },
      {
        text: 'Quick Start',
        link: '/usage/'
      },
      {
        text: 'Installation',
        items: [
          { text: 'Install', link: '/install/' },
          { text: 'Install from source', link: '/install/source' },
          { text: 'Via Docker', link: '/install/docker' },
        ]
      },
      {
        text: "Basic parameter",
        items: [
          { text: 'Data container', link: '/api/scdata' },
          { text: 'Process module', link: '/usage/process' },
          { text: "Visualization module", link: '/usage/visualization' },
        ]
      },
      {
        text: 'User Guide',
        items: [
          { text: 'How to use SCMeTA', link: '/usage/' },
          { text: 'Load data', link: '/usage/load_data' },
          { text: 'Process data', link: '/usage/process' },
          { text: 'Visualization', link: '/usage/visualization' },
          { text: 'Save data', link: '/usage/save' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Load data', link: '/api/load_data' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SCMeTA/SCMeTA' }
    ]
  },
})
