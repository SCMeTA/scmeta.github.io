# User Guide for visualization

## Introduction

The `Plot` class is designed to facilitate the visualization of single-cell data through a variety of plots. It allows for the loading of this data from CSV files or direct input and provides methods for creating scatter plots, heatmaps, volcano plots, and more, utilizing dimensionality reduction techniques such as PCA, t-SNE, and UMAP.

## Usage

```python
from SCMeTA import Plot

# Initialize the MplPlot object
plotter = Plot()

# Load data
plotter.load(data=my_data) # if data is provided as a dictionary
plotter.load(path="path/to/csv") # if data is to be loaded from a CSV file

# Create various plots
plotter.scatter_select(method=["pca", "tsne", "umap"])
plotter.heatmap()
plotter.volcano("sample1", "sample2")
plotter.box()

# Method for mass spectrometry comparison
ms_full = plotter.ms_compare("sample_name")

# Method to compare cells based on single-cell data
cell_full = plotter.cell_compare("sample_name")

```

Remember to replace `my_data`, `path/to/csv`, `sample1`, `sample2`, and `sample_name` with your actual data or file paths.

## Features

- `load`: Loads single-cell data either from a provided dictionary or from CSV files located at a given path.
- `init_plot`: Initializes a matplotlib figure and axes for plotting.
- `pca`, `tsne`, `umap`: Perform dimensionality reduction using PCA, t-SNE, or UMAP and return the transformed data.
- `scatter_select`: Visualize dimensionality reduction results through scatter plots for selected methods.
- `heatmap`: Create a heatmap based on the loaded data.
- `volcano`: Generate a volcano plot comparing two samples.
- `box`: Display a box plot based on a single-component transformation using a specified method.
- `ms_compare`: Compare mass spectrometry data for a selected scan.
- `cell_compare`: Compare data between two selected cells.

## Support

For support or to report an issue with using the Plot class, please refer to the repository’s issue tracker where the code is hosted or contact the code maintainer.

In the absence of such resources, debugging and interpreting errors with standard Python troubleshooting techniques is recommended.
