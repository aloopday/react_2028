
import styled from 'styled-components';

const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #fff200ff;
  color: black;
`;

function Welcome() {
  return (
    <>
      <MyHeader>Welcome to dog wash!</MyHeader>
    </>
  );
}

export default Welcome;