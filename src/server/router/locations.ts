import { createRouter } from './context';
import { z } from 'zod';

export const locationRouter = createRouter().query('getLocations', {
  async resolve({ ctx }) {
    return await ctx.prisma.location.findMany();
  },
});
