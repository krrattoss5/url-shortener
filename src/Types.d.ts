export type Urls = {
  url: string
  userID: number
  name: string
  domain:string
  clicks:number
  shortUrl: string
  createdAt: string
  id:number
  linkCountries: LinkCountries[]
}

export type User = {
  name: string,
  lastname: string
  email: string
  username: string
  createdAt: string
  id: number
  links: Urls[]
  countries: Country[]
}

export type LinkCountries = {
  id: number
  linkId: number
  countryId: number
  visits: number
}

export type Country = {
  id: number
  name: string
}

export type Data = {
  name: string
  value: number
}
