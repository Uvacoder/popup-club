import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

//This will return all tags including tag name and tag id
export const tagsRouter = router({
  getAllTags: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tagsOnPopups.findMany({
      include: {
        tag: true,
      },
    });
  }),
  getTagsByPopupId: publicProcedure
    .input(
      z.object({
        popupId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.tagsOnPopups.findMany({
        where: {
          popupId: input.popupId,
        },
        include: {
          tag: true,
        },
      });
    }),
});

//This will return all tags including tag name by id for the given popup id
// = createRouter().query('getTagsByPopup', {
//   input: z.object({
//     popupid: z.string(),
//   }),
//   async resolve({ ctx, input }) {
//     return await ctx.prisma.tagsOnPopups.findMany({
//       where: {
//         popupId: input.popupid,
//       },
//       include: {
//         tag: true,
//       },
//     });
//   },
// });
