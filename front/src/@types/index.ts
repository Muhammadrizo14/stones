export type ProjectT = { img: HTMLImageElement, name: string, link: string }
export type ProductT = {
  img: string,
  title: string,
  type: string,
}

export type PortfolioT = {
  id: number,
  title: string,
  info: string,
  link: string,
  uploadedFile: { id: number }[]
}

export interface BlogT {
  title: string,
  uploadedFile: { id: string }[],
  id: number,
  link: "",
  createdAt: string
}

export type StoneT = {
  title: string,
  abrasion: string,
  uploadedFile: { id: number }[],
  categoryTitle: string,
  country: string,
  id: number,
  variants: { format: string, pricerub: string, priceusd: string, product: string }[],
  createdAt: string,
  color: 'string'
}

export type ServiceT = {
  id: number,
  title: string,
  info: string,
  interorekster: string,
  serviceTitle: string,
  uploadedFile: { id: number }[]
}


export interface uploadedFile {
  id: number,
  fieldname: string,
  originalname: string,
  encoding: string,
  mimetype: string,
  destination: string,
  filename: string,
  nameMini: string,
  path: string,
  size: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: null,
  servicesId: number | null,
  teamId: number | null,
  blogId: number | null,
}