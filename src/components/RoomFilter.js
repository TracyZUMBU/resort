import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

//get all unique values
const getUnique = (items, value) =>  {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price, 
        minPrice,
        maxPrice,
        minSize,
        Breakfast,
        pets
    } = context

    // get unique types of room    
    let types = getUnique(rooms,'type')
    types = ['all', ...types] // will get 'all' and all that is into type
    // map to jsx
    types = types.map((item, index) =>{
        return <option value={item} key={index}>{item}</option>
    })
   
    // get unique number of capacity per room
    let people = getUnique(rooms,'capacity')
    // map to jsx
    people = people.map((item, index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    
    
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form action="" className="filter-form">
                {/* select room type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* choose number of guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input 
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                    /> 
                </div>
            </form>
        </section>
    )
}
