import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import {Select} from './components/Select/Select';
import UncontrolledAccordion from './components/Accordion/UnсontrolledAccordion/UncontrolledAccordion';

//function declaration
function App() {
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [on, setOn] = useState<boolean>(true)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    // const [value, setValue] = useState(2)       ---------------------Alternative select-------------------
    // const [optionsMode, setOptionsMode] = useState(false)------------Alternative select-------------------
    // const onItemClick = (value: any) => {       ---------------------Alternative select-------------------
    //     setValue(value)  --------------------------------------------Alternative select-------------------
    // }         -------------------------------------------------------Alternative select-------------------
    const [value, setValue] = useState('2')

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
            {/*<Select optionMode={optionsMode}       -----------------------Alternative select-------------------*/}
            {/*        setOptionMode={setOptionsMode} */}
            {/*        value={value}*/}
            {/*        onItemClick={onItemClick} */}
            {/*        items={[{title: 'Nikita', value: 1}, {title: 'Alina', value: 2}, {title: 'Mark', value: 3}]} />*/}
            <Select value={value}
                    onChange={setValue}
                    items={[
                        {value: '1', title: 'Moscow'},
                        {value: '2', title: 'Kiev'},
                        {value: '3', title: 'Brest'},
                    ]} />
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            <UncontrolledAccordion titleValue={'menu'}/>
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
