import { combineReducers, createStore } from "redux";
import DatVeXemPhimReducer from "./DatVeXemPhimReducer";
import { GameOanXuXiReducer } from "./GameOanXuXiReducer";

const rootReducer = combineReducers({
    GameOanXuXiReducer,
    DatVeXemPhimReducer
})

const store = createStore(rootReducer)

export default store
