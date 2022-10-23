import { createRouter } from './context';
import { z } from 'zod';

export const eventRouter = createRouter()
  .query('getEvents', {
    async resolve({ ctx }) {
      return await ctx.prisma.event.findMany();
    },
  })
  .query('getEventsByLocationID', {
    input: z.object({
      locationid: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.event.findMany({
        where: {
          locationId: input.locationid,
        },
        include: {
          location: true,
        },
      });
    },
  })
  .query('getEventByPopupId', {
    input: z.object({
      popupid: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.event.findMany({
        where: {
          popupId: input.popupid,
        },
        include: {
          popup: true,
          location: true,
        },
      });
    },
  });
