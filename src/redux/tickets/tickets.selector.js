import { createSelector } from "reselect";

const ticketsSelector = (state) => state.ticketsReducer;


export const selectTickets = createSelector(
    [ticketsSelector],
    (ticketsReducer) => ticketsReducer.tickets
);

export const selectTicketImg = createSelector(
    [ticketsSelector],
    (ticketsReducer) => ticketsReducer.ticketImg
);

export const selectSuccess = createSelector(
    [ticketsSelector],
    (ticketsReducer) => ticketsReducer.success
);

export const selectError = createSelector(
    [ticketsSelector],
    (ticketsReducer) => ticketsReducer.error
);