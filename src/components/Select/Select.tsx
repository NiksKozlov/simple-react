import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'


type ItemType = {
    title: string
    value: any
    population: number
}

type SelectPropsType = {
    // optionMode: boolean       --------------------------------------Alternative select-------------------
    // setOptionMode: (value: boolean) => void    ---------------------Alternative select-------------------
    // onItemClick: (value: any) => void      -------------------------Alternative select-------------------
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    console.log('Select')
    // const selectTitle = props.items.filter(i => i.value === props.value)--------------Alternative select-------------------
    // const onClickTitle = () => props.setOptionMode(!props.optionMode)-----------------Alternative select-------------------


    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            {/*   <select>
                <option value="">Brest</option>
                <option value="">Minsk</option>
                <option value="">LA</option>
            </select> */}
            <div className={s.select} onKeyDown={onKeyDown} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={`${s.item} ${hoveredItem === i ? s.selected : ''}`}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}</div>)}
                    </div>
                }

                {/*----------------------------Alternative select-----------------------------------------------------------------
                <div className={s.select} onClick={onClickTitle}>
                    {selectTitle[0].title}
                    <img className={s.img} src={'https://cdn-icons-png.flaticon.com/512/3494/3494439.png'} />
                </div>
                {props.optionMode &&
                    <div className={s.options}>
                        {props.items.map(i =>
                            <div key={i.value} onClick={() => {
                                props.onItemClick(i.value)
                                onClickTitle()}>
                                {i.title}
                            </div>)}
                    </div>}*/}
            </div>
        </>
    )
}


export const SelectContainer = React.memo(Select)