import { CategoriesActionType } from './Categories/types';
import { LoginActionType } from './Auth/types';

export type AppActionType = CategoriesActionType | LoginActionType;
