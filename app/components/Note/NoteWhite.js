import styled from 'styled-components';

const NoteWhite = styled.button`
  display: inline-block;
  box-sizing: border-box;
  height: 50px;
  width: 50px;
  padding: 0.25em 1em;
  margin: 0em 0.1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  background: #fff;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default NoteWhite;
