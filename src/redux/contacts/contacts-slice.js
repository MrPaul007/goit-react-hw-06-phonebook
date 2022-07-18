import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import initialContacts from "../../data/initialContacts";

const initialState = {
        items: initialContacts,
        filter: "",
}

const contacts = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        add: {
            reducer: (store, { payload }) => {
                store.items.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: { ...data, id: nanoid() }
                }
            },
        },
        remove: (store, { payload }) => {
            store.items = store.items.filter(item => item.id !== payload)
        },
        changeFilter: (store, {payload}) => {
            store.filter = payload;
        }
    }
});

export const {add, remove, changeFilter} = contacts.actions;

export default contacts.reducer;