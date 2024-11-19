
const express = require('express');
const axios = require('axios');
const app = express();

const API_KEY = 'your-api-key';
const BASE_URL = 'https://pysoftware.com/v1';

app.get('/api/menu_items', async (req, res) => {
  const response = await axios.get(`${BASE_URL}/menu_items`, {
    headers: { 'X-API-KEY': API_KEY },
  });
  res.json(response.data);
});

app.get('/api/address_inventory/:page', async (req, res) => {
  const { page } = req.params;
  const response = await axios.get(`${BASE_URL}/address_inventory/${page}`, {
    headers: { 'X-API-KEY': API_KEY },
  });
  res.json(response.data);
});

app.listen(5000, () => console.log('Server running on port 5000'));
