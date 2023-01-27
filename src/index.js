import React from 'react';
import ReactDOM from 'react-dom/client';
import {goods} from "./goods";
import Good from "./Good";
import "./index.css";
function Cart(){
  return (
    <>
    <center>
    <h1>Amazon best sellers</h1>
    </center>
    <section className="goodlist">
      {goods.map((good)=>{
        return <Good {...good} key={good.id}/>;
      })}
    </section>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cart/>)
