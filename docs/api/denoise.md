# Denoise

## Description

The `denoise` method will denoise the data based on the minimum number of occurrence and the minimum resolution of the data.


## Parameters

- **max_ratio**: `float` Maximum ratio of the data to be considered.
- **file_name**: `str` The name of the `SCData` to be processed, default is `None`.


## Example Usage

```python
scmeta.denoise(max_ratio=0.1, file_name='HeLa')
```