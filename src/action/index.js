import { createStore } from "redux";
import reducer from "../";

export const addClick = tech => ({
  type: 'ADD_TODO',
  tech
})