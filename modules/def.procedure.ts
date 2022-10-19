import { Static, TSchema } from "https://deno.land/x/typebox/src/typebox.ts";

export type ProcedureID = string & { procedureId: never };
export const createProcedureId = (id: string): ProcedureID => <ProcedureID>id;

export interface ProcedureDefinition<
  ID extends ProcedureID = ProcedureID,
  ParameterSchema extends TSchema = TSchema,
  ReturnSchema extends TSchema = TSchema
> {
  id: ID;
  parameterSchema: ParameterSchema;
  returnSchema: ReturnSchema;
}

export type ProcedureHandler<Def> = Def extends ProcedureDefinition<
  infer _,
  infer ParameterSchema,
  infer ReturnSchema
>
  ? (dto: Static<ParameterSchema>) => Static<ReturnSchema>
  : never;
