import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [items, setItems] =useState(0);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    useEffect(()=>{

    },[])

    const addToItems = (m) => {
        console.log(m)
    }

    return (
        <div className='meals'>
            <div className='meals-container'>

                {
                    meals.map((meal,i) => <Meal key={i} meal={meal} addToItems={addToItems}></Meal>)
                }

            </div>

            <div className='outcome'>
                <h3>Selected Meals</h3>
            </div>
        </div>
    );
};

export default Meals;