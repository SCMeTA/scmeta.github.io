# Process Module

Process module is the main module of SCMeTA. It provides a set of tools for single-cell metabolism time-course analysis, including data loading, **full path of process** (preprocess, main-process, past-process). SCMeTA is designed to be easy to use and easy to extend. It is built on top of the [pandas](https://pandas.pydata.org/) and [numpy](https://numpy.org/).

The main process pipeline of SCMeTA is shown below:

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
