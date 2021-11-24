import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_GUEST } from "./store/constants/index";
import { getAllGuest } from "./domain/API";
import { setGuests } from "./store/actions";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* helloWorld(action) {
//   try {
//     const fetchData = yield call(getAllGallery);
//     yield put(receiveHelloWorld("hello world saga"));
//   } catch (e) {
//     yield put({ type: "USER_FETCH_FAILED", message: e.message });
//   }
// }

function* doGetAllGuest() {
  try {
    const guests = yield call(getAllGuest);
    yield put(setGuests(guests));
  } catch (error) {
    console.log(error);
  }
}

// function* submitContact({ value }) {
//   const {
//     name,
//     email,
//     message,
//     subject,
//     phone,
//     resetForm,
//     showSuccessNotif,
//     showErrorNotif,
//   } = value;
//   try {
//     const formValue = {
//       name,
//       email,
//       message,
//       subject,
//       phone,
//     };
//     const response = yield call(postContact, formValue);
//     showSuccessNotif();
//     resetForm();
//   } catch (error) {
//     showErrorNotif();
//     console.log(error);
//   }
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  // yield takeLatest(HELLO_WORLD, helloWorld);
  // yield takeLatest(POST_CONTACT, submitContact);
  yield takeLatest(GET_ALL_GUEST, doGetAllGuest);
}

// export default mySaga;
