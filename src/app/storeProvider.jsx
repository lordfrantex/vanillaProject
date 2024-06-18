'use client'

import counterSlice from "@/lib/features/counter/counterSlice"

const { makeStore } = require("@/lib/store")
const { useRef } = require("react")
const { Provider } = require("react-redux")
counterSlice

export default function storeProvider({ count, children }) {
    const storeRef = useRef()
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(counterSlice(count))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}