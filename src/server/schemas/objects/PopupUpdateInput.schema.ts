import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagsOnPopupsUpdateManyWithoutPopupNestedInputObjectSchema } from './TagsOnPopupsUpdateManyWithoutPopupNestedInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutPopupNestedInputObjectSchema } from './EventUpdateManyWithoutPopupNestedInput.schema';
import { LinksUpdateManyWithoutPopupNestedInputObjectSchema } from './LinksUpdateManyWithoutPopupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    basedIn: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .lazy(() => TagsOnPopupsUpdateManyWithoutPopupNestedInputObjectSchema)
      .optional(),
    isHot: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    orderType: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    events: z
      .lazy(() => EventUpdateManyWithoutPopupNestedInputObjectSchema)
      .optional(),
    links: z
      .lazy(() => LinksUpdateManyWithoutPopupNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PopupUpdateInputObjectSchema = Schema;
