import { v4 as uuidv4 } from 'uuid'

export const createUUID = (): string => {
  const uuid = uuidv4()
  return uuid
}
