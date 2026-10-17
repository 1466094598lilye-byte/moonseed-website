# Moonseed website

Moonseed 的官网：四屏静态站（Vite + React），Vercel 托管。英文版。

## 跑

```bash
npm install
npm run dev        # http://localhost:5174
npm run build      # 产物在 dist/，tsc 先过一遍类型
```

Vercel 用默认设置即可：Framework Vite，Build `npm run build`，Output `dist`，Node 22。

## 来源与快照

- 文案、结构、画风和演示流程：`docs/2026-10-17-website-design.md`（规格）。`docs/2026-10-17-website.md` 是当时的实施计划，若干段落已被评审改动盖过，以代码为准。
- `src/ui/` 和 `src/demo/` 里第一行写着 "Copied from" 的文件，是 Moonseed 私有仓库 `apps/desktop/src` 的快照（commit `e21bb47`）：只复制，不同步。app 的画风或动画改了，要手动重拷一次再 diff。
- 不引 `@ecosphere/core`，不共享包；网站是 app 的一份影子，不是它的消费者。

## 还没定的

hero 画面（现在只有排线底）、favicon 和 description、域名。
