import React from 'react'

type PersistState = {
  searchText: string | null
}

type PersistActions = {
  setState: (key: string, value: string) => void
  clearState: () => void
}

type PersistContextType = {
  state: PersistState
  actions: PersistActions
}

type Props = {children: React.ReactNode}

export const PersistContext = React.createContext<PersistContextType>(
  {} as PersistContextType
)

const initialState: PersistState = {
    searchText: null,
}

const PersistContextProvider = ({children}: Props) => {
  const [state, setState] = React.useState<PersistState>({...initialState})

  // eslint-disable-next-line
  const actions: PersistActions = {
    setState: (key, value) => setState({...state, [key]: value}),
    clearState: () => setState(initialState)
  }

  const value = React.useMemo(() => ({state, actions}), [state, actions])

  return <PersistContext.Provider value={value}>{children}</PersistContext.Provider>
}

export default PersistContextProvider
