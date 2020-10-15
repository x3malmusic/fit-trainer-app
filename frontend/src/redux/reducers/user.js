const initialState = {
  email: '',
  userId: '',
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
        userId: action.payload.userId
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case "UPDATE_EXERCISE":
      return {
        ...state,
        exercises: [...action.payload],
      };
    default:
      return state;
  }
};