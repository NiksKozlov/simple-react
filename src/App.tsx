import React, {useState} from 'react';
import './App.css';
import {Select, SelectContainer} from './components/Select/Select';
import NewMessagesCounter, {NemMessageCounterContainer, Users, UsersSecret} from './components/ReactMemo/01';
import {UseMemoExample} from './components/UseMemo/UseMemo';
import HelpToReactWithMemo from './components/UseMemo/HelpToReactWithMemo';



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
    const [value, setValue] = useState('2')       // Select component state
    //const [counter, setCounter] = useState(0)
    //const [users, setUsers] = useState(['Nikita', 'Mark', 'Alina'])
    //console.log('App rendering')

    // const addUser =() => {
    //     const newUsers = [...users, 'newChild ' + new Date().getTime()]
    //     setUsers(newUsers)
    // }

    //users.push('newChild ' + new Date().getTime())


    return (
        <div className="App">
            <HelpToReactWithMemo/>
            <UseMemoExample />
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
            {/*<SelectContainer value={value}*/}
            {/*        onChange={setValue}*/}
            {/*        items={[*/}
            {/*            {value: '1', title: 'Moscow'},*/}
            {/*            {value: '2', title: 'Kiev'},*/}
            {/*            {value: '3', title: 'Brest'},*/}
            {/*        ]} />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            {/*<OnOff on={on} setOn={setOn}/>*/}
            {/*<UncontrolledAccordion titleValue={'menu'}/>*/}
            {/*<button onClick={() => {setCounter(counter + 1)}}>+</button>*/}
            {/*<button onClick={addUser}>add User</button>*/}
            {/*<NemMessageCounterContainer count={counter} />*/}
            {/*<Users users={users} />*/}
        </div>
    );
}


export default App;
