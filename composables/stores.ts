export function useAuth() {
  return useState<Auth|null>('auth', () => null)
}
export type Auth = {
  user: string
  password: string
}

export function useSpaceEffectSpeed() {
  return useState<'normal'|'fast'>('spaceEffectSpeed', () => 'normal')
}
