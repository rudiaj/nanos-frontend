import { actions } from "../../constants";

const initialState = {
  data: [],
  hasFailedToLoad: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CAMPAIGNS_GET_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actions.CAMPAIGNS_GET_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case actions.CAMPAIGNS_GET_FAILURE:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        hasFailedToLoad: true
      };
    default:
      return state;
  }
};
