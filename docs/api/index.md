# API Reference

`SCMeTA` include batch of functions to process the single-cell metabolism data and generate the result.

It can be divided into four parts:

### Loading data

Including loading raw data, processed data and database.

- [load](load_data)
- [load_processed](load_data)
- [load_database](load_data)

### Pre-processing data

Including data cutting, offsetting, and filter occurances. This parts is for pre-processing the cells data, make it easier to process.

- [cutting](scdata#cutstart-end)
- [offset](scdata#offsetoffset)
- [filter_occ](filter_occ)

### Processing data

This parts is the main functions of `SCMeTA`. It can process the single-cell metabolism data and generate the matrix of metabolites and cells.

- [denoise](denoise)
- [filter_mat](filter_mat)
- [merge_cells](merge_cells)
- [filter_assem](filter_assem)

### Post-processing data

This parts is for post-processing the matrix of metabolites and cells, make it easier to analyze.

- [normalization](normalization)
