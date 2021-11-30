/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import Profile, {ProfileProps} from '../shared/src/components/Profile';

const profileMock: ProfileProps = {name: 'John Doe', id: '123456'};

const App = () => (
  <SafeAreaView style={backgroundStyle}>
    <Profile {...profileMock} />
  </SafeAreaView>
);

const backgroundStyle: StyleProp<ViewStyle> = {
  backgroundColor: '#282C34',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default App;
