const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; text-align: center; padding: 50px;">
      <h1>Welcome to My First PaaS App!</h1>
      <p>Deployed successfully using Platform as a Service.</p>
      <p>Current Server Time: ${new Date().toISOString()}</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});