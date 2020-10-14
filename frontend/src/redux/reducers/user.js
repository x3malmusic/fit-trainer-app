const initialState = {
  email: '',
  workouts: [],
  exercises: [],
  emailConfirmed: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        email: action.payload.email,
        workouts: action.payload.workouts,
        exercises: action.payload.exercises,
        emailConfirmed: action.payload.emailConfirmed,
        token: action.payload.token
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "NEW_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    default:
      return state;
  }
};