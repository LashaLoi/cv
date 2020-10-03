import React, { useState, useContext, createContext } from "react"

export type Store = {
  offset: number
  setOffset: (offset: number) => void
}

export const StoreContext = createContext<Store>({
  offset: 0,
  setOffset: () => {}
})

export const StoreContextProvider: React.FC = ({ children }) => {
  const [offset, setOffset] = useState(0)

  return (
    <StoreContext.Provider
      value={{
        offset,
        setOffset
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)
