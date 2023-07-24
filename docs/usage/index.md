# Quick start

## Installation

SCMeTA is available on PyPI. You can install it with pip:

```bash
pip install scmeta
```

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