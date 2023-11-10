# Quick start

## Installation

SCMeTA is available on PyPI. You can install it with pip:

```bash
pip install scmeta
```

:::warning
.NET Framework 4.7 or MONO are required for loading RAW data.

Please refer to [.NET dependencies](install/#dependencies-for-loading-data) for more details.
:::

If you want to change the source code, you can clone the repository and install.

Details can be found in [Install from source code](install/src).

## Usage

```python

from SCMeTA import Process

# Initialize a Process object

sc = Process()

# Load data

sc.load('data.RAW')


# Pre-process data

sc.pre_process()

# Process single-cell metabolism data.

sc.process()

# Save results

sc.save()

```

## Documentation

For more api details, please refer to [Documentation](api/)
