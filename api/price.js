```javascript
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  res.json({
    "usd.t": {
      "usd": 1.0000,
      "usd_24h_change": 0,
      "market_cap": "10000000000000",
      "last_updated_at": Math.floor(Date.now() / 1000)
    }
  });
}
