// actions -> describes what you want
// the reducers to do to state
// e.g update people with this payload

// add people
export function setPeople(people, loading) {
  return {
    type: "setPeople",
    payload: people,
    loading: loading
  };
}

// invalidate people
export function unSetPeople(people) {
  return {
    type: "unSetPeople"
  };
}
