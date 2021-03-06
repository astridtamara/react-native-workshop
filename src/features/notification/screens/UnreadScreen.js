// @flow

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from '../../../global/core-ui/Button';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import {Ionicons, Octicons} from '@expo/vector-icons';
import {Avatar} from 'react-native-elements';
import {NotificationList} from '../../../global/core-ui/NotificationList';

type Props = {markAsRead: (itemID: number) => void; markAllAsRead: () => void};

type State = {
  itemID: number;
};

export default class UnreadScreen extends Component<Props, State> {
  render() {
    const {mainContainer} = styles;

    const list = [
      {
        id: 1,
        title: 'deandrasita/abcd',
        avatar: 'https://png.icons8.com/color/1600/person-male.png',
        subtitle:
          '(testing long lines) Potential security vulnedjfjldsfl sldjflkdsjf kdjs flksdjflkjljflkjsd fjsdlfslfjsdklfkjf lkdsj  lkjkrability found in the hoek dependency.',
        isWarned: false,
      },
      {
        id: 2,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
        isWarned: true,
      },
      {
        id: 3,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
        isWarned: false,
      },
      {
        id: 4,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerabiclity found in the hoek dependency.',
        isWarned: true,
      },
      {
        id: 5,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
        isWarned: true,
      },
    ];
    return (
      <View style={mainContainer}>
        <ScrollView>
          <Button
            backgroundColor={'#E7E7E7'}
            title={'MARK ALL AS READ'}
            underlayColor={'#E7E7E7'}
            onPress={this.props.markAllAsRead}
          />

          {list.map((item, i) => (
            <NotificationList key={i}>
              <RowWith3Column
                style={{backgroundColor: '#F1F1F1'}}
                left={<Avatar small rounded source={{uri: item.avatar}} />}
                content={<Text>{item.title}</Text>}
                right={
                  <TouchableOpacity
                    onPress={() => this.props.markAsRead(item.id)}
                  >
                    <Ionicons name="ios-checkmark" size={50} color="black" />
                  </TouchableOpacity>
                }
              />
              <RowWith3Column
                left={
                  item.isWarned ? (
                    <Ionicons name="ios-checkmark" size={50} color="black" />
                  ) : (
                    <Octicons name="repo-forked" size={25} type="OCTICONS" />
                  )
                }
                content={<Text>{item.subtitle}</Text>}
                right={
                  <TouchableOpacity
                    onPress={() => this.props.markAsRead(item.id)}
                  >
                    <Ionicons name="ios-checkmark" size={50} color="black" />
                  </TouchableOpacity>
                }
              />
            </NotificationList>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
