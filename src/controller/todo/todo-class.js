export default class Todo {
  constructor(title, description, dueDate, priority, project, isDone) {
    this.title = title;
    this.description = description;
    this.project = project ? project : "default";
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.isDone = isDone || false;
  }
}
