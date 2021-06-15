import React from 'react';

import { ButtonMenu } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Menu () {
  const navigate = useNavigation();

  return (
    <ButtonMenu
      onPress={() => navigate.openDrawer() }
    >
      <Feather 
        name="menu"
        size={40}
        color="#FFF"
      />
    </ButtonMenu>
  )
}