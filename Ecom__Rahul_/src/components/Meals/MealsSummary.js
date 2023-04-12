import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Pizza, Delivered To You</h2>
      <p>
        Choose your favorite pizza from our broad selection of available options
        and enjoy a delicious Pizza at home.
      </p>
      <p>
        All our Pizzas are cooked with fresh ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;