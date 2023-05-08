import authService from '../services/authenticateService.js';

const authHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400) //400 Bad Request response
      .json({ message: 'Username and Password are required.' });

  const result = await authService({ username, password });
  if (!result.success)
    res.status(result.status).json({ message: 'Username already exists' });
  return res.json(result.data);
};
export default authHandler;
