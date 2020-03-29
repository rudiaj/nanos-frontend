import React, { useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import { actions, paths } from "../../constants";
import { List } from "./components";

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 100px auto 0 auto;
`;

const Campaigns = () => {
  const dispatch = useDispatch();

  const getData = () => dispatchProp => {
    dispatchProp({
      type: actions.CAMPAIGNS_GET_REQUEST
    });

    axios
      .get(paths.api.CAMPAIGNS)
      .then(res =>
        dispatchProp({
          type: actions.CAMPAIGNS_GET_SUCCESS,
          data: res.data
        })
      )
      .catch(() => {
        dispatchProp({
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

export default memo(Campaigns);
