import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { typeSlice } from './features/Types.Slice';
import typeReducer from './features/Types.Slice'
import brandReducer from './features/Brands.Slice'
import productReducer from './features/Device.Slice'
import basketReducer from './features/Basket.Slice'
import rangeReducer from './features/PriceRange'




const rootReducer = combineReducers({
  typeReducer,
  brandReducer,
  productReducer,
  basketReducer,
  rangeReducer,

   
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']
