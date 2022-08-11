import React, { Children, createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import { TaskProps } from "../interface/task";

interface TaskContextProps {
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  addTask: (newTaskTitle: string) => void;
  removeTask: (id: number) => void;
  taskDone: (id: number) => void;
}

interface TaskProviderProps {
  children: React.ReactNode;
}

const TaskContext = createContext({} as TaskContextProps);

export function TaskContextProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addTask(newTaskTitle: string) {
    const newTask: TaskProps = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    const verifyTaskTitleSame = tasks.find(
      (task) => task.title === newTaskTitle
    );

    if (verifyTaskTitleSame !== undefined) {
      Alert.alert(
        "Task já cadastrada",
        "Você não pode cadastrar uma task com o mesmo nome"
      );
    } else {
      setTasks([...tasks, newTask]);
    }
  }

  function removeTask(id: number) {
    Alert.alert(
      "Remover item",
      "Você deseja remover esse item?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () =>
            setTasks((oldTasks) => oldTasks.filter((t) => t.id !== id)),
          style: "default",
        },
      ],
      { cancelable: true }
    );
  }

  function taskDone(id: number) {
    const taskUpdated = tasks.map((task) => ({ ...task }));
    const taskToUpdate = taskUpdated.find((task) => task.id === id);

    if (!taskToUpdate) {
      return;
    }

    taskToUpdate.done = !taskToUpdate.done;

    setTasks(taskUpdated);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, removeTask, taskDone }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTask = () => useContext<TaskContextProps>(TaskContext);
