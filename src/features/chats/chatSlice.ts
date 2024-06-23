import {createSlice} from '@reduxjs/toolkit';
interface ChatState extends Chat {}

interface Chat {
    id: string;
    title: string;
    messages: message[]
    // Define your state properties here
}


interface message {
    sender: string;
    message: string;
}

interface ChatState extends Chat {}

const initialState: ChatState = {
    id: '',
    title: '',
    messages: [],
};


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        // Define your reducers here
    }
});