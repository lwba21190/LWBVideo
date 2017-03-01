import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import VarietyContent from './VarietyContent'
import varietyHeaderInfo from '../../data/varietyHeaderInfo.json';

class Variety extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Slider info={varietyHeaderInfo.data["background_slider"]} />
                <Search  info={varietyHeaderInfo.data["search_content"]}/>
                <Nav info={varietyHeaderInfo.data["nav"]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <VarietyContent />
                </div>
            </div>
        );
    }
}

export default Variety;
