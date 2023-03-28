# Vue 3 + TypeScript + Vite 后台项目 u

## SVG 图标

```
https://remixicon.com/
```

### tsconfig.json， 应用程序(src 文件夹)在浏览器运行配置

```
    //ts文件引入别名
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },

    //自动识别  .d.ts文件
    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
```

### tsconfig.node.json,vite 运行环境

```
//识别build里面ts文件
"include": ["src/**/*.d.ts", "build/**/*.ts", "vite.config.ts"]
```

## todo

- [x] 增加图标
- [x] 重构 vite.config.ts
