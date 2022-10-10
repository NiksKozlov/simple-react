import React from 'react';


type ItemType = {
    name: string
    value: any
}



type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onItemClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} />
            {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onItemClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li key={index} onClick={() => {props.onItemClick(i.value)}}>{i.name}</li>)}
    </ul>
}

export default Accordion;