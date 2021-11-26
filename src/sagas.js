import { call, put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import { GET_ALL_GUEST, POST_REGISTRATION } from "./store/constants/index";
import { getAllGuest, postRegistration } from "./domain/API";
import {
  setGuests,
  setMessages,
  setNewGuest,
  setErrorPost,
} from "./store/actions";

function* doGetAllGuest() {
  try {
    const guestsData = yield call(getAllGuest);
    const messages = guestsData?.guests.filter((item) => {
      return !_.isEmpty(item.message);
    });
    yield put(setMessages(messages.reverse()));
    yield put(setGuests(guestsData.guests));
  } catch (error) {
    console.log(error);
  }
}

function* doPostRegistration({ guestData }) {
  try {
    const newData = yield call(postRegistration, guestData);
    if (newData) {
      yield put(setNewGuest(newData));
    }
  } catch (error) {
    yield put(setErrorPost);
  }
}

export default function* mySaga() {
  yield takeLatest(GET_ALL_GUEST, doGetAllGuest);
  yield takeLatest(POST_REGISTRATION, doPostRegistration);
}
