import { createRouter } from './context';
import { z } from 'zod';

export const popupRouter = createRouter().query('getPopups', {
  async resolve({ ctx }) {
    return await ctx.prisma.popup.findMany();
  },
});
