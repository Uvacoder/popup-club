import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const linksRouter = router({
  getAllLinks: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.links.findMany();
  }),
  getLinksByPopup: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      const links = ctx.prisma.links.findUnique({
        where: {
          id: input.id,
        },
        // include: {
        //   popup: true,
        // },
      });
      if (!links) {
        throw new Error('No links found');
      }
      return links;
    }),
});

// export const linksRouter = createRouter()
//   .query('getLinks', {
//     async resolve({ ctx }) {
//       return await ctx.prisma.links.findMany();
//     },
//   })
// .query('getLinksByPopup', {
//   input: z.object({
//     popupId: z.string(),
//   }),
//   async resolve({ ctx, input }) {
//     return await ctx.prisma.links.findMany({
//       where: {
//         popupId: input.popupId,
//       },
//     });
//   },
// });
