import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/index";
import { persistReducer } from "redux-persist";

import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "js-cookie";

const persistConfig = {
  key: "vehicle-rental",
  keyPrefix: "",
  timeout: 100,
  storage: new CookieStorage(Cookies, {
    setCookieOptions: {
      path: "/",
      secure: true,
    },
  }),
  whitelist: ["user", "order"],
};
export let store;
export const persistedReducer = persistReducer(persistConfig, reducers);
function initStore(initialState = {}) {
  if (process.env.NODE_ENV !== "production") {
    store = createStore(
      persistedReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
  } else {
    store = createStore(
      persistedReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
    );
  }
  return store;
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
