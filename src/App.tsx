import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/OnOff/UnсontolledOnOff/UnсontrolledOnOff';
import {GetValueOfUncontrolledInput} from './components/Input/UncontrolledInput';
import {ControlledCheckbox, ControlledInput, ControlledSelect} from './components/Input/ControlledInput';
import {Select} from './components/Select/Select';

//function declaration
function App() {
    //Полезное что-то
    //Обязана вернуть JSX
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [on, setOn] = useState<boolean>(true)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState(1)
    const [optionsMode, setOptionsMode] = useState(false)

    const onItemClick = (value: any) => {
        setValue(value)
    }


    return (
        <div className="App">
            {/*<Accordion*/}
            {/*    titleValue={'Users'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => {*/}
            {/*        setAccordionCollapsed(!accordionCollapsed)*/}
            {/*    }}*/}
            {/*    items={[{name: 'Nikita', value: 1}, {name: 'Alina', value: 2}, {name: 'Mark', value: 3}]}*/}
            {/*    onItemClick={(value) => {*/}
            {/*        alert(`User with ID ${value} clicked`)*/}
            {/*    }}*/}
            {/*/>*/}
            <Select optionMode={optionsMode} setOptionMode={setOptionsMode} value={value} onItemClick={onItemClick} items={[{title: 'Nikita', value: 1}, {title: 'Alina', value: 2}, {title: 'Mark', value: 3}]} />
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}
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
