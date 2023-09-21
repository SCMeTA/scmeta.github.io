# 数据降噪

## 描述

该降噪程序`denoise`是一种基于数据出现的次数与数据最低分辨率来进行处理的方法.


## 参数

- **max_ratio**: `float` 所处理数据的最大比例.
- **file_name**: `str`需要处理的文件名为`SCData`, 默认则为`None`.


## 应用示例

```python
scmeta.denoise(max_ratio=0.1, file_name='HeLa')
```