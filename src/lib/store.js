// import { configureStore } from '@redux/toolkit';
// export const store = configureStore({
//     reducer: {}
// })

import counterSlice from "@/features/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
export const makeStore = () => {
    return configureStore({
        reducer: {

        }
    })
}