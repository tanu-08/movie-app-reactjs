import {Component} from "react";

class MovieCard extends Component{
    constructor(){
        super();
        this.state = {
            title: "The Avengers",
            plot: "SuperNatural Powers are shown",
            price: 199,
            rating: 8.9,
            stars: 0
        }
    }
    addStars =() =>{
        this.setState({
            stars: this.state.stars+0.5
        })
    }
    render(){
        const {title,plot,price,rating,stars} = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg"/>
                    </div>
                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" className="str-btn" onClick={this.addStars}/>
                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn"/>
                                <span className="stars">{stars}</span>
                            </div>
                            <button className="favourite-btn">Favorite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard