import { createStore } from "easy-peasy";
import { capsulesModel as capsules, ICapsulesModel } from "./model/capsules";

export interface IStoreModel {
  capsules: ICapsulesModel;
}

export const store = createStore<IStoreModel>(
  { capsules },
  {
    name: "spacex-store-model ",
  }
);
