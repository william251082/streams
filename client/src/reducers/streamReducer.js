import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload]: action.payload };
        case DELETE_STREAM:
            // on delete, payload is the id itself
            // omit won't change the state oo previous object, it will create a new object with all the props intact
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

// const colors = [
//     { hue: 'green' },
//     { hue: 'yellow' },
//     { hue: 'blue' },
// ];
//
// _.mapKeys(colors, 'hue');
