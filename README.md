# GraspAudit · 灵巧抓取扰动评估工具

**用 MoonBit 写的离线命令行工具：从抓取实验的时间序列中，区分“始终保持”“持续恢复”“未恢复”和“数据不足”。**

不是机器人控制器，也不冒充已经训练好的抓取模型。它解决一个具体问题：实验结束时只有一个成功率，不容易看出抓取是一直稳定、丢失后恢复，还是数据缺失造成的假象。

[English](docs/README_EN.md) · [指标定义](docs/METRICS.md) · [测试记录](docs/VALIDATION.md) · [演示与提交说明](docs/SUBMISSION.md)

## 30 秒运行

解压后，在项目根目录运行（需要 Node.js 22 或更新版本；本包用 Node 24 验证）：

```bash
node dist/grasp-audit.cjs examples/synthetic.csv
node dist/grasp-audit.cjs examples/synthetic.csv --format json
node dist/grasp-audit.cjs examples/synthetic.csv --format csv > results.csv
```

**`examples/synthetic.csv` 是手工构造的合成演示数据，不是真实机器人实验，不构成策略优越性的证据。** 示例中的 `baseline` 和 `feedback` 只是演示标签，不是已实现的控制算法。

随包提供的 `dist/grasp-audit.cjs` 是由本项目 MoonBit 源码实际编译出的文件；无需安装 npm 包、无需 API Key、无需联网即可运行。修改源码需要 MoonBit 工具链。

## 它能做什么

- 严格校验 CSV：时间顺序、0/1 标记、策略一致性、基线、扰动个数。
- 固定窗口评估：观察到的保持、最终稳定恢复、未恢复、缺失/截断。
- 区分短暂恢复与**一直持续到窗口末端**的恢复，防止“闪一下就成功”。
- 对采样断档和录制过早结束单独计数，不偷偷当成失败或成功。
- 每试次诊断：累计保持/失持时长、首次失持时刻、最终稳定段时长。
- 按策略汇总保持率、稳定率、丢失后的条件恢复率、恢复时间中位数。
- 输出 Markdown 报告、JSON 汇总和逐试次 CSV；支持标准输入。
- 分析、解析、汇总和报告主体为 MoonBit；少量 JS FFI 只负责本地文件与终端 I/O。

## 用自己的实验数据

```csv
trial,policy,time_ms,held,perturbation
trial_001,my_policy,0,1,0
trial_001,my_policy,100,0,1
trial_001,my_policy,300,0,0
trial_001,my_policy,500,1,0
trial_001,my_policy,700,1,0
trial_001,my_policy,900,1,0
trial_001,my_policy,1100,1,0
```

以上仅是格式示意。`held` 必须由你的传感器、仿真状态或人工标注，根据明确且一致的规则产生。例如，先定义物体位置/接触的保持条件，再导出 0/1；本工具不替你证明该测量规则正确。

| 字段 | 含义 |
|---|---|
| `trial` | 唯一试次 ID；每个试次恰好一个扰动 |
| `policy` | 控制策略/实验条件标签，试次内不变 |
| `time_ms` | 非负整数毫秒，试次内严格递增，最大 1,000,000,000 |
| `held` | 此采样时刻观察到保持为 1，否则为 0 |
| `perturbation` | 扰动发生的那一个采样点为 1，其余为 0 |

ID/标签只接受 1–80 位 ASCII 字母、数字、`_`、`-`、`.`。不支持带引号或跨行的 CSV 字段；CRLF 和空行可用。扰动之前必须有 `held=1` 的基线采样。可交错记录不同试次，但不会自动排序或去重。最大 16 MiB / 200,000 行。

```bash
node dist/grasp-audit.cjs my-traces.csv --horizon-ms 1500 --dwell-ms 300 --max-gap-ms 100 --format json > report.json
cat my-traces.csv | node dist/grasp-audit.cjs - --format csv
```

默认：扰动后观察 1000 ms，最终连续保持至少 200 ms，相邻采样间隔不超过 250 ms。参数是可修改的演示默认值，不是机器人领域标准。

## 从 MoonBit 源码编译

先按 [MoonBit 官方说明](https://www.moonbitlang.com/download/) 安装工具链，再运行：

```bash
moon check --target js --deny-warn
moon test --target js
moon run --target js cmd/grasp-audit -- examples/synthetic.csv
moon build --target js --release
bash scripts/build-dist.sh
```

完整验证还需要 Python 3（仅测试需要，无第三方包）：

```bash
bash scripts/verify.sh
```

已实际通过：**24 个 MoonBit 单元测试，在 JS 和 Wasm GC 两个后端各跑一次；10 个 CLI 集成测试，其中包含 500 条固定随机种子轨迹与独立 Python 参考实现逐项对照。** 见 [验证记录](docs/VALIDATION.md)。JS 是 CLI 支持的后端；Wasm GC 测试针对可移植分析库。

## 示例输出

合成数据的已运行结果：

| 演示条件 | 完整试次 | 保持 | 恢复 | 未恢复 | 数据不足 |
|---|---:|---:|---:|---:|---:|
| baseline | 3 | 1 | 1 | 1 | 1 |
| feedback | 3 | 1 | 2 | 0 | 1 |

完整报告见 [examples/expected-report.md](examples/expected-report.md)。这些数字只用于验证程序行为，**不能用于论文或比赛材料中的真实实验成绩**。

## 项目结构

```text
analyze.mbt             核心时间窗口与恢复算法
csv.mbt                 严格 CSV 验证
types.mbt / render.mbt  数据类型、汇总报告
analyze_wbtest.mbt      MoonBit 边界测试
cmd/grasp-audit/        CLI 与最小 JS 主机绑定
dist/grasp-audit.cjs    已编译、可直接离线运行的工具
examples/              明确标注的合成输入和预期输出
scripts/               独立对照测试与构建脚本
docs/                  定义、验证、演示/提交说明
```

## 限制与诚信说明

结果依赖输入的 `held` 标注和采样频率，使用采样保持近似，不保证采样之间未发生短暂丢失。数据不足的试次从分母排除，可能引入偏差，必须同时报告数量。恢复时间从扰动时刻起算，到**最终稳定段的起点**，不是从丢失时刻算，也不是第一次短暂恢复。

没有机器人实机验证、仿真控制器、力闭合判定、显著性检验或已训练模型。真实比较需匹配物体、种子、扰动强度、采样方案，并考虑重复试次的相关性。本项目由 AI 辅助开发；提交人应理解、复核并按比赛要求披露辅助工具使用情况。

本包没有创建公开仓库、注册账号或提交比赛。上传 GitHub 的步骤见 [提交说明](docs/SUBMISSION.md)；比赛资格和赛道以官方要求为准。

MIT License。编译产物包含的 MoonBit 标准库许可见 `third_party/`。
