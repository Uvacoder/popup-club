// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';
import { popupRouter } from './popups.router';
import { eventRouter } from './events.router';
import { locationRouter } from './locations.router';
import { tagsRouter } from './tags.router';
import { linksRouter } from './links.router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('question.', protectedExampleRouter)
  .merge('popup.', popupRouter)
  .merge('event.', eventRouter)
  .merge('location.', locationRouter)
  .merge('tags.', tagsRouter)
  .merge('links.', linksRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
