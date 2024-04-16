# Filter metabolite features

Usually the metabolite features are filtered based on the number of missing values, the number of unique values, and the number of zero values. The filtering is done by the `filter_mat` function. The function takes the following parameters:

- `data`: The input data matrix.
- `missing`: The maximum number of missing values allowed for a feature.