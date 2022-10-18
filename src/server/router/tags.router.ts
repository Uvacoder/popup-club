import { createRouter } from './context';
import { z } from 'zod';

// export const tagsRouter = createRouter().query('getTags', {
//   async resolve({ ctx }) {
//     return await ctx.prisma.tagsOnPopups.findMany();
//   },
// });

//This will return all tags including tag name by id for the given popup id
export const tagsRouter = createRouter().query('getTagsByPopup', {
  input: z.object({
    popupid: z.string(),
  }),
  async resolve({ ctx, input }) {
    return await ctx.prisma.tagsOnPopups.findMany({
      where: {
        popupId: input.popupid,
      },
      include: {
        tag: true,
      },
    });
  },
});

// query('getTagsByPopupId', {
//   input: z.object({
//     popupId: z.string(),
//   }),
//   resolve({ input, ctx }) {
//     return ctx.prisma.tags.findUnique({
//       where: {
//         id: input.popupId,
//       },
//     });
//   },
// })

// query('getTags', {
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
