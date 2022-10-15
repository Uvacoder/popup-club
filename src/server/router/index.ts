import { createRouter } from "./helpers/createRouter";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { verificationtokensRouter } from "./VerificationToken.router";
import { popupsRouter } from "./Popup.router";
import { linksRouter } from "./Links.router";
import { eventsRouter } from "./Event.router";
import { locationsRouter } from "./Location.router";
import { tagsRouter } from "./Tags.router";
import { tagsonpopupsRouter } from "./TagsOnPopups.router";

export const appRouter = createRouter()

  .merge('account.', accountsRouter)

  .merge('session.', sessionsRouter)

  .merge('user.', usersRouter)

  .merge('verificationtoken.', verificationtokensRouter)

  .merge('popup.', popupsRouter)

  .merge('links.', linksRouter)

  .merge('event.', eventsRouter)

  .merge('location.', locationsRouter)

  .merge('tags.', tagsRouter)

  .merge('tagsonpopups.', tagsonpopupsRouter)
