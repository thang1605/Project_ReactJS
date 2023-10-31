import React, { useState } from 'react'
import Navbar from './block/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Footer from './block/Footer'
import Card from './block/Card'
import { data } from '../../data/Data'

const Home = () => {
    const [selectCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")

    //Input Filter
    const handleInputChange = event => {
        setQuery(event.target.value);
    };
    const filteredItems = data.filter(
        (product) => product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );

    //Button Filter

    const handleClick = event => {
        setSelectedCategory(event.target.value)
    };
    function filteredData(data, selected, query) {
        let filteredProducts = data

        //Filtering Input Items
        if (query) {
            filteredProducts = filteredItems
        }

        if (selected) {
            filteredProducts = filteredProducts.filter(({ category, price }) =>
                category === selected ||
                price === selected
            );
        }

        return filteredProducts.map(({ id, image, sub_image, name, rating, shortname, review, photo, createOn, updateOn, ingredients, directions, nutritionFacts }) => (
            <Card
                id={id}
                image={image}
                name={name}
                rating={rating}
                shortname={shortname}
                review={review}
                photo={photo}
                createOn={createOn}
                updateOn={updateOn}
                ingredients={ingredients}
                directions={directions}
                nutritionFacts={nutritionFacts}
                sub_image={sub_image}
            />
        ));
    }
    const result = filteredData(data, selectCategory, query)
    return (
        <>
            <Navbar query={query} handleInputChange={handleInputChange} />
            <Hero />
            <HeadlineCards />
            <Food result={result} handleClick={handleClick} />
            <Category />
            <Footer />
        </>
    )
}

export default Home
