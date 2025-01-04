import React from 'react';
import './WeekMenu.css';
const WeekMenu = () => {
    const menu = {
        Monday: {
            breakfast: 'Aloo Paratha with Curd',
            lunch: 'Chole Bhature with Salad',
            snack: 'Samosa with Chutney',
            dinner: 'Dal Tadka with Rice'
        },
        Tuesday: {
            breakfast: 'Poha with Chutney',
            lunch: 'Vegetable Biryani with Raita',
            snack: 'Pakoras with Tea',
            dinner: 'Paneer Butter Masala with Naan'
        },
        Wednesday: {
            breakfast: 'Upma with Coconut Chutney',
            lunch: 'Rajma with Rice',
            snack: 'Dhokla',
            dinner: 'Aloo Gobi with Paratha'
        },
        Thursday: {
            breakfast: 'Paratha with Pickle',
            lunch: 'Pav Bhaji with Salad',
            snack: 'Fruit Chaat',
            dinner: 'Tandoori Chicken with Naan'
        },
        Friday: {
            breakfast: 'Idli with Sambhar',
            lunch: 'Pulao with Cucumber Raita',
            snack: 'Bhel Puri',
            dinner: 'Fish Curry with Rice'
        },
        Saturday: {
            breakfast: 'Masala Dosa with Sambar',
            lunch: 'Pasta with Veggies',
            snack: 'Chana Chaat',
            dinner: 'Veg Korma with Paratha'
        },
        Sunday: {
            breakfast: 'Puri with Aloo Sabzi',
            lunch: 'Chole Rice',
            snack: 'Vada Pav',
            dinner: 'Biryani with Boiled Eggs'
        }
    };

    return (
      <div className="week-menu-container">
            <h1>Weekly Menu</h1>
            <ul>
                {Object.keys(menu).map(day => (
                    <li key={day}>
                        <h2>{day}</h2>
                        <ul>
                            <li><strong>Breakfast:</strong> {menu[day].breakfast}</li>
                            <li><strong>Lunch:</strong> {menu[day].lunch}</li>
                            <li><strong>Snack:</strong> {menu[day].snack}</li>
                            <li><strong>Dinner:</strong> {menu[day].dinner}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeekMenu;
