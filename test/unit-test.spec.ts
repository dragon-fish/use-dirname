import { describe, it, expect } from 'vitest'
import { useDirname } from '../src/index.js'
import { resolve } from 'node:path'

describe('Unit test', () => {
  it('Should be the same', () => {
    const pwd = process.cwd()
    const shouldBe = resolve(pwd, 'test/foo/bar')
    const __dirname = useDirname(import.meta.url)
    const dirname = resolve(__dirname)
    expect(dirname).toBe(shouldBe)
  })
})
