const Task= require('../models/tasks')
const Task= require ('../models/Task')
module.exports = async function (req, res, next) {
    const {id}= req.params
  console.log(req.user, req.params)
  try {
    const TaskId = req.params.id; 
    const userId = req.user._id; 

    const Task = await Task.findById(TaskId);

    if (!Task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    if (Task.owner.toString() !== userId) {
      return res.status(403).json({ error: 'Access denied. You are not the owner of this Task' });
    }
    next();
  }
  catch (ex) {
    res.status(500).json( ex);  
}
}