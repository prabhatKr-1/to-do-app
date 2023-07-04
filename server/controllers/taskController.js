import Tasks from "../model/tasks.js";

export const createTask = async (req, res) => {
  const { taskName, task } = req.body;
  await Tasks.create({
    taskName,
    task,
    user: req.user,
  });

  res.json({
    success: true,
    message: "Task created successfully!",
  });
};

export const getTasks = async (req, res) => {
  const tasks = await Tasks.find({ user: req.user._id });
  res.json({
    success: true,
    tasks,
  });
};

export const deleteTask = async (req, res) => {
  const task = await Tasks.findOne({ _id: req.params.id });
  if (!task) {
    return res.json({
      success: false,
      message: "Task not found!",
    });
  }
  await Tasks.deleteOne({ _id: req.params.id });
  res.json({
    success: true,
    message: "Task deleted successfully!",
  });
};

//updating the checkbox whether the task is completed or not
export const updateTask = async (req, res) => {
  const task = await Tasks.findOne({ _id: req.params.id });
  if (!task) {
    return res.json({
      success: false,
      message: "Task not found!",
    });
  }
  task.isChecked = !task.isChecked;
  await task.save();

  res.json({
    success: true,
    message: "Task updated successfully!",
  });
};
