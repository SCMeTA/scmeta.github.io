# Filter Occurrence

## Description

The data will be filtered based on the minimum number of occurrence and the minimum resolution of the data.

## Parameters

- **count**: `int` Minimum number of occurrence to be considered.
- **resolution**: `float` Minimum resolution of the data, default is 0.1.
- **file_name**: `str` The name of the `SCData` to be processed, default is `None`.

## Example Usage

```python
scmeta.filter_occ(count=10, resolution=0.1, file_name='HeLa')
```

## Output

The `filter_occ` method will generate a new `SCData` object, and the `SCData` object will be saved in the `data` directory.
