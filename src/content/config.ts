import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema function
  schema: () => {
    const baseUrl = import.meta.env.BASE_URL;

    return z.object({
      title: z.string(),
      description: z.string(),
      author: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Assuming heroImage is a relative URL, prepend it with the baseUrl
      heroImage: z.string().optional().refine((value) => {
        // If heroImage is provided and it starts with the expected prefix
		console.log("Entrando en la función refine");
        if (value && value.startsWith(baseUrl)) {
          return true; // Return true if it meets the validation criteria
        }
        return false; // Otherwise, return false
      }, { message: 'Hero image URL must start with the base URL.' }),
    });
  },
});

export const collections = { blog };