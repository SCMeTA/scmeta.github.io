# Single-cell data process pipline

SCMeTA is a tool for single-cell metabolomics data analysis. It is composed by a set of methods for data processing, analysis and visualization. The data processing pipline is composed by the following steps:

1. Pre-processing
   1. Load data from MS Data File.
   2. Cut range and set offset.
   3. Filtter occurrence.
2. Processing
   1. Convert to matrix.
   2. Find cell position.
   3. Filter triple signal-to-noise ratio
   4. Deniose.
   5. Merge cell.
   6. Filter matrix by total ion count.
3. Post-processing
   1. Scaling and normalization.
