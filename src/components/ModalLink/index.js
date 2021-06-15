import React, { useState } from 'react';
import { 
  Share, 
  TouchableOpacity, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';

import { 
  ModalContainer, 
  Container, 
  Header, 
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl 
} from './styles';
import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';
import WebViewAcesso from '../WebView/index';

export default function ModalLink ({ onClose, data }) {
  const [ modalUrl, setmodalUrl ] = useState(false);

  function copyLink () {
    Clipboard.setString(data.link);
  };

  function openUrl () {
		setmodalUrl(true);
	}

  async function handleShare () {
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActivityType')
        }else {
          //compartilhado
          console.log('Compartilhado com sucesso')
        } 
      } else if (result.action === Share.dismissedAction) {
          console.log('Modal Fechado')
      }
    }catch (error) {
      console.log(error.message)
    }
  }

  return modalUrl ? (
    <ModalContainer>
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={{ flex: 1 }} />
			</TouchableWithoutFeedback>

			<Container>
				<Header>
					<TouchableOpacity onPress={onClose}>
						<Feather name="x" color="#242743" size={30} />
					</TouchableOpacity>
					<TouchableOpacity onPress={handleShare}>
						<Feather name="share" color="#242743" size={30} />
					</TouchableOpacity>
				</Header>

				<LinkArea>
					<WebViewAcesso url={data.link} />
				</LinkArea>
			</Container>
		</ModalContainer>
	) : (
		<ModalContainer>
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={{ flex: 1 }} />
			</TouchableWithoutFeedback>

			<Container>
				<Header>
					<TouchableOpacity onPress={onClose}>
						<Feather name="x" color="#242743" size={30} />
					</TouchableOpacity>
					<TouchableOpacity onPress={handleShare}>
						<Feather name="share" color="#242743" size={30} />
					</TouchableOpacity>
				</Header>

				<LinkArea>
					<Title>Link Encurtado</Title>
					<LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

					<ShortLinkArea activeOpacity={1} onPress={openUrl}>
						<ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
						<TouchableOpacity onPress={copyLink}>
							<Feather name="copy" color="#FFF" size={25} />
						</TouchableOpacity>
					</ShortLinkArea>
				</LinkArea>
			</Container>
		</ModalContainer>
	);
}