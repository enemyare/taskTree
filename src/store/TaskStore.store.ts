import {autorun, makeAutoObservable, toJS} from "mobx";
import Task from "./Task.store.ts";

class TaskStore {
  tasks: Array<Task> = [];
  id: number = 0;

  constructor() {
    makeAutoObservable(this)
  }

  addTask = (title: string, descriprion: string) => {
    this.id++
    const newTask: Task = new Task(this.id, title, descriprion);
    this.tasks.push(newTask);
  }

  removeTask = (taskValue: Task) => {
    this.tasks = this.tasks.filter(task => task.id !== taskValue.id);
  }

}

export const taskStore = new TaskStore()

autorun(() => {
  console.log(toJS(taskStore)); // Выводим массив при каждом изменении
});
