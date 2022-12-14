import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';



export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    
    const newTask = {
      id:new Date().getTime(),
      title:newTaskTitle,
      done:false
    }
    setTasks(state =>[...state, newTask]);
  }

  function handleToggleTaskDone(id: number) {

    const updatedTasks = tasks.map(task => (
       task.id === id ? {...task, done: !task.done}: task
    ));   
    
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {    
    const newTasks = tasks.filter(function(task) {
      return task.id !== id;
    })

    setTasks(newTasks);        
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})