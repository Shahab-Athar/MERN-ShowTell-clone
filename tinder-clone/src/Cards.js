import React, { useEffect, useState } from 'react'

import TinderCard from 'react-tinder-card'
import axios from 'axios'

import './Cards.css'

function Cards() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('http://localhost:8001/showtell/cards')

            setPeople(req.data)
        }

        fetchData()
    }, [])

    console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name +  " Left The Screen")
    }

    return (
        <div className="Cards">
            <div className="Cards_CardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>

                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})`}}
                            className="card">

                            <h3>{person.name}</h3>

                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards
