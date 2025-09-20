import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "@/features/favorites/slides/favoritesSlice";
import { createPersistMiddleware, loadState } from "./persistMiddleware";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const persistMiddleware = createPersistMiddleware(["favorites"]);

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState() as Partial<ReturnType<typeof rootReducer>>,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
