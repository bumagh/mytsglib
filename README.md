# 我的 ts 小游戏开发库

# 子模块使用

推荐的工作流程
使用 Submodule 的最佳实践：

添加子模块：

bash
cd A-repo
git submodule add https://github.com/username/mylib.git libs/mylib
git commit -m "Add mylib as submodule"
更新子模块（当 B 仓库有更新时）：

bash
cd libs/mylib
git pull origin main
cd ..
git add libs/mylib
git commit -m "Update mylib submodule"
锁定特定版本：

bash
cd libs/mylib
git checkout v1.0.0
cd ..
git add libs/mylib
git commit -m "Pin mylib to v1.0.0"
克隆时的注意事项：

bash

# 克隆并初始化所有子模块

git clone --recurse-submodules <repository-url>

# 如果已经克隆，可以这样更新

git submodule update --init --recursive

# 测试

库中包含了完整的测试套件，可以分别测试各个模块。

运行所有测试：

```typescript
import { runAllTests } from "./test/index";
runAllTests();
```

或者分别运行单个模块的测试：

```typescript
import { testGameManager } from "./test/core/manager/GameManager.test";
testGameManager();
```
