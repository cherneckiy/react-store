export const removeItem = id => item => id !== item.id

export const updateItem = newItem => item => item.id === newItem.id ? newItem : item
