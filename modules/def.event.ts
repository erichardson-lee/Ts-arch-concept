import { Static, TSchema } from "https://deno.land/x/typebox/src/typebox.ts";

export type EventID = string & { eventId: never };
export const createEventId = (id: string): EventID => <EventID>id;

export interface EventDefinition<
  ID extends EventID = EventID,
  EventInfoSchema extends TSchema = TSchema
> {
  id: ID;
  eventInfoSchema: EventInfoSchema;
}

export type EventHandler<Def> = Def extends EventDefinition<
  infer _,
  infer EventInfoSchema
>
  ? (dto: Static<EventInfoSchema>) => void
  : never;
