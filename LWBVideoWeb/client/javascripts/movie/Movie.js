import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import MovieContent from './MovieContent'
import config from '../../data/config.json';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieHeaderInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/movieHeaderInfo.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    movieHeaderInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var movieHeaderInfo = this.state.movieHeaderInfo;
        return (
            <div>
                <Slider info={(movieHeaderInfo && movieHeaderInfo.data["background_slider"]) || []} />
                <Search  info={(movieHeaderInfo && movieHeaderInfo.data["search_content"]) || ""}/>
                <Nav info={(movieHeaderInfo && movieHeaderInfo.data["nav"]) || []}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <MovieContent />
                </div>
            </div>
        );
    }
}

export default Movie;
