import { z, defineCollection } from 'astro:content'

const musicCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pochette: z.string().url(),
    link : z.string().url()
  })
})


export const collections = {
  electro : musicCollection,
 
}