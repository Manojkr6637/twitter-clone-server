import { initServer } from "./app";

async function init(){

  const app = await initServer();
  app.listen(8080, () => console.log(`Server listening on 8080`));
}
init();
