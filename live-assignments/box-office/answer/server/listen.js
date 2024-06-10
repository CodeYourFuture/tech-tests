const app = require("./api.js");
const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
  console.log(`Current time: ${new Date().toLocaleString()}`);
});
