using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class TaskRepository : ITaskRepository
    {
        private readonly ConcurrentDictionary<int, TaskItem> _tasks = new ConcurrentDictionary<int, TaskItem>();
        private int _currentId = 1;

        public IEnumerable<TaskItem> GetAllTasks()
        {
            return _tasks.Values.OrderBy(t => t.Id);
        }

        public TaskItem GetTaskById(int id)
        {
            _tasks.TryGetValue(id, out var task);
            return task;
        }

        public TaskItem AddTask(TaskItem task)
        {
            task.Id = _currentId++;
            _tasks[task.Id] = task;
            return task;
        }

        public TaskItem UpdateTask(TaskItem task)
        {
            _tasks[task.Id] = task;
            return task;
        }

        public void DeleteTask(int id)
        {
            _tasks.TryRemove(id, out _);
        }
    }
}

