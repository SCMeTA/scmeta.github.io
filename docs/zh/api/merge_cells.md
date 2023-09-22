# 细胞合并

## 描述

该合并细胞数据程序`merge_cell`将会根据数据集中的出现情况进行细胞数据的合并.


## 参数

- **count**: `int` 数据的最低出现次数.
- **file_name** (optional): `str` 需要处理的`SCData`的文件名, 默认则为`None`.


## 应用示例

```python
scmeta.merge_cell(count=3, file_name='HeLa')
```