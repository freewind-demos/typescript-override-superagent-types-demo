TypeScript Override Superagent Types Demo
=========================================

How to override incorrect superagent types.

The solution here is not perfect since it just creating a new type, and we need to use `as` to force type cast.

But it seems no way to modify existing type directly: https://stackoverflow.com/questions/40322788/how-to-overwrite-incorrect-typescript-type-definition-installed-via-types-packa

```
npm install
npm run demo
```

