import {combineReducers} from "redux";
import {HOBBY_SELECTOR_FEATURE_KEY, hobbySelectReducer} from "./hobbySelector/hobbySelector.reducer";


let rootReducer = combineReducers({
    [HOBBY_SELECTOR_FEATURE_KEY] : hobbySelectReducer,
    /*[CUSTOMER_FEATURE_KEY] : customerListReducer*/
});

export {rootReducer};
