# monorepo-demo
lerna + yarn 实现多包管理

* main 依赖 component-a component-b
* component-a 和 component-b 依赖 component-c
* component-c 已被发布到 npm（测试成功后被我撤销了，要不 npm 又多一个垃圾包）

## 使用
### 安装 lerna、yarn
```
npm i -g lerna yarn
```

### 安装项目依赖
安装所有 packages 的依赖项并且连接本地包的交叉依赖项。
```
lerna bootstrap
```

### 添加新包
```
lerna create foo
```
执行命令后会在 `packages` 下创建一个新的包 `foo`。

### 添加第三方依赖
如果想添加第三方依赖包到某个包中，假设添加 `chalk` 依赖到 `foo` 中，可以执行命令：
```
lerna add chalk --scope=foo --dev
```
`--dev` 表明将依赖安装为开发包，如果构建项目需要将依赖包也打进去，例如 `element-plus`，则不需要添加 `--dev` 参数。
#### 添加全局依赖
如果添加的第三方依赖包想在所有的包中使用，则在项目根目录下执行：
```
yarn add chalk --dev -W
```

### 将本地包作为依赖
假设现在有两个本地包 `foo` 和 `bar`，如果想把 `foo` 到 `bar` 的依赖库中，执行如下命令：
```
lerna add foo --scope=bar
```
### 打包
打包需要使用 `lerna run` 命令，在包含该脚本命令的每个包内部执行 `npm script` 脚本命令,也可以指定在某个包下执行。

#### 批量打包
```
lerna run build
```
#### 单独打包某个包
```
lerna run build --scope=foo
```

参考资料：
* [lerna多包管理实践](https://juejin.cn/post/6844904194999058440)
