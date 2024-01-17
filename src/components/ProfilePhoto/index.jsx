import { Container, WrapperIMG, WrapperIMGPencil, ReviewText, UserName, Content } from "./profilePhoto.styles"
import { Color } from '../../utils/colors.app'
import Icon from '../../assets/IconProfile.svg'
import Pencil from '../../assets/Edit.svg'
import Star from '../../assets/star.svg'






export const ProfilePhoto = () => {

  return (
    <Container>
      <WrapperIMG>
        <img width='157px' height='158px' flex-shrink='0' src={Icon} alt='icon' />
      </WrapperIMG>
      <WrapperIMGPencil>
        <img width='35px' height='44'  flex-shrink='0' src={Pencil} alt='Pencil' />
      </WrapperIMGPencil>
      <UserName>Fulano Silva</UserName>
      <Content>
        <img width='19px' height='29px' flex-shrink='0' src={Star} alt='Starr' />
        <ReviewText>4,5</ReviewText>
      </Content>

    </Container>
  )
}