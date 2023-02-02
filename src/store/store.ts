import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { typeSlice } from './features/Types.Slice';
import typeReducer from './features/Types.Slice'



const rootReducer = combineReducers({
  typeReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']
