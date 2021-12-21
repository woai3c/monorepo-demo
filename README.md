# monorepo-demo
lerna + yarn 实现多包管理

* main 依赖 component-a component-b
* component-a 和 component-b 依赖 component-c
* component-c 已被发布到 npm（测试成功后被我撤销了，要不 npm 又多一个垃圾包）

## 使用
#### 安装 lerna yarn
```
npm i -g lerna yarn
```

#### 安装项目依赖
安装所有 packages 的依赖项并且连接本地包的交叉依赖项。
```
lerna bootstrap
```

#### 添加新包
```
lerna create @tan/foo
```
执行命令后会在 `packages/@tan` 下创建一个新的包 `foo`。

注意，我们创建的所有包都必须以 `@tan/` 为前缀。

#### 添加第三方依赖
添加第三方依赖包到某个包中，假设添加 `chalk` 依赖到 `@tan/foo` 中：
```
lerna add chalk --scope=@tan/foo --dev
```

#### 将本地包作为依赖
假设现在有两个本地包 `@tan/foo` 和 `@tan/bar`，如果想把 `@tan/foo` 到 `@tan/bar` 的依赖库中，执行如下命令：
```
lerna add @tan/foo --scope=@tan/bar
```
#### 打包
打包需要使用 `lerna run` 命令，在包含该脚本命令的每个包内部执行 `npm script` 脚本命令,也可以指定在某个包下执行。

批量打包
```
lerna run build
```
单独打包某个包
```
lerna run build --scope=@tan/foo
```

参考资料：
* [lerna多包管理实践](https://juejin.cn/post/6844904194999058440)
