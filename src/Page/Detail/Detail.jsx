
import Navbar from '../Home/block/Navbar';
import { data } from '../../data/Data'
import { Link, useParams } from 'react-router-dom'
import Footer from '../Home/block/Footer';
import { AiOutlineRight, AiOutlineHeart, AiOutlineStar, AiFillPrinter } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
const Detail = (query, handleInputChange) => {
    const { id } = useParams();
    const resultDishes = data.find(dishesh => dishesh.id === parseInt(id));
    const { name, shortname, image, sub_image, rating, category, review, photo, createOn, updateOn, ingredients, directions, nutritionFacts } = resultDishes;
    const similarDishes = data.filter(dishesh => dishesh.category === category && dishesh.name !== name);
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (

        <>
            <Navbar query={query} handleInputChange={handleInputChange} />
            <div className='my-10 px-10'>
                <div className='w-full md:w-[70%] lg:w-[60%]'>
                    <div className='flex py-8 font-bold '>
                        {category} <AiOutlineRight className='mx-3 mt-[4px]' size={25} /> {shortname}
                    </div>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>{name}</h1>
                    <div className='flex text-[17px] font-bold my-5'>
                        <div className=' cursor-pointer '><span className='border-b-[1px] border-orange-500 hover:border-b-2'>{rating} RATINGS</span> </div>
                        <div className='pl-4 ml-4  cursor-pointer border-l '><span className='border-b-[1px] border-orange-500 hover:border-b-2'>{review} REVIEWS</span> </div>
                        <div className='pl-4 ml-4  cursor-pointer border-l '><span className='border-b-[1px] border-orange-500 hover:border-b-2'>{photo} PHOTOS</span> </div>
                    </div>
                    <p className='my-5'>Fettuccine is used for this chicken and broccoli Alfredo recipe but you can use your favorite pasta.</p>
                    <p className='my-5'>Recipe by <span className='font-bold border-b border-orange-500 cursor-pointer hover:border-b-2'>{createOn}</span>  |  Update on {updateOn}</p>
                    <div className='flex h-[60px] bg-yellow-100 w-[60%] my-5'>
                        <div className='w-[calc(100%/4)] flex flex-wrap justify-center items-center text-[17px] font-bold cursor-pointer bg-orange-500'><span className=' hover:border-b-2 border-white text-white'>Save</span><AiOutlineHeart size={20} color='white' /></div>
                        <div className='w-[calc(100%/4)] flex flex-wrap justify-center items-center text-[17px] font-bold cursor-pointer'><span className=' hover:border-b-2  border-orange-500'>Rate</span><AiOutlineStar size={20} /></div>
                        <div className='w-[calc(100%/4)] flex flex-wrap justify-center items-center text-[17px] font-bold cursor-pointer'><span className=' hover:border-b-2  border-orange-500'>Print</span><AiFillPrinter size={20} /></div>
                        <div className='w-[calc(100%/4)] flex flex-wrap justify-center items-center text-[17px] font-bold cursor-pointer'><span className=' hover:border-b-2  border-orange-500'>Share</span><FaShare size={20} /></div>
                    </div>
                    <div>
                        <img src={image} alt={name} className='w-full' />
                        <div class="relative flex items-center">
                            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                            <div id='slider' className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth'>
                                {sub_image.map((item) => (
                                    <img src={item} class="inline-block w-[180px] h-[180px] p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" alt="/" />
                                ))}

                            </div>
                            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                        </div>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-2xl font-bold my-5'>Ingredients</h1>
                        {ingredients.map((value) => (
                            <p className='py-2 flex'><BsDot size={30} />{value}</p>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold my-5'>Directions</h1>
                        {directions.map((value, index) => (
                            <div className='my-4'>
                                <h2 className='font-bold'>STEP {index + 1}</h2>
                                <p className='py-2 flex'>{value}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span className='text-2xl font-bold my-5' >Nutrition Facts </span><span>(per serving)</span>
                        {nutritionFacts.map((value, index) => (
                            <div key={index} className='my-4 flex'>
                                <div className='py-2 w-[calc(100%/4)]'>
                                    <p>{value.calories}</p>
                                    <span>Calories</span>
                                </div>
                                <div className='py-2 w-[calc(100%/4)]'>
                                    <p>{value.fat}</p>
                                    <span>Fat</span>
                                </div>
                                <div className='py-2 w-[calc(100%/4)]'>
                                    <p>{value.carbs}</p>
                                    <span>Carbs</span>
                                </div>
                                <div className='py-2 w-[calc(100%/4)]'>
                                    <p>{value.protein}</p>
                                    <span>Protein</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div>
                    <h2>You’ll Also Love</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>

                        {similarDishes.map((item, index) =>
                            <Link to={`/detail/${id}`} >
                                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg ' />
                                    <p className='text-gray-500 text-[15px] px-2 font-bold'>{item.shortname}</p>
                                    <div className='flex justify-between px-2 py-4'>
                                        <p className='font-bold cursor-pointer hover:text-orange-500'>{item.name}</p>
                                        <p className='text-center'>
                                            <span >{item.rating} Ratings</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )}

                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Detail
