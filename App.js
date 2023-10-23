import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import {log} from 'console';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#2b0b55'} />

      {/* Header */}
      <View style={styles.viewHeader}>
        <Icon name={'notebook'} size={27} color={'white'} />
        <Text style={styles.textHeaderTitle}>Tasking App</Text>
      </View>

      {/* Input Tugas */}
      <View style={styles.viewInput}>
        <View style={styles.viewTextInput}>
          <TextInput placeholder="Buat Tugas..." />
        </View>
        <View style={{width: 20}} />
        <TouchableOpacity style={styles.btnAddTask}>
          <Icon name={'plus'} size={27} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* Render Tugas */}
      <View style={styles.viewTask}>
        <CheckBox />

        <View style={styles.viewTaskContent}>
          <Text style={styles.taskTitle}>Tugas</Text>
          <View style={styles.line} />
          <View>
            <TouchableOpacity
              style={{...styles.btnOption, backgroundColor: '#6600E7'}}
              onPress={() => setModalVisible(true)}>
              <Icon name={'pencil'} size={21} color={'white'} />
            </TouchableOpacity>
            <View style={{height: 10}} />
            <TouchableOpacity
              style={{...styles.btnOption, backgroundColor: 'tomato'}}>
              <Icon name={'trash-can'} size={21} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal Edit Tugas */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalAlignment}>
          <Pressable
            style={styles.modalBackdrop}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Icon name={'notebook-edit'} size={27} color={'black'} />
              <Text style={{color: 'black', fontWeight: '500'}}>
                Edit Tugas
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name={'close-circle-outline'} size={27} color={'black'} />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Edit Tugas..."
              underlineColorAndroid={'#33007b'}
              style={{marginHorizontal: 10, paddingHorizontal: 10}}
            />
            <View style={{height: 10}} />
            <TouchableOpacity style={styles.btnEditTask}>
              <Text style={styles.textBtnEdit}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // HEADER
  viewHeader: {
    backgroundColor: '#6600E7',
    height: 50,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textHeaderTitle: {
    // Tasking App
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },

  // INPUT TUGAS
  viewInput: {
    flexDirection: 'row',
    margin: 20,
  },
  viewTextInput: {
    // Buat Tugas
    height: 50,
    backgroundColor: '#ececec',
    borderRadius: 50 / 2,
    flex: 1,
    elevation: 3,
    paddingHorizontal: 20,
  },
  btnAddTask: {
    // +
    backgroundColor: '#6600E7',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Render Tugas
  viewTask: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 0,
    alignItems: 'center',
  },
  viewTaskContent: {
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    flex: 1,
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

  // Modal Edit Tugas
  modalAlignment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
    padding: 20,
    borderRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnEditTask: {
    backgroundColor: '#6600E7',
    height: 40,
    width: 120,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnEdit: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
  },
  modalBackdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.2,
  },
});
