import styled from "styled-components"

export const ResultBox = styled.div`
  background: white;
  border-radius: 5px;

  max-height: 300px;

  position:relative;
  margin-top: 10px;
  border: 4px solid #00bfb6;

  &:webkit-scrollbar {
    display: none
  }
  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #00bfb6;
    right: 50%;
    top: -23px;
  }
  
  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #fff;
    right: 50%;
    top: -18px;
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