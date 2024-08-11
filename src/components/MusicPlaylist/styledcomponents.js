import styled from 'styled-components'

export const Header = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 35vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 8%;
  padding-bottom: 20px;
`
export const HeaderH1 = styled.h1`
  color: #ffff;
  margin: 0px;
  font-size: 40px;
`

export const HeaderPara = styled.p`
  color: #ffff;
  font-size: x-large;
  margin: 0px;
`

export const BottomPart = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  padding: 20px 5%;

  font-family: 'Roboto';
  height: 65vh;
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchH1 = styled.h1`
  color: #ffff;
  font-size: x-large;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding-right: 10px;
`
export const Search = styled.input`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 0px;
  margin-right: 10px;
  padding: 10px;
  color: #ffff;
  font-size: medium;
  font-weight: normal;
`

export const Cards = styled.ul`
  padding: 0px;
  overflow-y: auto;
`
export const EmptyView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`
export const EmptyH1 = styled.p`
  color: #ffffff;
  font-size: 30px;
`
