export const increment = count => ({
  type: 'CHANGE_COUNT',
  payload: count + 1
});

export const decrement = count => ({
  type: 'CHANGE_COUNT',
  payload: count - 1
});
