import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest'
import { fakeFetch } from './fakeFetch'

describe('fake fetch', async () => {

  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns a response with the same body as was passed', async () => {
    const body = {
      value: 123
    }
    const fetchPromise = fakeFetch('/url/does/not/matter', {
      body: JSON.stringify(body)
    })
    vi.runAllTimers() // speed up the test
    const response = await fetchPromise
    const data = await response.json()
    expect(data).toEqual(body)
  })

})
