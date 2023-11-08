# Via Docker

SCMeTA can also used in Docker via [Jupyter Lab][Jupyter]. You can build the image with the following command:

## Clone the repository

```bash
git clone https://github.com/SCMeTA/SCMeTA.git
```

Then, you can run the image with the following command:

```bash
docker build -t scmeta:latest .
```

After that, you can access the Jupyter Lab via `http://dockerhosr:8888`.

You can find token in the terminal, and create a password for Jupyter Lab.

[Jupyter]: https://jupyter.org/