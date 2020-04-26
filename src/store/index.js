// import { createStore } from 'redux';

// const INITIAL_STATE = {
//   data: [
//     'React Native',
//     'ReactJS',
//     'NodeJS'
//   ],
// };

// function courses(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'ADD_COURSE':
//       return { ...state, data: [...state.data, action.title] };
//     default:
//       return state;
//   }
// }

// const store = createStore(courses);

// export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;
 