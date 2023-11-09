# SCData

SCData is a class for store and manipulate data from the SCMeTA.

## Data Structure

It contains the following attributes for store the data:

- **raw**: a pandas DataFrame with the raw data from the SCMeTA.
- **process**: a pandas DataFrame with the processed data from the SCMeTA.
- **mat**: a pandas DataFrame matrix with the processed data from the SCMeTA.
- **cell_mat**: a pandas DataFrame matrix with the processed data from the SCMeTA, but with the cells as rows and the metabolites as columns.
- **cell_pos**: a pandas DataFrame with the cell scan positions in time line.

## Methods

It contains the following methods for manipulate the data:

### `load(path)`

Parameters:

- **path**: `str` the path to the data file.

```python
data = SCData()
data.load(path)
```

### `cut(start, end)`

Parameters:

- **start**: `int` the start scan to cut the data.
- **end**: `int` the end scan to cut the data.

```python
data.cut(0, 100)
```

### `offset(offset)`

Parameters:

- **offset**: `float` the offset to be added to the data.

```python
data.offset(0.1)
```

### `xic(mz)`

Parameters:

- **mz**: `float` the mz to extract the XIC.

```python
data.xic(760.58)
```
