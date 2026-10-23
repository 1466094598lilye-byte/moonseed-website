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

（2026-10-21 第三版）左文右画：左边标题、两行副标题、`Get started`；右边先停在埋着种子的土丘上，土丘下面一颗和 app 同款的 `Wrap up !`。停 1.4 秒，一只光标从右下滑过来把按钮按下去（按钮沉下去、影子收起），然后才播收工之后那一段——苗从土丘长出（固定抽条，跳过三态选择框）、旁边开坑、立方体升起打开、🔦 带火花升出、遗物卡在按钮原来的位置推上，卡角一颗 `↻` 回到土丘从头再来——画面和 3.3 秒时间表照 `demo/Reveal.tsx`。访客自己点按钮也行。第一版是加载就播，没有"按"这个动作，看着莫名其妙，打回了；第二版只等访客点、不自动播，也打回了。没有 app 的边框，场景直接长在 hero 底色上；viewBox 顶到 180，emoji 和火花升起来才不会飞出画面（第二版裁到 236，emoji 被切了一半）。减少动态的访客不自动按，自己按下 `Wrap up !` 直接看到卡。880 以下文字在上、画在下。不循环，不放整天的流程——那是 One day 那一屏的事。

### 3.2 Quick start

OpenClaw 的格式：左侧 eyebrow，tab 行，代码块，复制按钮。宽度和 hero 文字块对齐。

### 3.3 One day

（2026-10-21 改，照效果图第 4 版）Forest 式：居中标题；一行三个圆，每个圆里一张用 app 自己符号画的静态图（沟上悬着的种子 / 三态选择框里选中的一格——画的是"选"不是"长" / 打开的立方体和遗物），圆下面是 §2.3 的小标题和那一句；然后一颗和 Get started 同款的 `Try it` 大按钮（点了把演示框滚到视野中间、焦点给输入框）；演示框居中在最下。圆是 2.5px 奶白描边、面板底、实心偏移影，和按钮、卡片同一套，用圆而不用穹顶是为了和最后一屏区分。演示的画布按 app 的比例画（360 × 588），按容器缩放。720 以下三圆竖排。

### 3.4 An Ecosphere for every project

一行三个生态球并排，各自里面一小片不同体量的植物（用 `Plant` 组件静态摆，不动）。三个球下面各一个名字：the novel / the thesis / the side app。只是画，不可点。（2026-10-21 改）每个球里三株**不同物种**——球是项目，里面每天长的物种是随机的，不是一球一种——按色相配成三色组；第二个球放一株实验作物（升华那天长出来的杂交株：砧木抽条体 + 换色接穗 + 绑痕，参数写死，不从遗物 id 算），为此复制了 `ui/HybridDefs.tsx` 并在网站的 `Plant.tsx` 里补了静态的 `HybridPlant`。

## 4. One day 演示

### 4.1 流程

把 app 的流程原样走一遍（2026-10-20 起连作业计时和收工后的记录页一起）。七步：

