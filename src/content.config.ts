import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: () => {
    const baseUrl: string = import.meta.env.BASE_URL;

    return z.object({
      title: z.string(),
      description: z.string(),
      author: z.string().optional(),
      pubDate: z.coerce.date(),
      category: z.string().optional(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional().transform(value => {
        return value ? baseUrl + value : undefined;
      }),
    });
  },
});

export const collections = { blog };
