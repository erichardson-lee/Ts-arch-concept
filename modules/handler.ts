import { Type } from "https://deno.land/x/typebox/src/typebox.ts";
import { ProcedureHandler } from "./def.procedure.ts";
import {
  ModuleID,
  EventListenDefinition,
  ModuleApiDefinition,
  EventDefinition,
  ProcedureDefinition,
  createProcedureId,
} from "./index.ts";

type ProcedureHandlerMap<Values extends ProcedureDefinition> = {
  [key in Values as key["id"]]: ProcedureHandler<key>;
};

//TODO: Continue Handler Implementation (Fix the handler map)

export abstract class Handler<
  ID extends ModuleID,
  PDs extends ProcedureDefinition,
  EDs extends EventDefinition,
  ELDs extends EventListenDefinition,
  ModuleDefinition extends ModuleApiDefinition<ID, PDs, EDs, ELDs>
> {
  private procedureHandlers: {
    [k in PDs as k["id"]]: ProcedureHandler<k> | undefined;
  } = {};

  constructor(private readonly definition: ModuleDefinition) {}

  addProcedureHandler<PD extends PDs>(
    procedure: PD["id"],
    handler: ProcedureHandler<PD>
  ): void {
    this.procedureHandlers[procedure] = handler;
  }
}
