# use-dirname

Use `__dirname` in ESM modules. That's it.

```ts
import { useDirname } from 'use-dirname'
const __dirname = useDirname(import.meta.url)
```

I don't want to copy and paste this utility function into every project I maintained any more. So I decided to publish this package.

---

> MIT License
>
> Copyright (c) 2024 机智的小鱼君(Dragon-Fish)
