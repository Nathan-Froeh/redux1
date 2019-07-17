export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}

export const addIdea = idea => {
  return {
    type: 'ADD_IDEA',
    payload: idea
  }
}