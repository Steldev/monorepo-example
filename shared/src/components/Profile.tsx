import React, {memo} from 'react';
import {View, Text, StyleProp, TextStyle} from 'react-native';

export interface ProfileProps {
  name: string;
  id: string;
}

const Profile: React.FC<ProfileProps> = ({name, id}) => (
  <View>
    <Text style={textStyle}>{name}</Text>
    <Text style={textStyle}>{id}</Text>
  </View>
);

const textStyle: StyleProp<TextStyle> = {
  color: '#FFF',
  fontSize: 46,
  paddingVertical: 10,
  textAlign: 'center',
};

export default memo(Profile);
