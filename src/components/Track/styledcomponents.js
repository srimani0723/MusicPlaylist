import styled from 'styled-components'

export const Card = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin-bottom: 20px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`
export const Img = styled.img`
  width: 20%;
  max-width: 200px;
  margin-right: 10px;
  border-radius: 10px;
`
export const Para = styled.p`
  color: ${props => props.color};
  font-size: x-large;
  font-weight: normal;
  margin: 5px;
`
export const Other = styled.div`
  display: flex;
  align-items: center;
`
export const Btn = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
  margin-right: 20px;
`
