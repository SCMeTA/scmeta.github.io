# 数据载入

## 描述

该数据载入程序 `load` 是用来从SCMeTA中载入程序.该程序将载入数据文件的路径视为一个参数.

此外，我们还提供了其他两种从SCMeTA中载入数据的方式：`load_processed`与`load_database`，分别用来载入处理过的数据和数据库.


## 参数

- **path**: `str` 载入数据文件的路径.
- **file_name**: `str` 数据文件名.
- **data_type**: `str` 数据文件类型.


## Example Usage

```python
path = 'data/SCMeTA_data.raw'
scmeta.load(path)
```

`load`功能既可以设置文件路径，也可以设置文件夹路径.如果是设置文件夹路径，`load`程序将载入该文件夹中的所有文件.如果设置的是文件路径，`load`程序将只载入该文件，并且该命名参数会在载入文件夹中的文件时被忽略.