import { combineReducers } from "@reduxjs/toolkit";

import contacts from "./contacts/contacts-slice";

const rootReducer = combineReducers({
    contacts: contacts,
})

export default rootReducer;