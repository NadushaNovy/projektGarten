import React from "react";
import image from "./image/notFound.png";
import s from "./index.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <img src={image} alt="" />
    </div>
  );
}
