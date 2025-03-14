import {makeAutoObservable} from "mobx";

class Task {
  id: number;
  title: string;
  description: string;
  isSelected: boolean = false;
  isExpanded: boolean = false;
  subTasks = [];

  constructor(id: number, title: string, description: string) {
    makeAutoObservable(this)
    this.id = id;
    this.title = title;
    this.description = description;
  }

  toggleSelect = () => {
    this.isSelected = !this.isSelected;
  }

  setSelect = (value: boolean) => {
    this.isSelected = value;
    this.subTasks.forEach((subTask: any) => subTask.setSelect(this.isSelected));
  }

  toggleExpanded = () => {
    this.isExpanded = !this.isExpanded;
  }

}

export default Task;
