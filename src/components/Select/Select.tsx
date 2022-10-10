import React from 'react';
import s from './Select.module.css'


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    optionMode: boolean
    setOptionMode: (value: boolean) => void
    value: any
    onItemClick: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const selectTitle = props.items.filter(i => i.value === props.value)
    return (
        <div>
            <div className={s.select} onClick={() => {
                props.setOptionMode(!props.optionMode)
            }}>
                {selectTitle[0].title}
                <img className={s.img} src={'https://cdn-icons-png.flaticon.com/512/3494/3494439.png'} />
            </div>
            {props.optionMode && <div className={s.options}>{props.items.map(i => <div onClick={() => {
                props.onItemClick(i.value)
            }}>{i.title}</div>)}</div>}
        </div>
    )
}