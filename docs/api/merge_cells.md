# Merge cells

## Description

The `merge_cell` method will merge the cells based on the occurrence of the data in the data set. 


## Parameters

- **count**: `int` Minimum number of occurrence to be considered.
- **file_name** (optional): `str` The name of the `SCData` to be processed, default is `None`.


## Example Usage

```python
scmeta.merge_cell(count=3, file_name='HeLa')
```