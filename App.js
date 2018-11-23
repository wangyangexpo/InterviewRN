import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, SearchBar, List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: '人才招聘', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <SearchBar
          lightTheme
          onChangeText={null}
          onClearText={null}
          containerStyle={styles.SearchBar}
          inputStyle={{ backgroundColor: '#fff' }}
          placeholder='搜索' />
        <View style={styles.Menu}>
          <List containerStyle={[styles.ListBar, styles.MarginTop0]}>
            <ListItem containerStyle={styles.ListItem} key={1} title={'待阅简历'} />
            <ListItem containerStyle={styles.ListItem} key={2} title={'已阅简历'} />
          </List>
          <List containerStyle={styles.ListBar}>
            <ListItem containerStyle={styles.ListItem} key={1} title={'面试中'} />
            <ListItem containerStyle={styles.ListItem} key={2} title={'择优待定'} />
            <ListItem containerStyle={styles.ListItem} key={3} title={'历史面试'} />
          </List>
          <List containerStyle={styles.ListBar}>
            <ListItem containerStyle={styles.ListItem} key={1} title={'待录用审批'} />
            <ListItem containerStyle={styles.ListItem} key={2} title={'历史录用'} />
          </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SearchBar: {
    backgroundColor: '#f8f8f8',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  MarginTop0: {
    marginTop: 0
  },
  ListBar: {
    marginBottom: 20,
    borderTopWidth: 0,
    marginBottom: 0
  },
  ListItem: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#eee'
  },
  Menu: {
    backgroundColor: '#f8f8f8'
  }
})