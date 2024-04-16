# Save data

SCMeTA has a save data api. It is used to save data to a file. The data is saved in a csv format.

## Usage

```python

sc.save(filename="", data_type="cell_mat")

```

data_type must in ["cell_mat", "gene_mat", "gene_list", "cell_list", "gene_meta", "cell_meta"]