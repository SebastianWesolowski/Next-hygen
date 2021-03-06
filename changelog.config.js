module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: ["feat", "fix", "clean", "style", "refactor", "perf", "ci", "config", "chore", "docs", "test", "breaking"],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "scope", "subject", "body", "breaking", "issues", "lerna"],
  scopes: [],
  types: {
    chore: {
      description: "Build process or auxiliary tool changes",
      emoji: "๐ง",
      value: "chore",
    },
    ci: {
      description: "CI related changes",
      emoji: "๐ก",
      value: "ci",
    },
    clean: {
      description: "Sorting or cleaning out the code",
      emoji: "๐งน",
      value: "clean",
    },
    docs: {
      description: "Documentation only changes",
      emoji: "๐๏ธ",
      value: "docs",
    },
    feat: {
      description: "A new feature",
      emoji: "โจ",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      emoji: "๐",
      value: "fix",
    },
    perf: {
      description: "A code change that improves performance",
      emoji: "โก๏ธ",
      value: "perf",
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      emoji: "โป๏ธ",
      value: "refactor",
    },
    release: {
      description: "Create a release commit",
      emoji: "๐",
      value: "release",
    },
    style: {
      description: "Markup, white-space, formatting, missing semi-colons...",
      emoji: "๐จ",
      value: "style",
    },
    test: {
      description: "Adding missing tests",
      emoji: "๐จ",
      value: "test",
    },
    breaking: {
      description: "Introducing breaking changes.",
      emoji: "๐ฅ",
      value: "breaking",
    },
    config: {
      description: "Changing configuration files.",
      emoji: "โ๏ธ",
      value: "config",
    },
  },
};
