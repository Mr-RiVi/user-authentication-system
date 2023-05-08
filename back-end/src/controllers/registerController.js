import registerService from '../services/registerService.js';

const registerHandler = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ message: 'Username and Password are required.' });

  const result = await registerService({ name, username, email, password });
  if (!result.success && result.status == 409)
    res.status(result.status).json({ message: 'Username already exists' });
  else if (!result.success && result.status == 500)
    res.status(result.status).json({ message: 'Internal Server Error' });
  return res.json(result.data);
};

export default registerHandler;
