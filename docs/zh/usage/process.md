# 数据处理模块

数据处理模块是 SCMeTA 的主要模块。它为单细胞代谢时程分析提供了一套工具，包括数据载入、**数据处理全过程** (预处理、主处理、后处理)。 SCMeTA 建立于[pandas](https://pandas.pydata.org/) 和 [numpy](https://numpy.org/)基础上，操作简单并易于扩展。

SCMeTA 数据处理的主流程如下所示：

```python
from SCMeTA import Process

# Initialize a Process object, refer_mz is the characteristic metabolite for finding the cells.

sc = Process(refer_mz=760.58)

# Load data, path can be a dir path or a file path.

sc.load(path = 'data.RAW')

# Pre-process data

sc.pre_process(resolution: float = 0.01, count: int = 10)


# Process single-cell metabolism data.

sc.process(
    max_ratio: float = 0.1
    adjacent: int = 3,
    snr: float = 3,
    resolution: float = 0.1,
    threshold: float = 0.2,
    lock_mz: bool = False,
    filter_method: str = "all"
)

# Post-process data

data: dict[name, SCData] = sc.post_process(
    normalize_method=["log", "zscore"]
    fillna_method: str = "none",
)

# Save results

sc.save()

```
