import "./App.css";

import { useState } from "react";
import ChangeCartCounter from "./UI/ChangeCartCounter";
import { Button, Typography } from "@mui/material";
import OrderTableSimple from "./components/OrderTableSimple";

function App() {
  const [cheshskoeCount, setCheshskoeCount] = useState(0);
  const [blanchCount, setBlanchCount] = useState(0);
  const [purchaseNumber, setPurchaseNumber] = useState(0);
  const [finalProfit, setFinalProfit] = useState([0,0]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState({
    bar: {
      beer: {
        Cheshskoe: 150,
        Blanch: 190,
      },
      snacks: {
        Chips: 115,
        SucharikiSouce: 75,
        Suchariki: 50,
      },
    },
    kitchen: {
      setOnTwo: 400,
      setOnFour: 600,
      setOnSix: 1000,
    },
  });

  const [netPrice, setNetPrice] = useState({
    bar: {
      beer: {
        Cheshskoe: 100,
        Blanch: 120,
      },
      snacks: {
        Chips: 75,
        SucharikiSouce: 40,
        Suchariki: 25,
      },
    },
    kitchen: {
      setOnTwo: 200,
      setOnFour: 350,
      setOnSix: 600,
    },
  });

  function addToCart() {
    if (cheshskoeCount > 0) {
      setCart((prev) => [
        ...prev,
        {
          id: purchaseNumber,
          name: "Cheshskoe",
          count: cheshskoeCount,
          price: price.bar.beer.Cheshskoe,
          netPrice: netPrice.bar.beer.Cheshskoe,
        },
      ]);

      setPurchaseNumber((prev) => prev + 1);
      console.log(purchaseNumber);
    }
    if (blanchCount > 0) {
      setCart((prev) => [
        ...prev,
        {
          id: purchaseNumber + 1,
          name: "Blanch",
          count: blanchCount,
          price: price.bar.beer.Blanch,
          netPrice: netPrice.bar.beer.Blanch,
        },
      ]);

      setPurchaseNumber((prev) => prev + 1);
      console.log(purchaseNumber);
    }

    setCheshskoeCount(0);
    setBlanchCount(0);

    console.log(cart);
  }

  return (
    <div>
      <div className="main_page">
        <div className="prices">
          <h1>Bar</h1>
          <h2>Price</h2>
          <p>Cheshskoe: {price.bar.beer.Cheshskoe}</p>
          <p>Chips: {price.bar.snacks.Chips}</p>
          <h2>Net price</h2>
          <p>Cheshskoe: {netPrice.bar.beer.Cheshskoe}</p>
          <p>Chips: {netPrice.bar.snacks.Chips}</p>
          <h1>Kitchen</h1>
          <h2>Price</h2>
          <p>SetOnTwo: {price.kitchen.setOnTwo}</p>
          <p>SetOnFour: {price.kitchen.setOnFour}</p>
          <p>SetOnSix: {price.kitchen.setOnSix}</p>
          <h2>Net price</h2>
          <p>SetOnTwo: {netPrice.kitchen.setOnTwo}</p>
          <p>SetOnFour: {netPrice.kitchen.setOnFour}</p>
          <p>SetOnSix: {netPrice.kitchen.setOnSix}</p>
        </div>
        <div className="input_purchase">
          <div className="cheshskoe_form">
            <Typography variant="h4" gutterBottom>
              Cheshskoe:{" "}
            </Typography>
            <ChangeCartCounter
              count={cheshskoeCount}
              callback={setCheshskoeCount}
            />
          </div>

          <div className="cheshskoe_form">
            <Typography variant="h4" gutterBottom>
              Blanch:{" "}
            </Typography>
            <ChangeCartCounter count={blanchCount} callback={setBlanchCount} />
          </div>

          {/* <button className="button" onClick={() => console.log(count)}>вывод</button> */}

          <Button variant="contained" onClick={addToCart}>
            Add to cart
          </Button>
        </div>
      </div>
      <OrderTableSimple rows={cart} />
      <div>
        <h1>Итоговый доход: {cart.reduce((acc, el) => acc + el.price * el.count, 0)}</h1>
        <h1>Итоговая прибыль: {cart.reduce((acc, el) => acc + el.netPrice * el.count, 0)}</h1>
      </div>
    </div>
  );
}

export default App;