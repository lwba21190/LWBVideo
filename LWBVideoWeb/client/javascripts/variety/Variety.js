import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import VarietyContent from './VarietyContent'
import config from '../../data/config.json';

class Variety extends Component{
    constructor(props){
        super(props);
        this.state = {
            varietyHeaderInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/varietyHeaderInfo.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    varietyHeaderInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var varietyHeaderInfo = this.state.varietyHeaderInfo;
        return (
            <div>
                <Slider info={(varietyHeaderInfo && varietyHeaderInfo.data["background_slider"])||[]} />
                <Search  info={(varietyHeaderInfo && varietyHeaderInfo.data["search_content"])||""}/>
                <Nav info={(varietyHeaderInfo && varietyHeaderInfo.data["nav"])||[]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <VarietyContent />
                </div>
            </div>
        );
    }
}

export default Variety;
