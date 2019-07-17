const newIdea = (state = 'Nathan', action) => {
  console.log(state)
  console.log(action)
  switch(action.type) {
    case 'ADD_IDEA':
      return [state, action.payload];
    default:
      return state;
  }
}

export default newIdea;