1. **输入。** 一个输入框，预填 `Chapter five of the novel.`，可改可清空；下面一个按钮 `Plant`。占位（清空后显示）是 app 那句 `What would you like to focus on today?`。
2. **落种。** 按下去：种子落进沟、土丘盖住、停 0.3 秒、镜头拉起进穹顶——app 里那段约 2.1 秒的动画，照搬。
3. **仓内景（2026-10-20 扩）。** 照 app 的状态 B：页头下一行 mono 正计时（只在作业中显示），页脚两层——上层 `Pause / Resume operation` 开关，下层 `Wrap up !`。种下那一刻作业就开始（app 在播种那一批写 `work.started`），所以进仓时计时已经在走、光球是琥珀 6 秒呼吸；按 Pause 转青色慢呼吸，Resume 再亮。`Begin operation` 只在 app 里 MCP 种的种子上出现，演示里不会见到。作业段只在内存里。按 `Wrap up !` 出现 app 的 `StatePicker`：标题 `How far did it grow today?`，三档。网站这份的第三档标签用 `Bloom`（app 里是 Full），和 §2.3 的文案一致；前两档 `Sprout` / `Shoot` 不变。确认前若作业还开着，先收口（app 也是）。
4. **长出。** 选哪档就长成哪档：植物从土丘里长出、土丘沉平。物种固定一个（选一个完全体最好看的，实现时定，写在代码常量里）。
5. **揭示。** 旁边开坑、土块飞起、小立方体升起打开、遗物升出带火花、推卡片——app 里那段 3.3 秒，照搬。卡片上是 §4.2 写死的旧货。卡片的按钮 `Take it`，按下去进第 6 步。
6. **今天结束了（2026-10-20 加）。** 照 app 的状态 C：植物以选定的体量长在地里，种子句、`Today took root.`、按钮 `Operation log`。页脚空着（app 里这个位置是 `Visit the forest →`，网站没有森林可去；原来放过一颗灰色的 `Start over`，2026-10-23 删了）。回到第 1 步靠框外的按钮：种下之后，演示框**外面**正下方出现一颗和 Try it 同款的 `Start over`，点了把演示整个重挂回第 1 步，输入框里仍是预填那句，作业段清空。放框外是因为访客走到记录页只有左上角的 `‹` 能出去，会困惑；放进记录页里又挤，博士否了。
7. **作业记录（2026-10-20 加）。** 照 app 的 `OpLog`：七个日期 chip（今天和之前六天）、一页一天、竖轴早 6 到次日 6。只有今天有数据——访客刚才点出来的那几段，暂停的空隙也在；其他六天就是 app 里本来的空页 `Nothing sown`。**不预埋任何数据。** 底部「Operation recap」按 app 的规矩灰着，提示 `Made every 14 recorded days · n to go`。和 app 的一处不同：不足一分钟的段时长写秒（app 取整成 0 min；演示里的段几乎都不到一分钟）。Esc 关闭。

不做：升华（"Today didn't go as expected" 那条入口不出现）、意外收获、教程、第二颗种子的锁、作业总结卡、熄屏自动暂停。演示不存任何东西，刷新即复位。

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
  - `pages/flow/OpLog.tsx`（2026-10-20；总结卡不拷）和 `ui/time.ts` 的英文分支、core `workStats.ts` / `clock.ts` 里 `AXIS_START`、`addDays`、`dayMidnightMs` 几个纯函数，合成 `demo/time.ts`
- 拷过来的文件里对 `useStore`、`useT`、`useTutorial`、`platform` 的依赖全部拆掉，换成 props 或常量：网站没有 store、没有 i18n、没有教程。`@ecosphere/core` 只允许 `import type`（`DayState`、`Rarity`），不引它的函数。
- 复制是单向快照。不建共享包，不让 `apps/desktop` 引 `apps/web`，反过来也不行。

## 7. 未定（博士明确搁置的，不是漏写）

- ~~Hero 画面~~ 2026-10-21 定了，见 §3.1。
- **托管与域名。** 静态文件，没定放哪。安装脚本的 `curl` 地址也取决于它。
- **物种。** 演示里固定哪一个物种，实现时挑，不是设计问题。

## 8. 验收

打开网站，从上到下：

1. 第一屏是 §2.1 的三行字和一个按钮，按钮点下去滚到 Quick start。
2. Quick start 一个块（2026-10-17 晚改，不分 agent），和 Moonseed-releases 的 README 里那段一致，复制按钮能用。
3. One day：左边三段旁白；右边输入框里预填 `Chapter five of the novel.`。按 Plant 看到种子落下、进穹顶，计时已经在走、光球琥珀；按 Pause operation 回青、计时行隐去，Resume 再走；按 Wrap up 选 Shoot，看到植物长成抽条的体量；接着看到立方体打开、🔦 的卡片；按 Take it 到「Today took root.」页，按 Operation log 看到七天的记录、今天那页画着刚才的段、其他天 Nothing sown、总结按钮灰着；Esc 关掉；按框下面的 Start over 回到输入框，按钮随之消失。选 Sprout 和 Bloom 各走一次，体量不同。
4. 最后一屏三个生态球并排，下面是 the novel / the thesis / the side app，上面那一句话。
5. 把窗口缩到手机宽度，四屏都能看，没有横向滚动。
6. `git status` 里 `apps/desktop` 和 `packages` 干净。
