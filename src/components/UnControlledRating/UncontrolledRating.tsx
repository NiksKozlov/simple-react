import React, {useState} from "react";

type RatingPropsType = {

}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setValue] = useState(0)

    const review = (rating: number) => {
        setValue(rating)
    }

    return (
        <div>
            <Star selected={value > 0} review={review} id={1}/>
            <Star selected={value > 1} review={review} id={2}/>
            <Star selected={value > 2} review={review} id={3}/>
            <Star selected={value > 3} review={review} id={4}/>
            <Star selected={value > 4} review={review} id={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    review: (review: number)=>void
    id: number
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return (
        <span onClick={()=>props.review(props.id)}>{props.selected ? <b>star </b> : <>star </>}</span>
    )
    // if (props.selected) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
}