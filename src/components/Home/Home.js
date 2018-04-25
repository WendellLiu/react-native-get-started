// @flow
import React from 'react';

import {
  StyleSheet,
  Text,
  Button,
  Alert,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  StyledView,
} from './components';

export default class Home extends React.Component {
  state = {
    title: '',
  }

  static navigationOptions = {
    title: 'Home',
  };


  setTitle = title => this.setState({ title })

  render() {
    const {
      title,
    } = this.state;

    const { navigate } = this.props.navigation;

    return (
      <StyledView>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            style={{
              fontSize: 40,
            }}
          >
            {title}
          </Text>
          <TextInput
            style={{
              width: '100%',
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            value={title}
            onChangeText={title => this.setTitle(title)}
          />
          <Image
            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
            style={{ width: 300, height: 300 }}
          />
          <Button
            title="Confirm"
            onPress={() => Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => navigate('List') },
              ],
              { cancelable: false }
            )}
          />
        </ScrollView>
      </StyledView>
    );
  }
}