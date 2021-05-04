import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import ADD_TICKET_ACTION_TYPES from "./tickets.action-types";
import {
    successAddTicket,
    successUploadTicketImg,
    setSuccess,
    setError,
    successFetchTickets
} from "./tickets.actions";

// FETCH TICKETS
export function* handleFetchTicketsAsync() {
    yield takeLatest(
        ADD_TICKET_ACTION_TYPES.START_FETCH_TICKETS,
        handleFetchTickets
    );
}

export function* handleFetchTickets(action) {
    try {
        let data = yield axios({
            url: "api/v1/all/ticket",
            method: "GET"
        });

        yield put(successFetchTickets(data.data.data));
        action.payload(false);
    } catch (error) {
        action.payload(false);
        console.log(error);
    }
}

// ADD TICKET
export function* handleAddTicketAsync() {
    yield takeLatest(
        ADD_TICKET_ACTION_TYPES.START_ADD_TICKET,
        handleAddTicket
    );
}

export function* handleAddTicket(action) {
    console.log('payment add')
    try {
        let data = yield axios({
            url: "api/v1/create/ticket",
            method: "POST",
            data: action.payload,
        });
        yield put(setSuccess(true));
        yield put(successAddTicket(action.payload));
    } catch (error) {
        yield put(setError(true));
        console.log(error);
    }
}


// UPLOAD TICKET IMG
export function* handleUploadTickImgAsync() {
    yield takeLatest(
        ADD_TICKET_ACTION_TYPES.START_UPLOAD_TICKET_IMG,
        handleUploadTickImg
    );
}

export function* handleUploadTickImg(action) {
    var formData = new FormData();
    formData.append("photo", action.payload.originFileObj);
    try {
        let data = yield axios({
            url: "api/v1/ticket/upload",
            method: "POST",
            data: formData,
        });
        yield put(successUploadTicketImg(data.data.data));
    } catch (error) {
        console.log(error);
    }
}