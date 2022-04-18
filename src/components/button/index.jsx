import styled from "styled-components";

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const handleColor = (color) => {
  switch (color) {
    case "blue":
      return "#4a54d4";
    case "white":
      return "#ffffff";
    default:
      return "#000000";
  }
};
const StyledButton = styled.button`
  padding: ${(props) => (props.primary ? "12px 0px" : "12px 20px")};
  background: ${(props) => (props.primary ? "transparent" : "#4a54d4")};
  color: ${({ color }) => handleColor(color)};
  border: none;
  font-size: 1em;
  cursor: pointer;
  font-weight: 500;
`;
