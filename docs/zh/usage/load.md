# 数据载入

`SCMeTA` 可直接从质谱仪的原始文件中加载数据,也可从其他软件载入经过处理的数据、或与 [SCMeTA database][sc-db] 连接。

## 从质谱仪的原始文件中中加载

SCMeTA 现在可以直接从以下格式加载数据：

- Thermo RAW File
- Waters wiff File
- txt file

:::提示
mzML 及其他格式的处理方法仍在开发中，我们欢迎您提供其他类型的海量数据，以帮助我们改进 SCMeTA。
:::

在 Linux/Windows 系统中，SCMeTA 使用 [pythonnet][pythonnet] 来载入质谱数据。在 macOS 上，SCMeTA 使用  [pyRawTools][pyrawtools] 来载入质谱数据。

[pythonnet]: https://pythonnet.github.io
[pyrawtools]: https://github.com/EstrellaXD/pyRawTools

```python

sc.load("data.RAW")

```

## Load processed data

Once you have processed data from other software, you can load it with `SCMeTA`.

```python
sc.load_processed("data.csv")
```

## Connect with SCMeTA database

```python
sc.load_from_db(DATA_ID)
```

[sc-db]: https://scmeta.now.sh
