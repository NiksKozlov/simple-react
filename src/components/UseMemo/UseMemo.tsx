import React, {useMemo, useState} from 'react';



export const UsersSecret = (props: { users: string[] } ) => {
    console.log('UsersSecret rendering')
    return (
        <div>
            { props.users.map((u, i) => <div key={i}>{u}</div>) }
        </div>
    );
};

export const Users = React.memo(UsersSecret)

export const UseMemoExample = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        console.log('a foo updated')
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    resultB = useMemo(() => {
        console.log('b foo updated')
        let tempResultB = 1
        for (let i = 1; i <= b; i++) {
            tempResultB *= i
        }
        return tempResultB
    }, [b])

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
            <hr />
            <div>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
        </div>
    );
};
