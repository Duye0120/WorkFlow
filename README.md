# ahooks

---

# ✨技术栈

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

# 📦安装依赖

```bash
$ npm install
# or
$ yarn install
```

# 🔨项目启动

```bash
$ npm run dev
# or
$ yarn dev
```

# ⚙️项目结构

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
