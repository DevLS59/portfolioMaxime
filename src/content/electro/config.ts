import { z, defineCollection } from 'astro:content'

const electroCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    role: z.string(),
    link :z.string()
  })
})


export const collections = {
  electro : electroCollection,
 
}