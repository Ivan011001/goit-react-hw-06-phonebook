import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 1, name: 'John Smith', tel: '+380501234567' },
  { id: 2, name: 'Jane Doe', tel: '+380631234567' },
  { id: 3, name: 'Michael Johnson', tel: '+380931234567' },
  { id: 4, name: 'Emma Wilson', tel: '+380661234567' },
  { id: 5, name: 'Olivia Davis', tel: '+380981234567' },
  { id: 6, name: 'James Brown', tel: '+380671234567' },
  { id: 7, name: 'Sophia Taylor', tel: '+380911234567' },
  { id: 8, name: 'William Anderson', tel: '+380681234567' },
  { id: 9, name: 'Isabella White', tel: '+380731234567' },
  { id: 10, name: 'Liam Jackson', tel: '+380921234567' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare: (name, tel) => ({ payload: { id: nanoid(), name, tel } }),
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
