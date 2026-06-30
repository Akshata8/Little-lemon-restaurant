import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";

const dishes = [
  {
    name: "Greek Salad",
    description: "Fresh vegetables, feta cheese and Mediterranean dressing",
    price: "Rs.299",
    image: "/images/greek salad.jpg",
  },
  {
    name: "Bruschetta",
    description: "Grilled bread topped with tomatoes and herbs",
    price: "Rs.499",
    image: "/images/bruchetta.png",
  },
  {
    name: "Lemon Dessert",
    description: "Sweet lemon flavored dessert",
    price: "Rs.199",
    image: "/images/lemon dessert.jpg",
  },
];

const OrderOnline = () => {
  const location = useLocation();
  const selectedDishFromMenu = location.state?.dish || dishes[0].name;

  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    dish: selectedDishFromMenu,
    quantity: 1,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmitMessage(
      `Thank you, ${order.name}! Your order for ${order.quantity} x ${selectedDish?.name || order.dish} has been received.`
    );
  };

  const selectedDish = dishes.find((item) => item.name === order.dish);

  return (
    <>
      <section style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Order Online</h1>
        <p>Choose your favorite dish, enter your details, and place your order.</p>

        <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
          <div>
            <h2>Selected Dish</h2>
            <div
              style={{
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                display: "grid",
                gap: "1rem",
              }}
            >
              {selectedDish?.image && (
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  style={{ width: "100%", borderRadius: "8px", objectFit: "cover", maxHeight: "260px" }}
                />
              )}
              <h3>{selectedDish?.name}</h3>
              <p>{selectedDish?.description}</p>
              <strong>{selectedDish?.price}</strong>
            </div>
          </div>

          <div>
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={order.name}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.75rem", marginTop: "0.25rem" }}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={order.email}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.75rem", marginTop: "0.25rem" }}
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={order.phone}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.75rem", marginTop: "0.25rem" }}
                />
              </label>

              <label>
                Dish
                <select
                  name="dish"
                  value={order.dish}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "0.75rem", marginTop: "0.25rem" }}
                >
                  {dishes.map((dish) => (
                    <option key={dish.name} value={dish.name}>
                      {dish.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Quantity
                <input
                  type="number"
                  name="quantity"
                  value={order.quantity}
                  min="1"
                  onChange={handleChange}
                  style={{ width: "100%", padding: "0.75rem", marginTop: "0.25rem" }}
                />
              </label>

              <label>
                Notes
                <textarea
                  name="notes"
                  value={order.notes}
                  onChange={handleChange}
                  placeholder="Any special requests?"
                  style={{ width: "100%", padding: "0.75rem", marginTop: "0.25rem" }}
                />
              </label>

              <button
                type="submit"
                onClick={handleSubmit}
                style={{ padding: "0.9rem 1.25rem", marginTop: "0.5rem" }}
              >
                Submit Order
              </button>
            </form>

            {submitted && (
              <div style={{ marginTop: "2rem", padding: "1rem", background: "#f7f7f7", borderRadius: "8px" }}>
                <h3>Order Received</h3>
                <p>Thank you, {order.name}! Your order for {order.quantity} x {selectedDish?.name} has been received.</p>
                <p>We will contact you at {order.email} or {order.phone}.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderOnline;
