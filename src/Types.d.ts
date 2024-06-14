export type Urls = {
  name: string
  url: string
  shortUrl: string
  createdAt: string
  clicks:number
  domain:string
  id:number
}

export type User = {
  name: string,
  lastname: string
  email: string
  username: string
  createdAt: string
  id: number
  links: Urls[]
}
