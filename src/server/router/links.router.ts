import { createRouter } from './context';
import { z } from 'zod';

export const linksRouter = createRouter()
  .query('getLinks', {
    async resolve({ ctx }) {
      return await ctx.prisma.links.findMany();
    },
  })
  .query('getLinksByPopup', {
    input: z.object({
      popupId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.links.findMany({
        where: {
          popupId: input.popupId,
        },
      });
    },
  });
