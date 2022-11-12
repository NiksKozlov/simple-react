import React, {useMemo, useState} from 'react';
import {SelectContainer} from '../Select/Select';

const HelpToReactWithMemo = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState('2')

    const arrayOfCities = [
        {value: '1', title: 'Minsk', population: 2000000},
        {value: '2', title: 'Brest', population: 360000} ,
        {value: '3', title: 'Kiev', population: 4000000},
        {value: '4', title: 'Moscow', population: 12000000},
        {value: '5', title: 'LA', population: 3500000}
    ]
    const filterCitiesOnPopulation = useMemo(() => {
       return arrayOfCities.filter(c => c.population > 3500000)
    }, [arrayOfCities])

    const filterCitiesOnCountryRussia = useMemo(() => {
        return arrayOfCities.filter(c => c.title === 'Moscow')
    }, [arrayOfCities])

    const filterCitiesOnCountryUkraine = useMemo(() => {
        return arrayOfCities.filter(c => c.title === 'Kiev')
    }, [arrayOfCities])

    return (
        <div>
            <SelectContainer value={value} onChange={setValue} items={filterCitiesOnPopulation}/>
            <SelectContainer value={value} onChange={setValue} items={filterCitiesOnCountryRussia}/>
            <SelectContainer value={value} onChange={setValue} items={filterCitiesOnCountryUkraine}/>
            <button onClick={() => setCount(count + 1)}>+1</button>
            {count}
        </div>
    );
};

export default HelpToReactWithMemo;