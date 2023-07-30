import React from "react";

import s from "./index.module.css";
import InputDiscount from "./InputDIscount";

export default function Discount() {
  return (
    <div className={s.discount}>
      <div className={s.image}></div>
      <div className={s.info}>
        <h1>5% off</h1>
        <h3>on the first order</h3>
        <InputDiscount />
      </div>
    </div>
  );
}
