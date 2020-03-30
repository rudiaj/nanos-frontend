import styled from "styled-components";

const Icon = styled.i`
  color: ${({ color }) => (color || "#454F55")};
  transform: ${({ rotate }) => (rotate ? "rotate(-30deg)" : "inherit")};
  font-size: ${({ size }) => (size || "1.5rem")};
  margin-right: 14px;
  &:last-of-type {
    margin-right: 0;
  }
`;

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

export { Icon,Td };
