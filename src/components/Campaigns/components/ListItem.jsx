import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";
import { Icon } from "./styled";
import { helpers } from "../../../utils";

const Td = styled.td`
  padding: 40px 14px;
  vertical-align: middle;
  background-color: white;
  border-top: 1px solid #e5e2e8;
  border-bottom: 1px solid #e5e2e8;
  &:first-of-type {
    padding-left: 28px;
    border-left: 1px solid #e5e2e8;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    padding-right: 28px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: 1px solid #e5e2e8;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  margin-right: 28px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Caption = styled.span`
  opacity: 0.7;
  margin-bottom: 8px;
`;

const Text = styled.span`
  font-size: 1.125rem;
`;

const ListItem = ({
  item: { name, status, goal, total_budget, platforms },
  onClick
}) => {
  return (
    <tr>
      <Td>
        <FlexWrapper>
          <IconWrapper color={helpers.resolveStatusColor(status)}>
            <Icon
              rotate
              size="1rem"
              className="fas fa-bullhorn"
              color={helpers.resolveStatusColor(status, true)}
            />
          </IconWrapper>
          <TextWrapper>
            <Caption>Name</Caption>
            <Text>{name}</Text>
          </TextWrapper>
        </FlexWrapper>
      </Td>
      <Td>
        <TextWrapper>
          <Caption>Goal</Caption>
          <Text>{goal}</Text>
        </TextWrapper>
      </Td>
      <Td>
        <TextWrapper>
          <Caption>Budget</Caption>
          <Text>${total_budget}</Text>
        </TextWrapper>
      </Td>
      <Td>
        <TextWrapper>
          <Caption>Platforms</Caption>
          <div>
            {Object.keys(platforms).map(platform => (
              <Button
                key={platform}
                onClick={() => onClick(platforms[platform])}
              >
                <Icon className={`fab fa-${platform}`} />
              </Button>
            ))}
          </div>
        </TextWrapper>
      </Td>
    </tr>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    total_budget: PropTypes.number.isRequired,
    platforms: PropTypes.shape({}).isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default memo(ListItem);
