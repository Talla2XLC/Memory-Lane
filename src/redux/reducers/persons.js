const initialState = {
  loading: true,
  persons: [],
  error: null,
};

export default function personsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PERSONS_DATA_STARTED":
      return {
        ...state,
        loading: true,
        persons: [],
      };
    case "GET_PERSONS_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        persons: action.payload,
      };
    case "GET_PERSONS_DATA_FAILED":
      return {
        ...state,
        error: action.payload.error,
      };
    case "ADD_PERSON":
      return {
        ...state,
        lastName: action.lastName,
        firstName: action.firstName,
        patronymic: action.patronymic,
        gender: action.gender,
        roleInFamily: action.roleInFamily,
        city: action.city,
      };
    default:
      return state;
  }
}
