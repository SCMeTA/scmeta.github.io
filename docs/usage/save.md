# Save Function

## Introduction

`save` function is designed to save processed single-cell mass spectrometry data to files. It is part of the `SCMeTA` class. The function allows users to save processed data in various formats, including `cell_mat`, `mat`, `process`, and `raw`, file type details can be seen in [SCData](../api/scdata). Users can choose to save all files at once or specify a single file to save. The function also provides the flexibility to save files in a custom directory path or the default directory.

## Usage

To use the `save` method of the `SCMeTA` class, you need to have an instance of the class that contains processed MS data.

### Save Method Arguments

- `file_name` (str | None, optional): The name of the specific file to save. If `None`, all files will be processed.
- `data_type` (str, optional): The type of data to save. Default is "cell_mat". Other supported types include "mat", "process", and "raw".
- `path` (str | None, optional): The directory path where the file should be saved. If `None`, the file will save in the subdirectory "Process" of the directory where the data were loaded from.

### Examples

- To save all data of type "cell_mat" in the default path:

  ```python
  scmeta.save(path="/path/to/directory")

    ```

- To save a specific file of type “process” in a specified path:

    ```python
    scmeta.save(file_name="sample1", data_type="process", path="/path/to/directory")
    ```

## Features

- Flexible file saving: Save either all files at once or specify a single file.
- Multiple data types: Can save data in various formats including `cell_mat`, `mat`, `process`, and `raw`.
- Custom paths: Choose where to save your output files - either in the default directory or a path of your choice.
- Intuitive logging: Provides informational logs to confirm successful saves.

## Support

If you encounter issues or have questions regarding the save function, please refer to the documentation of MSProcess class for further details or contact the support team/maintainer of the module.

In case of requiring additional help about Python standard libraries such as os or logging, consult the official Python documentation or communities like Stack Overflow.
