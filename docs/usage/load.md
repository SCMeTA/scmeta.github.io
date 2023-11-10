# Load data

`SCMeTA` can load data from raw file directly from Mass Spectrometry. Or processed data from other software. Or connect with [SCMeTA database][sc-db].

## Load raw data from Mass Spectrometry

SCMeTA now can load data directly from the following formats:

- Thermo RAW File
- Waters wiff File
- txt file

:::tip
mzML and other formats are under development yet, we are welcome you to provides other type of Mass data to help us improve SCMeTA.
:::

On Linux/Windows, SCMeTA uses [pythonnet][pythonnet] to load Mass Spectrometry data. On macOS, SCMeTA uses [pyRawTools][pyrawtools] to load Mass Spectrometry data.

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
