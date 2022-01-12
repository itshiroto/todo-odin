export default class Todo {
  constructor(title, description, dueDate, priority, condition) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.condition = condition || false;
  }
}
