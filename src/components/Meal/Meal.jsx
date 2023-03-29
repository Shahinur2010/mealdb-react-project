import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {idMeal,strMeal,strCategory,strArea,strMealThumb} = props.meal;
    const addToItems = props.addToItems;

    return (
        <div className='meal'>
           <img src={strMealThumb} alt="" />
           <div>
           <h3>{strMeal}</h3>
           <p>Category: {strCategory}</p>
           <p>Items: {strArea}</p>
           </div>
           <button onClick={()=>addToItems(props.meal)} className='btn-add'>Add Item</button>
        </div>
    );
};

export default Meal;
