import ADD_TICKET_ACTION_TYPES from "./tickets.action-types";

const INITIAL_STATE = {
    error: undefined,
    success: null,
    tickets: [],
    ticketImg: ""
};

const ticketsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TICKET_ACTION_TYPES.SUCCESS_FETCH_TICKETS:
            return {
                ...state,
                tickets: action.payload,
            };
        case ADD_TICKET_ACTION_TYPES.SUCCESS_ADD_TICKET:
            return {
                ...state,
                tickets: [...state.tickets, action.payload],
            };
        case ADD_TICKET_ACTION_TYPES.SUCCESS_UPLOAD_TICKET_IMG:
            return {
                ...state,
                ticketImg: action.payload,
            };
        case ADD_TICKET_ACTION_TYPES.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_TICKET_ACTION_TYPES.SET_SUCCESS:
            return {
                ...state,
                success: action.payload,
            };
        default:
            return state;
    }
};

export default ticketsReducer;