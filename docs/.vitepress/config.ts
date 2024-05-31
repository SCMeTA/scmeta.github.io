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
      { text: 'Guide', link: '/' },
      { text: 'Reference', link: '/usage/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/home/',
      },
      {
        text: 'Quick Start',
        link: '/quick-start'
      },
      {
        text: 'Installation',
        items: [
          { text: 'Install', link: '/install/' },
          { text: 'Source code', link: '/install/src' },
          // { text: 'Via Docker', link: '/install/docker' },
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
          { text: 'How to use SCMeTA', link: '/quick-start' },
          { text: 'Load data', link: '/usage/load' },
          { text: 'Process data', link: '/usage/process' },
          { text: 'Visualization', link: '/usage/visualization' },
          { text: 'Save data', link: '/usage/save' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'API Reference', link: '/api/'},
          { text: 'Load data', link: '/api/load_data' },
          { text: 'Denoise', link: '/api/denoise' },
          { text: 'Merge cells', link: '/api/merge_cells' },
          { text: 'Filter occurrence', link: '/api/filter_occ' },
          { text: 'Filter assem', link: '/api/filter_assem' },
          { text: 'Filter mat', link: '/api/filter_mat' },
          { text: 'Normalization', link: '/api/normalization'}
        ]
      },
      {
        text: 'Visualization',
        items: [
          { text: 'Visualization', link: '//usage/visualization' },
          { text: 'Heatmap', link: '/visualization/heatmap' },
          { text: 'Discriminant analysis', link: '/visualization/da' },
          { text: 'Volcano plot', link: '/visualization/volcano' },
        ]
      },
      {
        text: 'Interacting with other frameworks',
        items: [
          { text: 'R', link: '/interact/r' },
          { text: 'MATLAB', link: '/interact/matlab' },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About SCMeTA', link: '/about/' },
          { text: 'Citation', link: '/about/citation' },
          { text: 'License', link: '/about/license' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SCMeTA/SCMeTA' }
    ]
  },
  ignoreDeadLinks: true,
})
