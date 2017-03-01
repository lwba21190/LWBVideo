import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import MovieContent from './MovieContent'
import movieHeaderInfo from '../../data/movieHeaderInfo.json';

class Movie extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Slider info={movieHeaderInfo.data["background_slider"]} />
                <Search  info={movieHeaderInfo.data["search_content"]}/>
                <Nav info={movieHeaderInfo.data["nav"]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <MovieContent />
                </div>
            </div>
        );
    }
}

export default Movie;
