import { meta as post1 } from '../posts/fremont-street-experience-guide'
import { meta as post2 } from '../posts/slotzilla-zipline-review'
import { meta as post3 } from '../posts/best-bars-fremont-street'
import { meta as post4 } from '../posts/fremont-street-vs-the-strip'
import { meta as post5 } from '../posts/things-to-do-downtown-las-vegas'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  image: string
  category: string
  ctaUrl?: string
  ctaText?: string
}

export const posts: PostMeta[] = [post1, post2, post3, post4, post5]
