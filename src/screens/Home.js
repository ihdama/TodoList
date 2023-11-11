import {StatusBar, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {TaskInput, Task, ModalEditTask} from '../components';
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState('');

  function createTask() {
    setTasks(tasks => [{id: tasks.length + 1, title: newTask}, ...tasks]);
    setNewTask('');
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

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#2b0b55'} />

      {/* Input Tugas */}
      <TaskInput
        // onChangeText={title => setNewTask(title)
        onChangeText={setNewTask} // ✅
        value={newTask}
        onPress={createTask}
        disabled={newTask === ''}
      />

      {/* Render Tugas */}
      <FlatList
        data={tasks}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center'}}>Tidak Ada Tugas</Text>
        )}
        renderItem={({item: task}) => {
          return (
            <Task
              task={task}
              onPressCheck={() => checkTask(task.id)}
              onPressDelete={() => deleteTask(task.id)}
              onPressEdit={() => {
                setModalVisible(true);
                setEditedTask(task);
              }}
            />
          );
        }}
      />

      {/* Modal Edit Tugas */}
      <ModalEditTask
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        onPressClose={() => setModalVisible(false)}
        inputValue={editedTask.title}
        onChangeText={taskTitle =>
          setEditedTask({...editedTask, title: taskTitle})
        }
        onPressEdit={editTask}
      />
    </View>
  );
}
