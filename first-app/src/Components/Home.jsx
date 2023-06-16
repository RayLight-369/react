import Filterbox from "./Filterbox";
import "../Utilities/Css/Home.css"
import "../Utilities/Css/Card.css"
import "../Utilities/Css/Searchbox.css"
import Card from "./Card";
import im from "../Utilities/Imgs/laptop.svg"
import Searchbox from "./Searchbox";

export default function Home() {
    return (
        <>
            <Filterbox />
            <Searchbox />
            <div className="card-container">
                <section id="recommended">
                    <p className="section-title">Recommended</p>
                    <div className="cards">
                        <Card title={ "ddr5 HP Laptop with 16gb ram and ...." } location={ "Model Town Lahore, Block H" } price={ 150000 } stars={ 5 } img={ im }/>
                        <Card title={ "ddr5 HP Laptop with 16gb ram and ...." } location={ "Model Town Lahore, Block H" } price={ 150000 } stars={ 4 } img={ im }/>
                        <Card title={ "ddr5 HP Laptop with 16gb ram and ...." } location={ "Model Town Lahore, Block H" } price={ 150000 } stars={ 4 } img={ im }/>
                        <Card title={ "ddr5 HP Laptop with 16gb ram and ...." } location={ "Model Town Lahore, Block H" } price={ 150000 } stars={ 4 } img={ im }/>
                        <Card title={ "ddr5 HP Laptop with 16gb ram and ...." } location={ "Model Town Lahore, Block H" } price={ 150000 } stars={ 4 } img={ im }/>
                        <Card title={ "ddr5 HP Laptop with 16gb ram and ...." } location={ "Model Town Lahore, Block H" } price={ 150000 } stars={ 4 } img={ im }/>
                        <Card title={ "ddr5 HP Laptop with 16gb ram and ...." } location={ "Model Town Lahore, Block H" } price={ 150000 } stars={ 4 } img={ im } />
                    </div>                
                </section>
                
            </div>
        </>
    )
}