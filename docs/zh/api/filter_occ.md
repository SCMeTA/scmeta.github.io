# 基于数据出现情况的筛选

## 描述

该筛选程序`filter_occ`是一种基于数据在数据集中出现情况与最低分辨率而进行筛选的方法。


## 参数

- **count**: `int` 数据的最低出现次数.
- **resolution**: `float` 数据的最低分辨率，默认为0.1.
- **file_name**: `str` 需要处理的`SCData`的文件名, 默认则为`None`.


## 应用示例

```python
scmeta.filter_occ(count=10, resolution=0.1, file_name='HeLa')
```


## 结果输出

该`filter_occ`方法将会生成一个新的`SCData`对象, 而生成的此`SCData`对象将会被存入`data`文件夹中.