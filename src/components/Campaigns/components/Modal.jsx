import React, { memo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment";
import PropTypes from "prop-types";

import Button from "./Button";
import { Icon } from "./styled";

const Overlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  backdrop-filter: saturate(180%) blur(8px);
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  border-radius: 10px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: white;
  max-height: calc(100vh - 30px);
`;

const Content = styled.div`
  min-height: 400px;
`;

const ModalHeader = styled.div`
  display: flex;
  padding: 15px;
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: calc(100vh - 130px);
  overscroll-behavior: contain;
  padding: 15px;
`;

const Th = styled.th`
  text-align: left;
  padding-right: 24px;
  padding-bottom: 8px;
  opacity: 0.7;
  width: 160px;
`;

const Td = styled.td`
  text-align: left;
  padding-bottom: 8px;
`;

const SpanWithComma = styled.span`
  &:not(:last-child):after {
    content: ", ";
  }
`;

const StyledTable = styled.table`
  width: 100%;
`;

const TableWrapper = styled.div`
  flex: 0.5;
  padding: 40px;
  border-right: ${({ borderRight }) =>
    borderRight ? "1px solid rgba(0,0,0,0.1)" : "none"};
`;

const FlexWrapper = styled.div`
  display: flex;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? "1px solid rgba(0,0,0,0.1)" : "none"};
`;

const Anchor = styled.a`
  color: rgba(82, 138, 250, 1);
`;

const Heading = styled.h1`
  font-size: 1.25em;
  margin-bottom: 1.5rem;
`;

const Modal = ({ isActive, onClose, data }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <Overlay
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ContentWrapper
            key="modal"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
          >
            <Content>
              <ModalHeader>
                <Button onClick={onClose}>
                  <Icon className="fas fa-times" />
                </Button>
              </ModalHeader>
              <ModalContent>
                <FlexWrapper borderBottom>
                  <TableWrapper borderRight>
                    <Heading>General</Heading>
                    <StyledTable>
                      <tbody>
                        <tr>
                          <Th>Status</Th>
                          <Td>{data.status}</Td>
                        </tr>
                        <tr>
                          <Th>Total budget</Th>
                          <Td>${data.total_budget}</Td>
                        </tr>
                        <tr>
                          <Th>Remaining budget</Th>
                          <Td>${data.remaining_budget}</Td>
                        </tr>
                        <tr>
                          <Th>Start date</Th>
                          <Td>
                            {moment(data.start_date).format("YYYY-MM-DD")}
                          </Td>
                        </tr>
                        <tr>
                          <Th>End date</Th>
                          <Td>{moment(data.end_date).format("YYYY-MM-DD")}</Td>
                        </tr>
                      </tbody>
                    </StyledTable>
                  </TableWrapper>
                  <TableWrapper>
                    <Heading>Target audiance</Heading>
                    <StyledTable>
                      <tbody>
                        <tr>
                          <Th>Laguages</Th>
                          <Td>
                            {data.target_audiance.languages.map(lang => (
                              <SpanWithComma key={lang}>{lang}</SpanWithComma>
                            ))}
                          </Td>
                        </tr>
                        <tr>
                          <Th>Genders</Th>
                          <Td>
                            {data.target_audiance.genders.map(gender => (
                              <SpanWithComma key={gender}>
                                {gender}
                              </SpanWithComma>
                            ))}
                          </Td>
                        </tr>
                        <tr>
                          <Th>Age range</Th>
                          <Td>
                            {`${data.target_audiance.age_range[0]} - ${data.target_audiance.age_range[1]}`}
                          </Td>
                        </tr>
                        <tr>
                          <Th>Locations</Th>
                          <Td>
                            {data.target_audiance.locations.map(location => (
                              <SpanWithComma key={location}>
                                {location}
                              </SpanWithComma>
                            ))}
                          </Td>
                        </tr>
                        {data.target_audiance.interests ? (
                          <tr>
                            <Th>Interests</Th>
                            <Td>
                              {data.target_audiance.interests.map(interest => (
                                <SpanWithComma key={interest}>
                                  {interest}
                                </SpanWithComma>
                              ))}
                            </Td>
                          </tr>
                        ) : null}
                        {data.target_audiance.KeyWords ? (
                          <tr>
                            <Th>Keywords</Th>
                            <Td>
                              {data.target_audiance.KeyWords.map(word => (
                                <SpanWithComma key={word}>{word}</SpanWithComma>
                              ))}
                            </Td>
                          </tr>
                        ) : null}
                      </tbody>
                    </StyledTable>
                  </TableWrapper>
                </FlexWrapper>
                <FlexWrapper>
                  <TableWrapper borderRight>
                    <Heading>Creatives</Heading>
                    <StyledTable>
                      <tbody>
                        {data.creatives.header ? (
                          <tr>
                            <Th>Header</Th>
                            <Td>{data.creatives.header}</Td>
                          </tr>
                        ) : null}
                        {data.creatives.header_1 ? (
                          <tr>
                            <Th>Header 1</Th>
                            <Td>{data.creatives.header_1}</Td>
                          </tr>
                        ) : null}
                        {data.creatives.header_2 ? (
                          <tr>
                            <Th>Header 2</Th>
                            <Td>{data.creatives.header_2}</Td>
                          </tr>
                        ) : null}
                        <tr>
                          <Th>Description</Th>
                          <Td>{data.creatives.description}</Td>
                        </tr>
                        <tr>
                          <Th>Url</Th>
                          <Td>
                            <Anchor href={data.creatives.url} target="_blank">
                              {data.creatives.url}
                            </Anchor>
                          </Td>
                        </tr>
                        <tr>
                          <Th>Image</Th>
                          <Td>
                            <Anchor
                              href={`https://raw.githubusercontent.com/nanosapp/fullstack-dev-assessment/master/images/${data.creatives.image}`}
                              target="_blank"
                            >
                              {data.creatives.image}
                            </Anchor>
                          </Td>
                        </tr>
                      </tbody>
                    </StyledTable>
                  </TableWrapper>
                  <TableWrapper>
                    <Heading>Insights</Heading>
                    <StyledTable>
                      <tbody>
                        <tr>
                          <Th>Impressions</Th>
                          <Td>{data.insights.impressions}</Td>
                        </tr>
                        <tr>
                          <Th>Clicks</Th>
                          <Td>{data.insights.clicks}</Td>
                        </tr>
                        {data.insights.nanos_score ? (
                          <tr>
                            <Th>Nanos score</Th>
                            <Td>{data.insights.nanos_score}</Td>
                          </tr>
                        ) : null}
                        <tr>
                          <Th>Cost per click</Th>
                          <Td>{data.insights.cost_per_click}</Td>
                        </tr>
                        <tr>
                          <Th>Click through rate</Th>
                          <Td>{data.insights.click_through_rate}</Td>
                        </tr>
                        <tr>
                          <Th>Advanced kpi 1</Th>
                          <Td>{data.insights.advanced_kpi_1}</Td>
                        </tr>
                        {data.insights.advanced_kpi_2 ? (
                          <tr>
                            <Th>Advanced kpi 2</Th>
                            <Td>{data.insights.advanced_kpi_2}</Td>
                          </tr>
                        ) : null}
                        {data.insights.website_visits ? (
                          <tr>
                            <Th>Website visits</Th>
                            <Td>{data.insights.website_visits}</Td>
                          </tr>
                        ) : null}
                      </tbody>
                    </StyledTable>
                  </TableWrapper>
                </FlexWrapper>
              </ModalContent>
            </Content>
          </ContentWrapper>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired
};

export default memo(Modal);
