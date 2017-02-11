import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import SportContent from './SportContent'
import sportHeaderInfo from '../../data/sportHeaderInfo.json';

class Series extends Component{

    render(){
        return (
            <div style={{width:1280,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Search  info={sportHeaderInfo.data["search_content"]}/>
                <Nav info={sportHeaderInfo.data["nav"]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',position:'absolute',top:120}}>
                    <SportContent />
                </div>
            </div>
        );
    }
}

export default Series;