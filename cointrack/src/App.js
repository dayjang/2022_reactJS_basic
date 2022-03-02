import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>
        Here is the list of crpyto currency,{" "}
        {loading ? "loading...." : `the number of crpyto is ${coins.length}`}
      </h1>
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.name} {coin.symbol}: ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
      {/* <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default App;
