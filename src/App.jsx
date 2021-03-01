import {useEffect, useState} from 'react';
import Films from './components/Films';
import People from './components/People';
import Button from './components/Button';
import Header from './components/Header';



const App = () => {
    const [films, setFilms] = useState({});
    const [people, setPeople] = useState({});

    useEffect(() => {
        fetch(https://ghibliapi.herokuapp.com/films)
        .then(res => res.json ())
        .then(allFilms => setFilms(allFilms))
    , []);
    
    useEffect(() => {
        fetch(https://ghibliapi.herokuapp.com/people)
        .then(res => res.json ())
        .then(allPeople => setPeople(allPeople))
    , []);

    
    return (
        <>
        <Header />
        <Button />
        </>
    );
};

export default App;