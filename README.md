# 🗂️ @robert.tools/log

A package to provide tools for logging

## 📜 Usage

### 🟢 Installation

```bash
npm install @robert.tools/log
```

### 📝 Sample usage

```typescript
import { LOG } from '@robert.tools/log';

LOG.OK('hello'); // 'log: hello'
```

## 🗃️ commands

After an npm install with `npm i` the following commands are available:

* log wrapper: `LOG.OK('message'), LOG.FAIL('message')`
* colorize logs: `colorize('message', colors.bgBlack, colors.fgGreen)`
* get info about calling fn: `getCallerInfo()`
* create logging items:

```typescript
const logs = new _LOG();
logs.OK('message'); // 'log: message'
logs.getItems(); // returns all logged items
```

## ⚖️ Notes

This software is hand-crafted, test-driven and assisted by AI tools. I know each
line of my code. ✌️

| Tool | Comment |
| --- | --- |
| ![assisted by Jest](https://img.shields.io/badge/Jest-TDD-008800?logo=jest) | Test-driven development with Jest |
| ![assisted by robert.tools](https://img.shields.io/badge/robert.tools-ecosystem-008800) | Part of the robert.tools ecosystem |
| ![assisted by GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-assisted-8A2BE2?logo=githubcopilot) | Code completion |
| ![assisted by OpenAI](https://img.shields.io/badge/OpenAI-assisted-8A2BE2?logo=openai) | chatGPT research |
