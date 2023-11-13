# SCData

SCData 是一个用于存储和操作 SCMeTA 数据的类。

## Data Structure

它包含以下用于存储数据的属性：

- **raw**: 一个包含 SCMeTA 原始数据的 pandas DataFrame。
- **process**: 一个 pandas DataFrame，其中包含 SCMeTA 处理过的数据。
- **mat**: 一个 pandas DataFrame 矩阵，其中包含经过处理的 SCMeTA 数据。
- **cell_mat**: 一个 pandas DataFrame 矩阵，其中包含经过处理的 SCMeTA 数据，以细胞为行，代谢物为列。
- **cell_pos**: 一个 pandas DataFrame，其中包含按时间线排列的细胞扫描位置

## 方法

包含了以下几种处理数据的方法：

### `load(path)` 路径

参数：

- **path**: `str` 数据文件夹所在的路径。

```python
data = SCData()
data.load(path)
```

### `cut(start, end)` 数据截取

参数：

- **start**: `int` 截取数据的起始位置；
- **end**: `int` 截取数据的结束位置。

```python
data.cut(0, 100)
```

### `offset(offset)` 

参数：

- **offset**: `float` 要添加到数据中的偏移量。

```python
data.offset(0.1)
```

### `xic(mz)`

参数:

- **mz**: `float` 提取特征离子流图所用的质荷比.

```python
data.xic(760.58)
```
