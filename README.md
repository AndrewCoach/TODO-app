# Task Manager

A simple Task Manager application built using React and Axios, which allows users to create, edit, and delete tasks. Users can also update task status and set priorities for tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Create new tasks with a name, description, priority, and status.
- Edit existing tasks, including updating the task's name, description, priority, and status.
- Delete tasks.
- Filter tasks based on status.
- Disable the edit button for tasks that are marked as "Completed".

## Installation

1. Clone the repository:

```
git clone https://github.com/AndrewCoach/TODO-app.git
```

2. Install dependencies:
```
cd task-manager
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory of the project and add the following line:

```
REACT_APP_API_URL=http://your-api-url
```

Replace `http://your-api-url` with the URL of your backend API.

4. Start the development server:

```
npm start
```


The application will open in your default web browser at `http://localhost:3000`.

## Usage

1. To create a new task, enter the task name, description, priority, and status in the input fields, and click the "Submit" button.

2. To edit a task, click the "Edit" button next to the task you wish to modify. Update the fields as desired and click the "Submit" button.

3. To delete a task, click the "Delete" button next to the task you wish to remove.

## Project Structure

- `src/`: Source code directory.
- `components/`: Contains React components for the application.
 - `TaskForm.js`: Component for creating and editing tasks.
 - `TaskItem.js`: Component for displaying an individual task.
 - `TaskList.js`: Component for displaying a list of tasks.
 - `EditTaskPage.js`: Component for editing a task.
- `App.js`: The main application component.
- `index.js`: The entry point for the application.

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).


