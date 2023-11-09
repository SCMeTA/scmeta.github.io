# Quick start

:::warning
Data load module on Windows is still under development. We recommend using Linux or macOS to use SCMeTA.
:::

## Installation

SCMeTA is available on PyPI. You can install it with pip:

```bash
pip install scmeta
```

:::tip
More dependencies are required to load RAW data. See [Installation](../install/#data-load-dependencies) for more details.
:::

If you want to change the source code, you can clone the repository and install.

Details can be found in [Installation](../install/)

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

For more api details, please refer to [Documentation](../usage/)
