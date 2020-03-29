import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ListItem from "./ListItem";
import Modal from "./Modal";

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;
  table-layout: auto;
`;

const List = () => {
  const { data, isLoading, hasFailedToLoad } = useSelector(
    state => state.campaigns
  );

  const [isActive, setIsActive] = useState(false);
  const [activePlatform, setActivePlatform] = useState(null);

  const openModal = platform => {
    setIsActive(prev => !prev);
    setActivePlatform(platform);
  };

  if (isLoading) return <i className="fas fa-spinner fa-spin" />;
  if (hasFailedToLoad) return <i className="fas fa-bomb" />;

  return (
    <>
      <Modal
        isActive={isActive}
        onClose={() => setIsActive(false)}
        data={activePlatform}
      />
      <span>{data.length} Active Campaigns</span>
      <Table>
        <tbody>
          {data.map(campaign => {
            return (
              <ListItem
                key={campaign._id}
                item={campaign}
                onClick={openModal}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default memo(List);
