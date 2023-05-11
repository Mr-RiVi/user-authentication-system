import authService from '../services/authenticateService.js';

const authHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400) //400 Bad Request response
      .json({ message: 'Username and Password are required.' });

  const result = await authService({ username, password });
  if (!result.success && result.status == 401)
    return res.status(result.status).json({ message: result.message });
  else if (!result.success && result.status == 500)
    return res.status(result.status).json({ message: 'Internal Server Error' });

  //send refresh token as a secure HTTP-only cookie
  res.cookie('jwt', result.data.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 24 * 60 * 60 * 1000, //this cookie will be expiring after one day
  });

  res.json(result.data.accessToken);
};
export default authHandler;
