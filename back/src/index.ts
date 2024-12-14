import { app } from "./app";

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}!`);
  console.log("Press CTRL+C to stop\n");

  console.log(`See the example routes at http://localhost:${PORT}/ping`);
});
