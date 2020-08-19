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
        maxSize,
        breakfast,
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
                {/* size of room */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-input">
                        <input 
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                        />
                    </div>
                    <input 
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                        />
                </div>
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                        
                    </div>
                    <div className="single-extra">
                        <input 
                        type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
