> 2026-10-17 晚：网站已拆成独立仓库 moonseed-website（Vercel 托管）。文中的 `apps/web` 即本仓库根目录；根 `package.json` 脚本、`.claude/launch.json` 那些 monorepo 细节不再适用。

# Moonseed 网站 · 设计规格（2026-10-17）

> 本文是 2026-10-17 整段讨论的结论：网站只做英文版，四屏，文案逐字定稿，画风照搬 app 的 token，组件从 `apps/desktop` 复制而不共享。与 `2026-09-24-ecosphere-implementation-spec.md` 无冲突：网站不碰 app 的任何文件。

## 0. 结论先行

- **四屏，没有更多。** Hero → Quick start → One day（可以亲手走完的流程）→ An Ecosphere for every project。不做评价、数字、科学、媒体、人群、定价、FAQ：这些现在填不出来，填不出来就不放。
- **文案已定稿（§2），逐字用，不再改写。**
- **画风照搬 app 的 token（§5），版面为横屏重画。** 只做深色。遗物用 emoji。
- **One day 那一屏播真的。** 把 app 里落种、收工、长出、揭示的组件和动画复制进网站，访客自己打一句、按 Wrap up、选体量、看它长出来、翻出一件写死的旧货。
- **只复制，不改 app。** `apps/desktop`、`packages/*` 一个字都不动。网站是一份快照，app 以后改了画风，网站不跟着变，要有人再拷一次。
- **Hero 画面未定。** 博士说先不动。第一版 hero 只有文字块和按钮，画面位置留空（§3.1）。

## 1. 参考与取舍

看了三家：Forest（机制三步 + 森林图 + 大量可信度）、one sec（科学与评价墙）、OpenClaw（hero 正下方就是安装块）。三家是同一条脊柱。Moonseed 取 OpenClaw 的骨架：先装上，再解释。Forest 的 ✗/✓ 痛点节不做，标题已经做了这件事。

## 2. 文案（定稿）

全站英文。下面每一行逐字用，包括大写的 ONE 和 "when wrap up" 这个省略主语的写法（博士定的，为了节奏，不补 you）。

### 2.1 Hero

```
Your effort deserves more than a tick.

Plant ONE goal in the morning, witness the bloom when wrap up.
Plugs straight into Claude Code, Codex, or any AI agent you already use.

[ Get started ]
```

只有一个按钮。点击平滑滚到 Quick start。

### 2.2 Quick start

小标题（eyebrow 样式，mono 大写字距）：`QUICK START`

内容照 OpenClaw 的格式：几个 tab，每个 tab 一个代码块带复制按钮。tab 和代码块的内容**直接从仓库 README「接入 AI 工作台」一节复制**，不另写：

- `Claude Code` — 那条 `claude mcp add -s user moonseed -- …`
- `Claude Desktop` — 那段合并进 `claude_desktop_config.json` 的 JSON
- `Codex` — 那段 `~/.codex/config.toml`

代码块上方一句，也来自 README：先打开一次 Moonseed.app。README 以后改成一段话丢给 agent 的安装方式（见 2026-10-15 的决定），这一屏跟着换内容，格式不变。

### 2.3 One day

```
One day in Moonseed

Plant ONE goal
Write down the ONE thing you want to focus on today to plant the seed.

Witness the bloom
Select the progress: a sprout, a shoot, or full bloom. Your call.

Dig up a relic
Every wrap up turns up one small surprise.
```

三个小标题前两个故意接 hero 那句。这三段文字是旁白，站在演示（§4）旁边。

### 2.4 An Ecosphere for every project

```
An Ecosphere for every project

The novel, the thesis, the side app: each in its own sphere, with its own progress.
```

就这一句。"几个项目一天只种一颗"这条规矩不在网站上说，留给 app 的教程。

### 2.5 其余

- 不做导航栏。
- 页脚一行：GitHub 仓库链接。这一条讨论里没提，是默认，博士可以划掉。

## 3. 四屏的版面

### 3.1 Hero

居中文字块：标题、两行副标题、按钮。标题上方留一块画面的位置，第一版空着（只有排线底），等 hero 画面定了再放。不用 app 截图顶替。

### 3.2 Quick start

OpenClaw 的格式：左侧 eyebrow，tab 行，代码块，复制按钮。宽度和 hero 文字块对齐。

### 3.3 One day

左右两栏：左边是 §2.3 的三段旁白，右边是演示（§4）。演示的画布按 app 的比例画（360 × 640 的构图直接用，不拉伸），在页面上按容器缩放。手机宽度下旁白在上、演示在下。

### 3.4 An Ecosphere for every project

一行三个生态球并排，各自里面一小片不同体量的植物（用 `Plant` 组件静态摆，不动）。三个球下面各一个名字：the novel / the thesis / the side app。只是画，不可点。

## 4. One day 演示

### 4.1 流程

把 app 的流程原样走一遍，去掉中间的作业计时。五步：

1. **输入。** 一个输入框，预填 `Chapter five of the novel.`，可改可清空；下面一个按钮 `Plant`。占位（清空后显示）是 app 那句 `What would you like to focus on today?`。
2. **落种。** 按下去：种子落进沟、土丘盖住、停 0.3 秒、镜头拉起进穹顶——app 里那段约 2.1 秒的动画，照搬。
3. **收工。** 穹顶里不等计时，直接出现按钮 `Wrap up !`。按下去出现 app 的 `StatePicker`：标题 `How far did it grow today?`，三档。网站这份的第三档标签用 `Bloom`（app 里是 Full），和 §2.3 的文案一致；前两档 `Sprout` / `Shoot` 不变。
4. **长出。** 选哪档就长成哪档：植物从土丘里长出、土丘沉平。物种固定一个（选一个完全体最好看的，实现时定，写在代码常量里）。
5. **揭示。** 旁边开坑、土块飞起、小立方体升起打开、遗物升出带火花、推卡片——app 里那段 3.3 秒，照搬。卡片上是 §4.2 写死的旧货。卡片的按钮 `Take it`，按下去回到第 1 步，输入框里仍是预填那句。

