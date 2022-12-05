import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const StockPriceGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=YOUR_API_KEY'
      );

      const timeSeriesData = result.data['Time Series (5min)'];
      const data = Object.keys(timeSeriesData).map(date => ({
        name: date,
        price: parseFloat(timeSeriesData[date]['4. close']),
      }));

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default StockPriceGraph;