
import * as ActionTypes from './ActionTypes';

export const Comments = (state = {errMess: null, comments: [] }, action) =>{
    switch(action.type){

        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload}
            
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []}

        case ActionTypes.ADD_COMMENT:
            console.log("ACTION TYPE (ADD_COMMENT) HAS BEEN SELECTED");
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
}