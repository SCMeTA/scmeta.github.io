# Docker

SCMeTA 也可以在 Docker 中通过 [Jupyter Lab][Jupyter] 运行。具体可通过以下步骤搭载：

## 克隆资源库

```bash
git clone https://github.com/SCMeTA/SCMeTA.git
```

使用以下指令运行：

```bash
docker build -t scmeta:latest .
```

之后便可以通过 `http://dockerhosr:8888` 进入Jupyter Lab.

You can find token in the terminal, and create a password for Jupyter Lab.

[Jupyter]: https://jupyter.org/