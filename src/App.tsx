import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';

//function declaration
function App() {
    //Полезное что-то
    //Обязана вернуть JSX
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)


    return (
        <div className="App">
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}

            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
            {/*/!*<UncontrolledAccordion titleValue={"Users"} />*!/*/}
            {/*<UncontrolledRating />*/}
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onClick={() => {setAccordionCollapsed(!accordionCollapsed)}} />
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff />*/}
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
