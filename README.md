# monorepo-demo
lerna + yarn 实现多包管理

* main 依赖 component-a component-b
* component-a 和 component-b 依赖 component-c
* component-c 已被发布到 npm（测试成功后被我撤销了，要不 npm 又多一个垃圾包）

参考资料：
* [lerna多包管理实践](https://juejin.cn/post/6844904194999058440)
