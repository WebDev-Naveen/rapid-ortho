import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 250px;
  height: 150px;
  margin-top: 10px;
`;
const Container = styled.div`
  text-decoration: none;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
`;
const P = styled.div`
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 130px;
  height: 100px;
  margin: 10px;

  text-decoration: none;
`;
const Head = styled.h4`
  margin-top: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props) => props.color && props.color};
`;
const Span = styled.span`
  font-size: 10px;
`;

const PromiseScores = ({ year, value }) => {
  return (
    <MainContainer>
      <Container>
        <Div>
          <P>
            <Head color="#A3A1FB">{value?.initalSurg}</Head>{" "}
            <Span>Initial Surgery</Span>{" "}
          </P>
          <P>
            <Head color="#5CDAFE">{value?.conserv}</Head>{" "}
            <Span>Conservative Management</Span>
          </P>
        </Div>
        <p>{year}</p>
      </Container>
    </MainContainer>
  );
};
export default PromiseScores;
