import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Task({task, onPressCheck, onPressEdit, onPressDelete}) {
  return (
    <View key={task.id} style={styles.viewTask}>
      <CheckBox value={task.done} onValueChange={onPressCheck} />

      <View style={styles.viewTaskContent}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <View style={styles.line} />
        <View>
          <TouchableOpacity
            style={{...styles.btnOption, backgroundColor: '#6600E7'}}
            onPress={onPressEdit}>
            <Icon name={'pencil'} size={21} color={'white'} />
          </TouchableOpacity>
          <View style={{height: 10}} />
          <TouchableOpacity
            style={{...styles.btnOption, backgroundColor: 'tomato'}}
            onPress={onPressDelete}>
            <Icon name={'trash-can'} size={21} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewTask: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  viewTaskContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginLeft: 15,
  },
  taskTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    flex: 1,
  },
  line: {
    backgroundColor: 'black',
    width: StyleSheet.hairlineWidth,
    height: 35,
    marginHorizontal: 15,
  },
  btnOption: {
    width: 35,
    height: 35,
    // backgroundColor: 'aqua',
    borderRadius: 5,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
