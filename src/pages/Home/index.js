import React, { useState } from 'react';
import { 
  TouchableWithoutFeedback, 
  Keyboard, 
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import { Feather } from '@expo/vector-icons'; 
import { 
  ContainerLogo, 
  Logo, 
  ContainerContent, 
  Title, 
  Subtitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from './styles';

import api from '../../services/api';

export default function Home () {

  const [loading, setLoading] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({})

  async function handleShortLink () {
    setLoading(true);

    try{
      const response = await api.post('/shorten', {
        long_url: inputUrl
      })

      setData(response.data);
      setModalVisible(true);
      Keyboard.dismiss();
      setLoading(false);
      setInputUrl('');

    }catch{
      alert('Ops, bugou')
      Keyboard.dismiss();
      setInputUrl('');
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={['#1DDbb9', '#132742']}
        style={{flex: 1, justifyContent: 'center'}}
      >
        <StatusBarPage 
          barStyle= "light-content"
          backgroundColor= "#1DDbb9"
        />

        <Menu />
        <KeyboardAvoidingView
          behavior={ Platform.OS === 'android' ? 'padding' : 'position' }
          enabled
        >
          <ContainerLogo>
            <Logo 
              source={require('../../assets/Logo.png')}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>Nathan's App</Title>
            <Subtitle>Cole seu link para encurtar</Subtitle>

          <ContainerInput>
            <BoxIcon>
              <Feather name="link" size={22} color='#FFF'/>
            </BoxIcon>
            <Input 
              placeholder="Cole seu link aqui"
              placeholderTextColor= "white"
              autoCapitalize= "none"
              autoCorrect= {false}
              keyboardType= "url"
              value={inputUrl}
              onChangeText={(text) => setInputUrl(text)}
            />
          </ContainerInput>

          <ButtonLink
            onPress={ handleShortLink }
          >
            {
              loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )
            }
          </ButtonLink>

          </ContainerContent>
        </KeyboardAvoidingView>

      <Modal
        visible={modalVisible}
        transparent
        animationType= "slide"
      >
        <ModalLink 
          onClose={() => setModalVisible(false)} 
          data={data}
        />
      </Modal>

      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}