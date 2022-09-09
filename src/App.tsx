import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';

//function declaration
function App() {
    //Полезное что-то
    //Обязана вернуть JSX
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)


    return (
        <div className="App">
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            <OnOff on={on} onClick={setOn}/>
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            {/*/!*<UncontrolledAccordion titleValue={"Users"} />*!/*/}
            {/*<UncontrolledRating />*/}
            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={() => {setAccordionCollapsed(!accordionCollapsed)}} />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1> {props.title} </h1>
}

export default App;
