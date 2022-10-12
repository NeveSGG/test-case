import { Card } from '../components/card/Card';
import { SearchBar } from '../components/search/SearchBar'
import { Footer } from '../layouts/footer/Footer';
import { Navbar } from '../layouts/navbar/Navbar'
import { handleChange } from '../utils/handleChange';
import { makeCardsList } from '../utils/makeCardsList';
import './../styles/home.scss'

export function Home() {

    const cards = makeCardsList()

    return (
        <div className='home'>
            <Navbar />
            <div className='home-main'>
                <h1 className='home-main_header'>Find your ideal home</h1>
                <h3 className='home-main_hero'>Search from more than 19 million of inspected appartments, houses, cottages, villas, manors and mansions</h3>
                <SearchBar placeholder='Search for address' onChange={(event) => {handleChange(event.target.value)}}/>
                <>{cards}</>
            </div>
            <Footer />
        </div>
    )
}