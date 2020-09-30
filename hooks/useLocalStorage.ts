export const useLocalStorage = () => {
  const getItem = (key: string) => {
    const item = localStorage.getItem(key)
    if (!item) return null

    return item
  }

  const setItem = (key: string, value: string) => localStorage.setItem(key, value)

  return {
    getItem,
    setItem
  }
}
