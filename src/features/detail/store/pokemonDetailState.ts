import { makeVar } from "@apollo/client";

export const pokemonTypesVar = makeVar<Array<string> | null>(null);
