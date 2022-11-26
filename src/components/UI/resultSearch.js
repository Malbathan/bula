import styled from "styled-components"

export const ResultBox = styled.div`
  background: #f1f1f1;
  border-radius: 5px;

  max-height: 300px;
  overflow:hidden;
  overflow-y: auto;
  position:relative;
  margin-top: 10px;

  &:webkit-scrollbar {
    display: none
  }
  
`

export const Item = styled.div `
  display: flex;
  align-items: center;

  padding: 24px 32px;

  gap: 16px;

  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
  }
`