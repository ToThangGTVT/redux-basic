import { createStore } from "redux";
import reducer from "../reduces";

export const store = createStore(reducer);
export default store;