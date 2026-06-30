import React from "react";

import style from "./About.module.css";


const About = () => {


return (

<section className={style.about}>


<div className={style.content}>


<h1>
Little Lemon
</h1>


<h2>
Indian Cuisine
</h2>


<p>

Little Lemon is a family owned Mediterranean restaurant
located in India.

</p>


<p>

We focus on traditional recipes prepared with fresh
ingredients and served with a modern twist.

</p>


<p>

Our mission is to provide our customers with a warm
family dining experience and authentic flavors.

</p>


</div>



<div className={style.image}>


<img

src="/images/Mario and Adrian A.jpg"

alt="Little Lemon chefs"

/>


</div>



</section>


)

}


export default About;