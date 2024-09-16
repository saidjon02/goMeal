import React, { useEffect, useState } from "react";

function Fetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const [cards, setCards] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setCards(json));
  }, []);
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setFoods(json));
  }, []);
  return { data, cards, foods };
}

export default Fetch;
