export type user = {
  email: string,
  name: string,
  photo?: string | null
}

export type JWTPayload = {
  userId: string,
  email: string
}