不做：升华（"Today didn't go as expected" 那条入口不出现）、意外收获、作业计时、教程、第二颗种子的锁。演示不存任何东西，刷新即复位。

`prefers-reduced-motion` 时和 app 一样：动画直接切到终态。

### 4.2 写死的旧货

稀有度、emoji、名字、简介四样都写死在代码常量里，不抽、不调模型。

提议（博士可改）：

- 稀有度：`uncommon`（检测行货架上那一档：和新的一样靠得住。演示里放 rare 以上会让人以为每晚都有）
- emoji：🔦
- 名字与简介（v8 的口气，一行）：`Shift lamp · reads full charge after thirty years underground; this year's inspection tag is still on it.`

卡片的日期用访客当天的日期，由 `fmtDate` 现算。

## 5. 画风

照 `docs/design/design-notes.txt` 的 token 表和 10a 英文版规则，具体是：

- 色：`#0f1a17` 底，`#0a120f` 面板，`#132420` / `#1c3029` 远地近地，`#e8dfc8` 奶白描边与正文，`#e0a04f` 琥珀（主按钮、种子、传说），`#4f8a7a` 青绿（偏移影、标签、稀有），`#8f7ad1` 史诗。直接复用 app 的 `tokens.css`。
- 线：2.5px 奶白描边；4px 圆角；"抬起"用 `4px 4px 0 #4f8a7a` 实心偏移影。不用模糊、不用发光、不用渐变。35° 排线做地面和面板。
- 字：Archivo（700 标题 / 500 强调 / 400 正文），机器小字 IBM Plex Mono，标签大写 0.12em 字距，按钮零字距。
- 只做深色，不做浅色切换：植物颜色写死在深色上。
- 遗物图标用 emoji，和 app 一致；不用设计稿里的描边符号。
- app 的 `zoom: 1.25` 不带到网站。网页按正常 CSS 像素排，演示画布按 §3.3 缩放。
- 手机宽度能看：16px 页边，不出横向滚动。

版面是新画的。app 的 360 × 640 构图只在演示画布里原样保留，其余三屏为横屏重新构图。

## 6. 工程

- 新目录 `apps/web`，Vite + React 19，和桌面端同一套工具链。根 `package.json` 的 workspaces 已经包含 `apps/*`，不用改；加两条根脚本 `dev:web` / `build:web` 方便起手（这是对根 `package.json` 的改动，不是对 app 的）。
- 构建产物是纯静态文件（`apps/web/dist`），放哪儿都行。放哪儿、什么域名，见 §7。
- **复制清单**（从 `apps/desktop/src` 拷到 `apps/web/src`，每个文件顶部注明来源路径和拷贝时的 commit）：
  - `ui/tokens.css`、`ui/SvgDefs.tsx`、`ui/HybridDefs.tsx`、`ui/ExtraDefs.tsx`、`ui/Plant.tsx`、`ui/species.ts`、`ui/relic.ts`、`ui/basics.tsx`
  - `pages/Sow.tsx` 里的 `Scene`、`GroundScene`、`DomeInside`、`useSeedFall`（只要场景和动画，不要 `Sow()` 本身）
  - `pages/flow/CloseFlow.tsx` 里的 `StatePicker`
  - `pages/flow/Reveal.tsx`
- 拷过来的文件里对 `useStore`、`useT`、`useTutorial`、`platform` 的依赖全部拆掉，换成 props 或常量：网站没有 store、没有 i18n、没有教程。`@ecosphere/core` 只允许 `import type`（`DayState`、`Rarity`），不引它的函数。
- 复制是单向快照。不建共享包，不让 `apps/desktop` 引 `apps/web`，反过来也不行。

## 7. 未定（博士明确搁置的，不是漏写）

- **Hero 画面。** 讨论到的一个读法是：横贯整页的地面线、中间一个穹顶、里面一颗刚落下的种子、值守单元不出场。博士说先不动。第一版按 §3.1 留空。
- **托管与域名。** 静态文件，没定放哪。安装脚本的 `curl` 地址也取决于它。
- **物种。** 演示里固定哪一个物种，实现时挑，不是设计问题。

## 8. 验收

打开网站，从上到下：

1. 第一屏是 §2.1 的三行字和一个按钮，按钮点下去滚到 Quick start。
2. Quick start 三个 tab，内容和 README 一致，复制按钮能用。
3. One day：左边三段旁白；右边输入框里预填 `Chapter five of the novel.`。按 Plant 看到种子落下、进穹顶；按 Wrap up 选 Shoot，看到植物长成抽条的体量；接着看到立方体打开、🔦 的卡片；按 Take it 回到输入框。选 Sprout 和 Bloom 各走一次，体量不同。
4. 最后一屏三个生态球并排，下面是 the novel / the thesis / the side app，上面那一句话。
5. 把窗口缩到手机宽度，四屏都能看，没有横向滚动。
6. `git status` 里 `apps/desktop` 和 `packages` 干净。
