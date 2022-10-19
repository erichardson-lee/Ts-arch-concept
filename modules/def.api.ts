import { EventDefinition, EventID } from "./EventDefinition.ts";
import { ProcedureDefinition } from "./ProcedureDefinition.ts";

export type ModuleID = string & { moduleId: never };
export const createModuleId = (id: string): ModuleID => <ModuleID>id;

export interface EventListenDefinition {
  module: ModuleID;
  event: EventID;
}

export interface ModuleApiDefinition<
  ID extends ModuleID,
  PDs extends ProcedureDefinition,
  EDs extends EventDefinition,
  ELDs extends EventListenDefinition
> {
  id: ID;

  procedures: PDs[];
  events: EDs[];
  listenTo: ELDs[];
}
