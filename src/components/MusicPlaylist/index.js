import {useState} from 'react'
import {IoIosSearch} from 'react-icons/io'

import Track from '../Track'

import {
  Header,
  HeaderH1,
  HeaderPara,
  BottomPart,
  SearchBox,
  SearchBar,
  SearchH1,
  Search,
  Cards,
  EmptyView,
  EmptyH1,
} from './styledcomponents'

const MusicPlaylist = props => {
  const {list, removeTrack} = props
  const [input, setInput] = useState('')

  const onRemove = id => {
    removeTrack(id)
  }

  const SearchList = list.filter(each =>
    each.name.toLowerCase().includes(input.toLowerCase()),
  )

  return (
    <>
      <Header>
        <HeaderH1>Ed Sheeran</HeaderH1>
        <HeaderPara>Singer</HeaderPara>
      </Header>
      <BottomPart>
        <SearchBox>
          <SearchH1>Songs Playlist</SearchH1>
          <SearchBar>
            <Search
              type="search"
              placeholder="Search"
              onChange={e => setInput(e.target.value)}
            />
            <IoIosSearch color="#ffffff" size={20} />
          </SearchBar>
        </SearchBox>
        {SearchList.length !== 0 ? (
          <Cards>
            {SearchList.map(each => (
              <Track data={each} key={each.id} deleteTrack={onRemove} />
            ))}
          </Cards>
        ) : (
          <EmptyView>
            <EmptyH1>No Songs Found</EmptyH1>
          </EmptyView>
        )}
      </BottomPart>
    </>
  )
}

export default MusicPlaylist
