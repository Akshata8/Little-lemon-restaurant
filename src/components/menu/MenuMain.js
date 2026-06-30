import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./MenuMain.module.css";


const MenuMain = () => {
  const navigate = useNavigate();


const dishes = [

{
name:"Greek Salad",
description:"Fresh vegetables, feta cheese and Mediterranean dressing",
price:"Rs.299",
image:"/images/greek salad.jpg"
},


{
name:"Bruschetta",
description:"Grilled bread topped with tomatoes and herbs",
price:"RS.499",
image:"/images/bruchetta.png"
},


{
name:"Lemon Dessert",
description:"Sweet lemon flavored dessert",
price:"Rs.199",
image:"/images/lemon dessert.jpg"
}

];



return (

<section className={style.menu}>


<h1>
Our Menu
</h1>


<p className={style.subtitle}>

Explore our delicious Mediterranean dishes

</p>



<div className={style.cards}>


{

dishes.map((dish,index)=>(


<div 
className={style.card}
key={index}
>


<img

src={dish.image}

alt={dish.name}

/>


<div className={style.cardContent}>


<h2>
{dish.name}
</h2>


<p>
{dish.description}
</p>


<h3>
{dish.price}
</h3>


<button onClick={() => navigate("/order-online", { state: { dish: dish.name } })}>
  Order Now
</button>


</div>


</div>


))

}


</div>



</section>


);

};


export default MenuMain;