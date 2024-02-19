import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {counterReducer} from "./counter-reducer"
import {thunk} from "redux-thunk"
import {loadState, saveState} from "../utils/localStorage-utils"

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))
store.subscribe(() => {
  saveState(store.getState());
})

// export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>