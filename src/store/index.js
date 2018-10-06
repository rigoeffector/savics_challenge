/*
 * File: index.js
 * Project: test_one
 * Created Date: Saturday, October 6th 2018, 6:00:01 pm
 * Author: tbuglc
 * -----
 * Last Modified: Date: Saturday, October 6th 2018, 6:11:50 pm
 * Modified By: tbuglc
 * -----
 * Copyright (c) 2017 Pesachoice LLC
 * 
 */


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from '../reducers';



const middlewware = applyMiddleware(thunk, apiMiddleware);

const storeConfig = (initialState) => createStore(reducers, initialState, middlewware);



export default storeConfig;
