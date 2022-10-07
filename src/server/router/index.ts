// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';
import { popupRouter } from './popups';
import { eventRouter } from './events';
import { locationRouter } from './locations';
import { tagsRouter } from './tags';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('question.', protectedExampleRouter)
  .merge('popup.', popupRouter)
  .merge('event.', eventRouter)
  .merge('location.', locationRouter)
  .merge('tags.', tagsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
