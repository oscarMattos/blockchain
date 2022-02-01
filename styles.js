import styled from "styled-components";

const Container = styled.div`
  padding: 16px;

  & > p {
    font-family: sans-serif;
    color: blue;

    & > span {
        font-weight: bolder;
    }
  }
`;

export default Container;
