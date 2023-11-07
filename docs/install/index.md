# Installation

This page describes how to install SCMeTA.

## Use PyPI

SCMeTA is available on PyPI. You can install it with pip or conda.

```bash
pip install scmeta
```

## Use source code

If you want to change the source code, you can clone the repository and install.

```bash
git clone https://github.com/SCMeTA/SCMeTA.git

```

Then, you can install it with pip.

```bash
cd SCMeTA
pip install .
```

## Install mono

If you are using Linux or macOS, you should install [mono][mono] to load Thermo RAW data.

See more details in [mono installation guide](https://www.mono-project.com/download/stable/#download-lin).

## About dependencies

SCMeTA depends on the following packages:

- [pandas](https://pandas.pydata.org/)
- [numpy](https://numpy.org/)
- [scipy](https://www.scipy.org/)
- [matplotlib](https://matplotlib.org/)
- [sci-kit learn](https://scikit-learn.org/stable/)
- [umap-learn](https://umap-learn.readthedocs.io/en/latest/)
- [combat](https://epigenelabs.github.io/pyComBat/)
- [pyRawTools](https://github.com/EstrellaXD/pyRawTools)


[mono]: https://www.mono-project.com/

