import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import SeriesContent from './SeriesContent'
import seriesHeaderInfo from '../../data/seriesHeaderInfo.json';

class Series extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{width:1280,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Slider info={seriesHeaderInfo.data["background_slider"]} />
                <Search  info={seriesHeaderInfo.data["search_content"]}/>
                <Nav info={seriesHeaderInfo.data["nav"]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <SeriesContent />
                </div>
            </div>
        );
    }
}

export default Series;