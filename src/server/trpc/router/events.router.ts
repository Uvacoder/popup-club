import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const eventRouter = router({
  getAllEvents: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({
      include: {
        location: true,
        popup: true,
      },
    });
  }),
  getEventsById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.event.findMany({
        where: {
          id: input.id,
        },
        include: {
          location: true,
          popup: true,
        },
      });
    }),
});

// .query('getEvents', {
//     async resolve({ ctx }) {
//       return await ctx.prisma.event.findMany();
//     },
//   })
//   .query('getEventsByLocationID', {
//     input: z.object({
//       locationid: z.string(),
//     }),
//     async resolve({ ctx, input }) {
//       return await ctx.prisma.event.findMany({
//         where: {
//           locationId: input.locationid,
//         },
//         include: {
//           location: true,
//         },
//       });
//     },
//   })
//   .query('getEventByPopupId', {
//     input: z.object({
//       popupid: z.string(),
//     }),
//     async resolve({ ctx, input }) {
//       return await ctx.prisma.event.findMany({
//         where: {
//           popupId: input.popupid,
//         },
//         include: {
//           popup: true,
//           location: true,
//         },
//       });
//     },
//   });
