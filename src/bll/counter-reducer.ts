type StateType = typeof initialState
const initialState = {
  value: 0
}
export const counterReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'INC-VALUE':
      return {...state, value: state.value+1}
    case 'SET-VALUE-FROM-LOCAL-STORAGE':
      return {...state, value: action.value}
    default:
      return state
  }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)
export type IncValueACType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>
export type ActionType = IncValueACType | SetValueFromLocalStorageACType