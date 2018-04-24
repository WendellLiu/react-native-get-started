import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Alert,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const fetchData = resolve => () =>
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(d => resolve(d))

export default class App extends React.Component {
  state = {
    data: [],
    title: '',
  }

  setData = data => this.setState({ data })

  setTitle = title => this.setState({ title })

  render() {
    const {
      data,
      title,
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {
            data.map(d => (
              <Text
                key={d.id}
              >
                {`${d.name}-${d.email}`}
              </Text>
            ))
          }
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
            title="fetch"
            onPress={fetchData(this.setData)}
          />
          <Button
            title="clear"
            onPress={() => this.setData([])}
          /> 
          <Button
            title="Confirm"
            onPress={() => Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false }
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollContainer: {
    flex: 1,
  },
});
