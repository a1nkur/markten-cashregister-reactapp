import styled from "styled-components";

const Button = props => {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
};

export default Button;

/* ---------------------------- Styled Components --------------------------- */

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.7rem 0.2rem;
  border: 0.1rem solid #000;
  background: #fff;
  color: #000;
  width: 30%;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s ease;

  &:hover {
    background: #d35269;
    color: #000;
  }
`;
