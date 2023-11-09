---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SCMeTA"
  text: "Single-Cell Metabolism Time-course Analysis"
  tagline: "A python package for single-cell metabolism time-course analysis"
  actions:
    - theme: brand
      text: Quick start
      link: /usage/
    - theme: alt
      text: Introduction
      link: /home/
    - theme: alt
      text: Change log
      link: /changelog/
---


<div class="container">
<div class="vp-doc">

## Introduction

SCMeTA is a python package for single-cell metabolism time-course analysis. It provides a set of tools for single-cell metabolism time-course analysis, including data loading, data processing, data visualization, and data analysis. SCMeTA is designed to be easy to use and easy to extend. It is built on top of the [pandas](https://pandas.pydata.org/) and [scikit-learn](https://scikit-learn.org/stable/) packages.

---

</div>
</div>

<style scoped>
.container {
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 0 24px;
  /**
   * same as VPHero.vue
   * https://github.com/vuejs/vitepress/blob/v1.0.0-beta.5/src/client/theme-default/components/VPHero.vue#L83
   */
  max-width: 1280px;
}

@media (min-width: 640px) {
  .container {
    padding-inline: 48px;
  }
}

@media (min-width: 960px) {
  .container {
    padding-inline: 64px;
  }
}


.contributors-avatar {
  width: 600px;
}
</style>
