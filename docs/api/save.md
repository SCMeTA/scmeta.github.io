# Save Data

## Description

SCMeTA provide a function to save the data to a file. The function is `save`.


## API Reference

### `save()`

```python
scmeta.save(data, path, format='csv', **kwargs)
```

## Parameters

- `data`: The input data matrix.
- `path`: The path to save the data. If you don't refer a exact file name, the data will be saved in a directory with a default name.
- `format`: The format of the file. Default is `csv`.