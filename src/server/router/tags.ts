import { createRouter } from './context';
import { z } from 'zod';

//This will return all tags for the given popup id
export const tagsRouter = createRouter().query('getTags', {
  input: z.object({
    popupId: z.string(),
  }),
  resolve({ input, ctx }) {
    return ctx.prisma.tags.findUnique({
      where: {
        id: input.popupId,
      },
    });
  },
});

// .query('getTags', {
//   input: z.object({
//     popupId: z.string(),
//   }),
//   async resolve({ input: { popupId } }) {
//     const tags = await prisma?.popup
//       .findUnique({
//         where: {
//           id: popupId,
//         },
//       })
//       .tags();
//     return tags;
//   },
// });
