import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to the Home Page</h1>
            <p style={styles.paragraph}>This is the home page of the application.</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        color: '#333',
        padding: '20px',
    },
    header: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#f8b400',
    },
    paragraph: {
        fontSize: '18px',
        color: '#555',
    },
};

export default Home;
