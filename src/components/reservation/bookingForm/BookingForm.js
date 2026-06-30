import React from "react";
import style from "./BookingForm.module.css";
import TimePicker from "../../common/TimePicker";
import Button from "../../common/Button";

const ReservationForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.createBooking();
  };

  return (
    <div className={style.reservation_section}>
      <div className={style.reservation_content}>
        <div>
          <p>
            Select from the available times and tell us how many guests will be coming.
          </p>
          <p>
            Is it a special occasion? Please let us know and we will do all we can to make the event extra special!
          </p>
        </div>

        <form onSubmit={submitHandler}>
          <div className={style.form_item}>
            <label htmlFor="time">Available Times</label>
            <TimePicker
              availableTimes={props.availableTimes}
              setReservation={props.setReservation}
            />
          </div>

          <div className={style.form_item}>
            <label htmlFor="name">Name</label>
            <input
              value={props.reservation.name}
              onChange={(e) =>
                props.setReservation((currentSelected) => ({
                  ...currentSelected,
                  name: e.target.value,
                }))
              }
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              disabled={props.reservation.time === ""}
              required
            />
          </div>

          <div className={style.form_item}>
            <label htmlFor="guests">Number of Guests</label>
            <input
              value={props.reservation.guests}
              onChange={(e) =>
                props.setReservation((currentSelected) => ({
                  ...currentSelected,
                  guests: e.target.value,
                }))
              }
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="8"
              disabled={props.reservation.time === ""}
              required
            />
          </div>

          <div className={style.form_item}>
            <label htmlFor="occasion">Occasion</label>
            <select
              value={props.reservation.occasion}
              onChange={(e) =>
                props.setReservation((currentSelected) => ({
                  ...currentSelected,
                  occasion: e.target.value,
                }))
              }
              disabled={props.reservation.time === ""}
              id="occasion"
              data-testid="occasion"
              required
            >
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <Button type="submit" name="Submit-button">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
