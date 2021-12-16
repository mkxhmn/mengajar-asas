import { Action, action, ActionOn, actionOn } from "easy-peasy";
import { ISpaceXResponse } from "@/src/hooks/useCapsules";

export interface ICapsulesModel {
  favorites: ISpaceXResponse[];
  lastUpdated: string;
  setFavorite: Action<ICapsulesModel, ISpaceXResponse>;
  onSetFavorite: ActionOn<ICapsulesModel>;
}

export const capsulesModel: ICapsulesModel = {
  favorites: [],
  lastUpdated: "",

  setFavorite: action((state, payload) => {
    state.favorites.push(payload);
  }),

  onSetFavorite: actionOn(
    (actions) => actions.setFavorite,
    (state) => {
      state.lastUpdated = new Date().toDateString();
    }
  ),
};
