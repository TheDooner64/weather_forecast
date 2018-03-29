import { FETCH_WEATHER } from '../actions/index'

// Combine state array with the new payload data so we return a NEW array and avoid manipulating the existing state
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ];
  }

  return state;
}
