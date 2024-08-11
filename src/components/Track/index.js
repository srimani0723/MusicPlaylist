import {AiOutlineDelete} from 'react-icons/ai'
import {Card, Content, Img, Other, Para, Btn} from './styledcomponents'

const Track = props => {
  const {data, deleteTrack} = props
  const {id, name, genre, imageUrl, duration} = data

  const onDelete = () => {
    deleteTrack(id)
  }

  return (
    <Card>
      <Img src={imageUrl} alt="track" />
      <Content>
        <Para color="#ffff">{name}</Para>
        <Para color="#3b82f6">{genre}</Para>
      </Content>
      <Other>
        <Para color="#ffff">{duration}</Para>
        <Btn type="button" onClick={onDelete} data-testid="delete">
          <AiOutlineDelete color="#ffff" size={25} />
        </Btn>
      </Other>
    </Card>
  )
}

export default Track
