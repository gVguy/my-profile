import { expect, describe, it, beforeEach, afterEach, vi, assert } from 'vitest'
import { sleep } from './sleep'

describe('sleep', async () => {

  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('resolves after time', async () => {
    const sleepTime = 2222
    const dateBefore = Date.now()
    const sleepPromise = sleep(sleepTime)
    vi.runAllTimers() // speed up the test
    await sleepPromise
    const dateAfter = Date.now()
    const timePassed = dateAfter - dateBefore
    expect(timePassed).toEqual(sleepTime)
  })

})
