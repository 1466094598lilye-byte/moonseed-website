// 全站文案，唯一一处。规格 docs/superpowers/specs/2026-10-17-website-design.md §2 逐字，不在这里改写。

export const HERO = {
  title: 'Your effort deserves more than a tick.',
  line1: 'Plant ONE goal in the morning, witness the bloom when wrap up.',
  line2: 'Plugs straight into Claude Code, Codex, or any AI agent you already use.',
  cta: 'Get started',
}

export const QUICK_START = {
  eyebrow: 'QUICK START',
  lead: 'Paste this into your AI agent. It does the rest.',
  copy: 'Copy',
  copied: 'Copied',
  // 一段话给 agent，不分 Claude Code / Codex / Gemini：它自己知道怎么注册 MCP。路径和字段名对着 app：
  // node 固定找 ~/Library/Application Support/Moonseed/node/bin/node；last-boot.json 顶层 dataDir，mcp.shim 嵌套。
  block: [
    'Install Moonseed for me and connect it to you.',
    '1. Make sure node 22 or newer is available. If not, download the official macOS build for this CPU',
    '   from nodejs.org and unpack it so that ~/Library/Application Support/Moonseed/node/bin/node exists',
    '   (no sudo; leave any node I already have alone).',
    '2. Download https://github.com/1466094598lilye-byte/Moonseed-releases/releases/latest/download/Moonseed.zip',
    '   with curl, unpack it with `ditto -x -k`, put Moonseed.app in /Applications (replace an older copy),',
    '   and open it once.',
    '3. Wait for ~/Library/Application Support/Moonseed/last-boot.json to appear, then read it:',
    '   "mcp.shim" is the command, "dataDir" is its only argument.',
    '4. Register that as a stdio MCP server named exactly "moonseed", for me as a user',
    '   (not just this project), using your own configuration mechanism.',
    '5. Tell me whether I need to restart you.',
  ].join('\n'),
}

export const ONE_DAY = {
  title: 'One day in Moonseed',
  steps: [
    { title: 'Plant ONE goal', text: 'Write down the ONE thing you want to focus on today to plant the seed.' },
    { title: 'Witness the bloom', text: 'Select the progress: a sprout, a shoot, or full bloom. Your call.' },
    { title: 'Dig up a relic', text: 'Every wrap up turns up one small surprise.' },
  ],
}

export const ECOSPHERES = {
  title: 'An Ecosphere for every project',
  text: 'The novel, the thesis, the side app: each in its own sphere, with its own progress.',
  names: ['the novel', 'the thesis', 'the side app'],
}

// 演示里 app 自己的那些词（规格 §4.1）。第三档叫 Bloom，不叫 app 里的 Full。
export const DEMO = {
  ecosphereName: 'The novel',
  pod: 'POD 01',
  prefill: 'Chapter five of the novel.',
  placeholder: 'What would you like to focus on today?',
  plant: 'Plant',
  wrapUp: 'Wrap up !',
  pickState: 'How far did it grow today?',
  states: { sprout: 'Sprout', shoot: 'Shoot', full: 'Bloom' },
  cancel: 'Cancel',
  confirm: 'Confirm',
  take: 'Take it',
}

export const FOOTER = {
  github: 'GitHub',
  url: 'https://github.com/1466094598lilye-byte/Moonseed',
}
