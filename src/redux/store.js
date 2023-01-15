import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
// const stripe = require('stripe')('sk_test_51MQSY1SDnEPTQqe07uc0Oc66C8O27ZjWPHVlRl0TRMjWOSh4xzHSQMtBPfoYLGEngJCIxUJPkunA5frIArm1Gaxa00WUqR841N');
const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({

    reducer: {

        cart: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)