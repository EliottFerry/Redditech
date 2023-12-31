module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "blacklist": null,
      "whitelist": null,
      "safe": true,
      "allowUndefined": true,
      "verbose": false,
      "loose": true,
    }]
  ]
};