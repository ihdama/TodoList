import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function createTask() {
    setTasks(tasks => [{id: tasks.length + 1, title: newTask}, ...tasks]);
  }

  const [editedTask, setEditedTask] = useState({
    // title: '',
    // done: false,
    // id: null,
  });

  function editTask(task) {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id === editedTask.id ? {...task, title: editedTask.title} : task,
      );
    });
    setModalVisible(false);
  }
  function checkTask(selectedId) {
    setTasks(tasks => {
      return tasks.map(task =>
        task.id === selectedId ? {...task, done: !task.done} : task,
      );
    });
  }
  function deleteTask(id) {
    setTasks(tasks => {
      return tasks.filter(task => task.id !== id);
    });
  }

  const [centang, setCentang] = useState(false); //true

  return (
    <View style={{flex: 1}}>
      <CheckBox
        value={centang} // true
        onValueChange={() => setCentang(centang === false ? true : false)}
      />
      <StatusBar backgroundColor={'#2b0b55'} />

      {/* Header */}
      <View style={styles.viewHeader}>
        <Icon name={'notebook'} size={27} color={'white'} />
        <Text style={styles.textHeaderTitle}>Tasking App</Text>
      </View>

      {/* Input Tugas */}
      <View style={styles.viewInput}>
        <View style={styles.viewTextInput}>
          <TextInput
            placeholder="Buat Tugas..."
            // onChangeText={title => setNewTask(title)} // ✔️
            onChangeText={setNewTask} // ✅
          />
        </View>
        <View style={{width: 20}} />
        <TouchableOpacity style={styles.btnAddTask} onPress={createTask}>
          <Icon name={'plus'} size={27} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* Render Tugas */}
      {tasks.length === 0 && (
        <Text style={{textAlign: 'center'}}>Tidak Ada Tugas</Text>
      )}

      {tasks.length !== 0 &&
        tasks.map(task => {
          return (
            <View key={task.id} style={styles.viewTask}>
              <CheckBox
                value={task.done}
                onValueChange={() => checkTask(task.id)}
              />

              <View style={styles.viewTaskContent}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={styles.line} />
                <View>
                  <TouchableOpacity
                    style={{...styles.btnOption, backgroundColor: '#6600E7'}}
                    onPress={() => {
                      setModalVisible(true);
                      setEditedTask(task);
                    }}>
                    <Icon name={'pencil'} size={21} color={'white'} />
                  </TouchableOpacity>
                  <View style={{height: 10}} />
                  <TouchableOpacity
                    style={{...styles.btnOption, backgroundColor: 'tomato'}}
                    onPress={() => deleteTask(task.id)}>
                    <Icon name={'trash-can'} size={21} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}

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
              // placeholder="Edit Tugas..."
              underlineColorAndroid={'#33007b'}
              style={{marginHorizontal: 10, paddingHorizontal: 10}}
              value={editedTask.title}
              onChangeText={textTitle =>
                setEditedTask({...editedTask, title: textTitle})
              }
            />
            <View style={{height: 10}} />
            <TouchableOpacity style={styles.btnEditTask} onPress={editTask}>
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
