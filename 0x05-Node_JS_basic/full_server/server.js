/**
 * Contains the miscellaneous route handlers.
 * @author Daniel Ongom <https://github.com/Domodan>
 */
import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
