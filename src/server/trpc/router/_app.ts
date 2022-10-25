// src/server/router/index.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { popupRouter } from './popups.router';
import { eventRouter } from './events.router';
import { locationRouter } from './locations.router';
import { tagsRouter } from './tags.router';
import { linksRouter } from './links.router';
import { router } from '../trpc';

export const appRouter = router({
  popups: popupRouter,
  events: eventRouter,
  // locations: locationRouter,
  tags: tagsRouter,
  links: linksRouter,
});

// export const appRouter = router({
//   popup: popupRouter,
//   event: eventRouter,
//   location: locationRouter,
//   tag: tagsRouter,
//   link: linksRouter,
// });

// export type definition of API
export type AppRouter = typeof appRouter;
