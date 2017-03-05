import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import SeriesContent from './SeriesContent'
import config from '../../data/config.json';

class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            seriesHeaderInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/seriesHeaderInfo.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    seriesHeaderInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var seriesHeaderInfo = this.state.seriesHeaderInfo;
        return (
            <div>
                <Slider info={(seriesHeaderInfo && seriesHeaderInfo.data["background_slider"])||[]} />
                <Search  info={(seriesHeaderInfo && seriesHeaderInfo.data["search_content"])||""}/>
                <Nav info={(seriesHeaderInfo && seriesHeaderInfo.data["nav"])||[]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <SeriesContent />
                </div>
            </div>
        );
    }
}

export default Series;
