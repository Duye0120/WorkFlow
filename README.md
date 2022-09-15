# ahooks

## ✨技术栈

---

- Next.js
  - [![NPM][nextjs-image]][nextjs-url]
- semi-design
  - [![NPM][semi-npm-badge]][semi-npm-url]
- tailwindcss
  - [![NPM][tailwind-npm-badge]][tailwind-npm-url]
- ahooks
  - [![NPM][npm-badge]][npm-url]

[semi-npm-badge]: https://img.shields.io/npm/v/@douyinfe/semi-ui.svg

[semi-npm-url]: https://www.npmjs.com/package/@douyinfe/semi-ui

[npm-badge]:https://img.shields.io/npm/v/ahooks.svg?style=flat

[npm-url]: https://www.npmjs.com/package/ahooks

[tailwind-npm-badge]: https://img.shields.io/npm/v/tailwindcss.svg?style=flat

[tailwind-npm-url]: https://www.npmjs.com/package/tailwindcss

[nextjs-image]: https://img.shields.io/npm/v/next.svg?style=flat

[nextjs-url]: https://www.npmjs.com/package/next

## 📦安装依赖

---

```bash
$ npm install
# or
$ yarn install
```

## 🔨项目启动

---

```bash
$ npm run dev
# or
$ yarn dev
```

## ⚙️项目结构

---

```text
|-- README.md
|-- components
│   |-- ArcoLayout
│   │   |-- index.tsx
|   |   |-- interface.d.ts
│   │   |-- utils.ts
│   │   |   └── layoutNavArray.ts (存放导航数据）
|-- pages
│   |-- _app.tsx
│   |-- index.tsx(首页）
│   |-- [name]
│   │   |-- components
│   │   │   |-- [name](组件名称）
│   │   |-- index.tsx（页面）
│   │   |-- interface.d.ts（接口）
```

## 🤖 其它小问题

---

### 为什么从 pnpm-> npm

---

我个人其实还是很喜欢pnpm的，因为他确实让`node_module`变得更佳好看，并且有效的减少了硬盘的
容量，但是`pnpm`在很多地方兼容性确实让我望而却步，很多依赖项，并不能很好的下载下来，这个在我平时
使用公司的项目时也有遇到，后面可能会使用`yarn`或者`npm`吧，但是我还是很喜欢`pnpm`的，希望他能
越来越好。
