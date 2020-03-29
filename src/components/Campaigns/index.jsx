import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import { actions } from "../../constants";
import { List } from "./components";

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 100px auto 0 auto;
`;

const Campaigns = () => {
  const dispatch = useDispatch();

  const getData = () => dispatch => {
    dispatch({
      type: actions.CAMPAIGNS_GET_REQUEST
    });

    axios
      .get("http://localhost:4040/api/v1/campaigns")
      .then(res =>
        dispatch({
          type: actions.CAMPAIGNS_GET_SUCCESS,
          data: res.data
        })
      )
      .catch(() => {
        dispatch({
          type: actions.CAMPAIGNS_GET_FAILURE
        });
      });
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Main>
      <List />
    </Main>
  );
};

export default Campaigns;
