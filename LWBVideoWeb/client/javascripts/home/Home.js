import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import HomeContent from './HomeContent'
import styles from '../../stylesheets/home.css';
import homeHeaderInfo from '../../data/homeHeaderInfo.json';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{width:1280,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Slider info={homeHeaderInfo.data["background_slider"]} />
                <Search info={homeHeaderInfo.data["search_content"]}/>
                <Nav info={homeHeaderInfo.data["nav"]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <HomeContent />
                </div>
            </div>
        );
    }
}

export default Home;