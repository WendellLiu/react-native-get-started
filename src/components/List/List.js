// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
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
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: d }) => (
            <Text
              key={d.id}
            >
              {`${d.id}: ${d.title}`}
            </Text>
          )}
          ListHeaderComponent={() => (
            <View>
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
            </View>
          )}
        />
      </View>
    );
  }
};
