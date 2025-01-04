import React, { useState, useEffect } from 'react';
import './TodayMenu.css';
const TodaysMenu = () => {
    const [todayMenu, setTodayMenu] = useState(null);

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

    useEffect(() => {
        // Get the current day of the week (0: Sunday, 1: Monday, etc.)
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = daysOfWeek[new Date().getDay()];

        // Set the menu for the current day
        setTodayMenu(menu[currentDay]);
    }, []);

    if (!todayMenu) {
        return <div>Loading today's menu...</div>;
    }

    return (
        <div className="today-menu-container">
            <h1>Today's Menu</h1>
            <h2>{new Date().toLocaleString('en-us', { weekday: 'long' })}</h2>
            <ul>
                <li><strong>Breakfast:</strong> {todayMenu.breakfast}</li>
                <li><strong>Lunch:</strong> {todayMenu.lunch}</li>
                <li><strong>Snack:</strong> {todayMenu.snack}</li>
                <li><strong>Dinner:</strong> {todayMenu.dinner}</li>
            </ul>
        </div>
    );
};

export default TodaysMenu;
