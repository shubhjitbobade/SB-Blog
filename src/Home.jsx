import React, { useState } from 'react';

function Home() {
    const [name, setName] = useState('abhi');
    const [age, setAge] = useState(25);
    const handleCheck = () => {
        setName('omkar');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <h3>My name is {name} and i am {age} old.</h3>
            <button onClick={handleCheck}>click me</button>
        </div>
    );
}
export default Home;