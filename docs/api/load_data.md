# Load Data

## Description

The `load` method is used to load the data from the SCMeTA. It receives the path to the data file as parameter.

In SCMeTA, we also provide other two load method: `load_processed` and `load_database` to load the processed data and the database, respectively.

## Parameters

- **path**: `str` the path to the data file.
- **file_name**: `str` the name of the data file.
- **data_type**: `str` the type of the data file.

## Example Usage

```python
path = 'data/SCMeTA_data.raw'
scmeta.load(path)
```

You can set a dir path or a file path. If you set a dir path, the `load` method will load all the files in the dir. If you set a file path, the `load` method will load only the file, and name parameter will be ignored when you load files in a dir.
