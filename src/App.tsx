import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/OnOff/UnсontolledOnOff/UnсontrolledOnOff';
import {GetValueOfUncontrolledInput} from './components/Input/UncontrolledInput';
import {ControlledCheckbox, ControlledInput, ControlledSelect} from './components/Input/ControlledInput';

//function declaration
function App() {
    //Полезное что-то
    //Обязана вернуть JSX
    console.log('App rendering')

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    // let [on, setOn] = useState<boolean>(true)


    return (
        <div className="App">
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            {/*/!*<UncontrolledAccordion titleValue={"Users"} />*!/*/}
            {/*<UncontrolledRating />*/}
            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} />*/}
            {/*<UncontrolledOnOff setOn={setOn}/> {on.toString()}*/}
            {/*<GetValueOfUncontrolledInput/>*/}
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
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
