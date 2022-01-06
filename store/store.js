import { createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import axios from "axios";

async function getUser() {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.getItem("id");
  } else return "hata";
}

const initialLoginUser = {
  userName: "APoles",
  atName: getUser() ? "asd" : "a",
};

const userLogin = function reducer(state = initialLoginUser, action) {
  switch (action.type) {
    case "INC":
      return { ...state, userName: action.payload };
    case "DEC":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
const combineReducer = combineReducers({
  userLogin: userLogin,
});

const initialStore = () => {
  return createStore(combineReducer);
};

export const wrapper = createWrapper(initialStore);
