/*
 * File: complexCode.js
 * Description: This code is a complex implementation of a task manager system that allows users to create, update and delete tasks.
 * It includes functions for managing the task list, displaying tasks, and handling user input.
 * Author: John Doe
 * Date: 2021-09-30
 */

// Task class to represent each individual task
class Task {
  constructor(id, title, description, dueDate, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
  }
}

// TaskManager class to manage the task list and user interactions
class TaskManager {
  constructor() {
    this.taskList = [];
    this.currentId = 0;
  }

  // Function to add a new task to the task list
  addTask(title, description, dueDate) {
    const task = new Task(this.currentId++, title, description, dueDate, false);
    this.taskList.push(task);
  }

  // Function to update an existing task in the task list
  updateTask(id, title, description, dueDate, completed) {
    const task = this.taskList.find((task) => task.id === id);
    if (task) {
      task.title = title;
      task.description = description;
      task.dueDate = dueDate;
      task.completed = completed;
      return true;
    }
    return false;
  }

  // Function to delete a task from the task list
  deleteTask(id) {
    const index = this.taskList.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.taskList.splice(index, 1);
      return true;
    }
    return false;
  }

  // Function to mark a task as completed
  completeTask(id) {
    const task = this.taskList.find((task) => task.id === id);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  }

  // Function to get all tasks in the task list
  getAllTasks() {
    return this.taskList;
  }

  // Function to display tasks in a formatted way
  displayTasks() {
    this.taskList.forEach((task) => {
      console.log(`
        Task ID: ${task.id}
        Title: ${task.title}
        Description: ${task.description}
        Due Date: ${task.dueDate}
        Completed: ${task.completed}
      `);
    });
  }
}

// User interface interactions
const taskManager = new TaskManager();

taskManager.addTask('Task 1', 'This is task number 1', '2021-10-01');
taskManager.addTask('Task 2', 'This is task number 2', '2021-10-05');
taskManager.updateTask(1, 'Task 1 (Updated)', 'This is the updated task number 1', '2021-10-02', false);
taskManager.deleteTask(2);
taskManager.completeTask(1);

taskManager.displayTasks();