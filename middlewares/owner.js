const Task= require('../models/tasks')
module.exports = async function (req, res, next) {
    const {id}= req.params
  console.log(req.user, req.params)
  try {
    const projectId = req.params.id; 
    const userId = req.user._id; 

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    if (project.owner.toString() !== userId) {
      return res.status(403).json({ error: 'Access denied. You are not the owner of this project' });
    }
    next();
  }
  catch (ex) {
    res.status(500).json( ex);  
}
}