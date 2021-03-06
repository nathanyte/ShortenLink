import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
  margin-top: ${ Platform.OS === 'ios' ? 15+'px' : 15+'px' }
`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  fontSize: 36px;
  font-weight: bold;
  color: #1CCBAE;
`

export const LongUrl = styled.Text`
  fontSize: 17px;
  color: #A7A7A7;
  margin-bottom: 30px;
`

export const ShortLinkArea = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: #172742;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
  padding: 0 10px;
`

export const ShortLinkUrl = styled.Text`
  width: 90%;
  color: #FFF;
  font-size: 16px;
`