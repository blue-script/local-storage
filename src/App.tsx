import React from "react"
import "./App.css"
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "./bll/store"
import {Dispatch} from "redux"
import {incValueAC} from "./bll/counter-reducer"

function App() {
  const value = useSelector<AppStateType, number>(state => state.counter.value)
const dispatch: Dispatch = useDispatch()

  const incHandler = () => {
    dispatch(incValueAC())
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>
    </div>
  )
}

export default App
