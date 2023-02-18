import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import myReducer from "./ReduxState";


export const store = configureStore({
    reducer: {
        myReducer,
    }
});

// define your dispatch and selector

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// export const useAppSelector : ReturnType<typeof store.getState> = useSelector