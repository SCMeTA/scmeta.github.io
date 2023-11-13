# 安装

:::提示
Windows 系统环境下的 Data Load 数据载入功能仍在开发中，建议使用 Linux 或 macOS 系统进行 SCMeTA 数据处理.
:::

以下为 SCMeTA 的安装流程:

## Use PyPI

在 PyPI 中使00用以下pip，即可安装SCMeTA。

```bash
pip install scmeta
```

## Dependencies for loading data

如要完成对 Thermo RAW data 和 Waters WIFF data 两种数据的载入，需要在 Windows 系统上搭载 [.NET Framework][dotnet] ，或在 Linux 和 macOS 系统上搭载 [mono][mono] .
SCMeTA支持以下版本的 .NET Framework and mono 环境：

- .NET Framework 4.7.2
- .NET Framework 4.8
- .NET Framework 4.8.1
- 6.12 或更新版本的 mono.

### 在 Windows 系统上安装 .NET Framework 

详情请见 [.NET Framework installation guide][.net-install]

### 在 macOS / Linux 系统上安装 mono 

需要安装 [6.12 或更新版本的 mono][mono] to load Thermo RAW data.
更多详情请见 [mono installation guide][mono-install].

**对于 macOS 系统:**

```zsh
brew install mono
```

**对于 Linux 系统:**

更多详情请见 [mono installation guide](https://www.mono-project.com/download/stable/#download-lin).

## 关于python

SCMeTA的运行依赖于以下库:

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
