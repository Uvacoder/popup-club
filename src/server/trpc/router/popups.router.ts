import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

//This will return all the popups in the database
export const popupRouter = router({
  getAllPopups: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.popup.findMany({
      include: {
        links: {
          include: {
            popup: true,
          },
        },
        events: {
          include: {
            location: true,
            popup: true,
          },
        },
        tags: {
          include: {
            tag: true,
            popup: true,
          },
        },
      },
    });
  }),
});

// createRouter()
//   .query('getPopups', {
//     async resolve({ ctx }) {
//       return await ctx.prisma.popup.findMany({
//         include: {
//           links: {
//             include: {
//               popup: true,
//             },
//           },
//           events: {
//             include: {
//               location: true,
//               popup: true,
//             },
//           },
//           tags: {
//             include: {
//               tag: true,
//               popup: true,
//             },
//           },
//         },
//       });
//     },
//   })
//   .query('getPopupsById', {
//     input: z.object({
//       id: z.string(),
//     }),
//     async resolve({ ctx, input }) {
//       return await ctx.prisma.popup.findUnique({
//         where: {
//           id: input.id,
//         },
//         include: {
//           links: true,
//           tags: true,
//           events: true,
//         },
//       });
//     },
//   });

// .query('getPopupsByLocationId', {
//   input: z.object({
//     locationId: z.string(),
//   }),
//   async resolve({ ctx, input }) {
//     return await ctx.prisma.popup.findMany({
//       where: {
//         locationId: input.locationId,
//       },
//     });
//   },
// });
