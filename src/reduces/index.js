export default function reducer(state = [], action) {
  return [
    ...state,
    {
      name: action.tech
    }
  ]
}