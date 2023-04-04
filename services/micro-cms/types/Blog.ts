
export type Blog = {
  category:  Category[]
  content: string
  createdAt: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

export type Category =  {
  createdAt: string
  id: string
  name: string
  publishedAt: string
  revisedAt: string
  updatedAt: string
}
