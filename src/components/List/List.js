// @flow
import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
} from 'react-native';

import {
  getFetch,
} from '../../shared/utils/fetchUtil';


export default class List extends React.Component {
  state = {
    data: [],
  }

  static navigationOptions = {
    title: 'List',
  };

  setData = data => this.setState({ data })

  render() {
    const {
      data,
    } = this.state;
    return (
      <View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Button
            title="fetch"
            onPress={
              () =>
                getFetch('https://jsonplaceholder.typicode.com/posts')
                  .then(d => this.setData(d))
            }
          />
          <Button
            title="clear"
            onPress={() => this.setData([])}
          />
          {
            data.map(d => (
              <Text
                key={d.id}
              >
                {`${d.id}: ${d.title}`}
              </Text>
            ))
          }
        </ScrollView>
      </View>
    );
  }
};
