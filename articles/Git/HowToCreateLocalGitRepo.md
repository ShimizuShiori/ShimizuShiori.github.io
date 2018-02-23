# Git创建本地库以及Clone、Pull和Push

本文就如何在本地创建Git仓库，并在多个同录中协同开发的方法进行说明

通过本教程将一步一步实现以下功能：
1. 通过 **git** 在本地创建中心库 *Main Repo*
2. 通过 **clone** 得到 *Main Repo* 的副本 *Copied Repo 1*
3. 继续通过 **clone** 得到 *Main Repo* 的另一个副本 *Copied Repo 2*
3. 对 *Copied Repo 1* 进行修改，**Commit**
4. 将 **Commit** 后的 *Copied Repo 1* **push** 到 *Main Repo* 中
5. 使用 **pull** 将 *Copied Repo 1* 中的修改同步到 *Copied Repo 2* 中

```
git init --bare
Initialized empty Git repository in D:/Git/MainRepo

```