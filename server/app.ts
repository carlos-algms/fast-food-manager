import * as express from 'express';

export const serverPort = 3000;
export const app = express();

app.listen(serverPort, () => {
  console.log(`Server is listening on http://127.0.0.1:${serverPort} `);
});
