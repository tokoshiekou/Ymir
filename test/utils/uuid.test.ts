import { createUUID } from '../../src/utils/uuid'
const UUIDReg =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

describe('createUUID', () => {
  const result = createUUID()

  it('should return a string', () => {
    expect(typeof result).toBe('string')
  })
  it('can it create a uuid', () => {
    expect(result).toMatch(UUIDReg)
  })
})
