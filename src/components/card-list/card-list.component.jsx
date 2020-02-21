import React from 'react';
import Card from '../card/card.component.jsx'
import './card-list.styles.css';

const CardList = (props) => {
    return (
    <div className='card-list'>
    {props.monsters.map(monster => <Card monster={monster} key={monster.id}></Card>)}
    </div>
    )
}

export default CardList;
