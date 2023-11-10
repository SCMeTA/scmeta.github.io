# Installation

:::warning
Data load module on Windows is still under development. We recommend you using Linux or macOS to use SCMeTA.
:::

This page describes how to install SCMeTA.

## Use PyPI

SCMeTA is available on PyPI. You can install it with pip.

```bash
pip install scmeta
```

## Dependencies for loading data

Loading Thermo RAW data and Waters WIFF data requires [.NET Framework][dotnet] on Windows and [mono][mono] on Linux and macOS.
These versions of .NET Framework and mono are supported:

- .NET Framework 4.7.2
- .NET Framework 4.8
- .NET Framework 4.8.1
- On Linux and macOS, mono 6.12 or newer.

### Install .NET Framework on Windows

See more details in [.NET Framework installation guide][.net-install]

### Install mono on macOS / Linux

You should install [mono 6.12 or higher][mono] to load Thermo RAW data.
See more details in [mono installation guide][mono-install].

**For macOS:**

```zsh
brew install mono
```

**For Linux:**

More details can be found in [mono installation guide](https://www.mono-project.com/download/stable/#download-lin).

## About python dependencies

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
[mono-install]: https://www.mono-project.com/download/stable/#download-lin
[.net-install]: https://docs.microsoft.com/en-us/dotnet/framework/install/
[dotnet]: https://dotnet.microsoft.com/
