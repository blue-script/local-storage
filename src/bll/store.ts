import {combineReducers, legacy_createStore} from "redux"
import {counterReducer} from "./counter-reducer"

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = legacy_createStore(rootReducer)
export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>