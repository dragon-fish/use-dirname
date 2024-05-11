# use-dirname

Use `__dirname` in ESM modules. That's it.

```ts
import { useDirname } from 'use-dirname'
const __dirname = useDirname(import.meta.url)
```

Tired of pasting this function into every project I've worked on, I've decided it's time to package it and put it on. Then it will never take me that long.

## Unit Test (?)

**💥100% coverage💥**

```bash
pnpm test
```

Honestly, this test is somewhat absurd, true. But in the world of code, it's better than including no test, too.

---

> MIT License
>
> Copyright (c) 2024 机智的小鱼君(Dragon-Fish)
