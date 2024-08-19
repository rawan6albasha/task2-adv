import React from 'react';
import style from './Card.module.css';
import CardImg1 from '/src/assets/images/property-01.jpg'
import CardImg2 from '/src/assets/images/property-02.jpg'
import CardImg3 from '/src/assets/images/property-03.jpg'
import CardImg4 from '/src/assets/images/property-04.jpg'
import CardImg5 from '/src/assets/images/property-05.jpg'
import CardImg6 from '/src/assets/images/property-06.jpg'
let id=0
const data=[
    {
        id:id+1,
        src:CardImg1,
        type:"Luxury villa",
        price:'$1,500,000',
        add:"18 New Street Miami, OR 97219",
        Bedrooms:7,
        Pathrooms:2,
        Area:'545m2',
        Floor:1,
        Parking:'6 spots',

    },
    {
        id:id+1,
        src:CardImg2,
        type:"Luxury villa",
        price:"$925,600",
        add:'12 New street Miami, OR 12650',
        Bedrooms:3,
        Pathrooms:1,
        Area:'545m2',
        Floor:4,
        Parking:'6 spots',

    },
    {
        id:id+1,
        src:CardImg3,
        type:"Apartment",
        price:"$925,600",
        add:'34 Beach Street Miami, OR 42680',
        Bedrooms:7,
        Pathrooms:3,
        Area:'545m2',
        Floor:3,
        Parking:'6 spots',

    },
    {
        id:id+1,
        src:CardImg4,
        type:"Penthouse",
        price:'$584,500',
        add:'22 New Street Portland, OR 16540',
        Bedrooms:3,
        Pathrooms:7,
        Area:'545m2',
        Floor:6,
        Parking:'6 spots',

    },
    {
        id:id+1,
        src:CardImg5,
        type:"Penthouse",
        price:"$925,600",
        add:"18 New Street Miami, OR 97219",
        Bedrooms:5,
        Pathrooms:2,
        Area:'545m2',
        Floor:6,
        Parking:'6 spots',

    },
    {
        id:id+1,
        src:CardImg6,
        type:"Modern Condo",
        price:'$450,000',
        add:'12 New street Miami, OR 12650',
        Bedrooms:8,
        Pathrooms:8,
        Area:'545m2',
        Floor:5,
        Parking:'6 spots',

    },
]

const Card = () => {
  return (
    <div className={style.cards}>
      {data.map((item) => (
        <div key={item.id}  className={style.card}>
<img src={item.src}/>
<div className={style.part1}><p>{item.type}</p><span>{item.price}</span></div>
<b className={style.part2}>{item.add}</b>
<div className={style.part3}>
<div className={style.part33}><p>Bedrooms:</p><b>{item.Bedrooms}</b></div>
<div className={style.part33}><p>Pathrooms:</p><b>{item.Pathrooms}</b></div>
<div className={style.part33}><p>Area:</p><b>{item.Area}</b></div>
<div className={style.part33}><p>Floor:</p><b>{item.Floor}</b></div>
<div className={style.part33}><p>Parking:</p><b>{item.Parking}</b></div>
</div>
<hr/>
<p className={style.part4}>Schedule a visit</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
