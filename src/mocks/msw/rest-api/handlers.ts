import { pokemonApiHandlers } from "@/mocks/msw/rest-api/pokemonApi/handlers/pokemonApiHandlers";
import { timeApiHandlers } from "@/mocks/msw/rest-api/timeApi/handlers/timeApiHandlers";

export const handlers = [...timeApiHandlers, ...pokemonApiHandlers];
