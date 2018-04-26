import { CREATE_LANE, UPDATE_LANE, DELETE_LANE } from './LaneActions';

const initialState = [];

export default function lanes(state = initialState, action) {
  switch (action.type) {
  	case CREATE_LANE: 
  		return [...state, action.lane];

  	case UPDATE_LANE:
  		return state.map(lane => {
  			if (lane.id === action.id) {
  				return Object.assign({}, lane, action.lane);
  			}
  		return lane;
  		});
  	case DELETE_LANE:
  		return state.filter(lane => lane.id !== action.laneId);

    default:
      	return state;
    }
}