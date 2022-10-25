import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

//This will return all the popups in the database

export const popupRouter = router({
  getAllPopups: publicProcedure.query(async ({ ctx }) => {
    const popups = await ctx.prisma.popup.findMany({
      include: {
        links: true,
        events: {
          include: {
            location: true,
          },
          orderBy: {
            date: 'asc',
          },
        },
        tags: {
          include: {
            tag: true,
          },
          orderBy: {
            tag: {
              name: 'asc',
            },
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
    if (!popups) throw new Error('No popups found');
    return popups;
  }),
});

// export const popupRouter = router({
//   getAllPopups: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.popup.findMany({
//       include: {
//         links: {
//           include: {
//             popup: true,
//           },
//         },
//         events: {
//           include: {
//             location: true,
//           },
//         },
//         tags: {
//           include: {
//             tag: true,
//           },
//         },
//       },
//     });
//   }),
// });
