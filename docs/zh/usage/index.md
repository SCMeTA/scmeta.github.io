# 快速开始

## 安装 SCMeTA

SCMeTA 可以通过 pip 安装：


```bash
pip install scmeta
```

If you want to change the source code, you can clone the repository and install.

Detials can be found in [Installation](../install/)

## Usage

```python

from scmeta import SCProcess

# Initialize a SCProcess object

sc_process = SCProcess()

# Load data

sc_process.load('data.RAW')


# Preprocess data

sc_process.pre_process()

# Run SCMeTA

sc_process.process()

# Save results

sc_process.save('results')

```

## Documentation

For more information, please refer to the [documentation](https://scmeta.readthedocs.io/en/latest/).