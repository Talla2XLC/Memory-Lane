const initialState = {
	user: "unknown user",
}

export default function userInfo(state = initialState, action) {
	switch (action.type) {
		case "SET_USER":
			return {...state, user: action.payload}
		default:
			return state;
	}
}