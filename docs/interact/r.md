# Interact with R

This document provides guidance on how to enable interaction between Python libraries and R packages using the Reticulate package. The goal is to allow users of R to seamlessly tap into the functionality of Python libraries, and vice versa, enabling the use of both ecosystems in a single workflow.

## Prerequisites

Before starting, ensure that you have installed both Python and R on your system. You will also need the reticulate package in R, and any necessary Python libraries (e.g., pandas, numpy) in your Python environment.

To install reticulate in R:

```R
install.packages("reticulate")
```

## Using Reticulate in R

Reticulate can be used to run Python code, import Python modules, and convert data between R and Python.

## Importing a Python Module

To access Python functions and objects from R, use the import() function:

```R
library(reticulate)
pd <- import("pandas")
# Now you can use pandas functions in R
```

## Running Python Code in R

You are able to execute Python scripts directly from R:

```R

py_run_file("scmeta.py")

Or execute strings of Python code:

py_run_string("print('Hello from Python!')")
```

## Accessing Python Functions and Variables

Access Python functions and variables using the $ operator:

```R

result <- pd$DataFrame(data = matrix(1:4, nrow = 2, ncol = 2))

```

## Converting Data Between R and Python

Reticulate automatically converts R data frames to pandas DataFrame objects, and vice versa:

```R

# R data frame to pandas DataFrame

r_df <- data.frame(A = 1:3, B = 4:6)
py_df <- r_to_py(r_df)

# pandas DataFrame to R data frame

r_df_converted <- py_to_r(py_df)

```

Remember to consult the official documentation for detailed usage and available features:

- Reticulate: <https://rstudio.github.io/reticulate/>

Following these guidelines, you are now ready to integrate Python libraries and R packages in your data science workflow.
