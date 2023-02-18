import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { PayloadAction } from "@redux/toolkit/dist/createAction";


interface userData {
    name: string;
    email: string;
    password: string;
}

const initialState = {
    currentUser: {} || null,
}

const ReduxState = createSlice({
    name: "ecommerce",
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<userData>) => {
            state.currentUser = payload
        }
    }
})

export const { login } = ReduxState.actions;

export default ReduxState.reducer
