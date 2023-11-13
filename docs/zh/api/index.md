# API 使用指南

`SCMeTA` 涵盖了一系列用于处理单细胞代谢物数据的功能。

主要可以分为四个部分：

### 数据载入

包括了载入原始数据、处理过的数据与数据库。

- [load](load_data)
- [load_processed](load_data)
- [load_database](load_data)

### 数据预处理

包括了截取数据、数据偏移及数据过滤。该部分的目的在于预处理细胞数据，便于进行后续分析。

- [cutting](scdata#cutstart-end)
- [offset](scdata#offsetoffset)
- [filter_occ](filter_occ)

### 数据处理

该部分为 `SCMeTA` 的主功能，可以处理单细胞数据并生成新的代谢物与细胞矩阵。

- [denoise](denoise)
- [filter_mat](filter_mat)
- [merge_cells](merge_cells)
- [filter_assem](filter_assem)

### 数据后处理

该部分将用于处理代谢物与细胞矩阵。

- [normalization](normalization)
