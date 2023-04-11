using System.Collections.Generic;
using TodoApi.Models;

namespace TodoApi.Data
{
    public interface ITaskRepository
    {
        IEnumerable<TaskItem> GetAllTasks();
        TaskItem GetTaskById(int id);
        TaskItem AddTask(TaskItem task);
        TaskItem UpdateTask(TaskItem task);
        void DeleteTask(int id);
    }
}
