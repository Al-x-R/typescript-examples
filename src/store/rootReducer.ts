// Core
import { combineReducers } from 'redux';

// Reducers
import { starshipsReducer as starships } from '../bus/starships/reducer';

export const rootReducer = combineReducers({
  starships,
});

// Тип состояния редакса, для useSelector чтоб он понимал что должно быть в состоянии
export type AppState = ReturnType<typeof rootReducer>;
