import ADD_TICKET_ACTION_TYPES from "./tickets.action-types";

// FETCH TICKETS
export const startFetchTickets = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.START_FETCH_TICKETS,
    payload: data,
});


export const successFetchTickets = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.SUCCESS_FETCH_TICKETS,
    payload: data,
});

// ADD TICKET 
export const startAddTicket = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.START_ADD_TICKET,
    payload: data,
});


export const successAddTicket = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.SUCCESS_ADD_TICKET,
    payload: data,
});

// ADD TICKET IMG 
export const startUploadTicketImg = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.START_UPLOAD_TICKET_IMG,
    payload: data,
});


export const successUploadTicketImg = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.SUCCESS_UPLOAD_TICKET_IMG,
    payload: data,
});

// ERROR SUCCESS
export const setSuccess = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.SET_SUCCESS,
    payload: data,
});


export const setError = (data) => ({
    type: ADD_TICKET_ACTION_TYPES.SET_ERROR,
    payload: data,
});