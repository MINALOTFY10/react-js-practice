import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../hooks/use-http";
import ErrorScreen from "../UI/ErrorScreen";
import LoadingScreen from "../UI/LoadingScreen";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      const loadedMeals = [];

      for (const mealKey in mealsObj) {
        loadedMeals.push({
          id: mealKey,
          description: mealsObj[mealKey].description,
          name: mealsObj[mealKey].name,
          price: mealsObj[mealKey].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-http-eca19-default-rtdb.firebaseio.com/meals.json",
      },
      transformMeals
    );
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        {error ? (
          <ErrorScreen
            errorMessage={
              "The menu couldn't be loaded. Please come back later. 😓"
            }
          />
        ) : isLoading ? (
          <LoadingScreen />
        ) : (
          <ul>
            {meals.map((meal) => (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
