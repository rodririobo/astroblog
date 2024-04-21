import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema function
  schema: () => {
    var baseUrl : string = import.meta.env.BASE_URL;
      if(baseUrl==='/') {baseUrl=''}
    return z.object({
      title: z.string(),
      description: z.string(),
      author: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Assuming heroImage is a relative URL, prepend it with the baseUrl
      heroImage: z.string().optional().transform(value => {
        // Concatenar la baseUrl con la ruta relativa de la imagen si heroImage está definida
        
        return value ? baseUrl + value : undefined;
      }),
    });
  },
});

export const collections = { blog };