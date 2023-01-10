// import { createStore } from "redux";
import {createStore} from "react-redux"
const redux = require("redux");

const counterReducer = (state,action) =>
{
return{
    counter: state.counter + 1
}
}
const store = redux.createStore(counterReducer);
console.log(store.getState());

const counterSubscriber = () =>
{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type:"increment"})
