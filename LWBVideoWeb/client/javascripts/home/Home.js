import React,{Component} from 'react';
import Slider from '../components/Slider'
import Search from '../components/Search'
import Nav from '../components/Nav'
import HomeContent from './HomeContent'
import config from '../../data/config.json';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            homeHeaderInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/homeHeaderInfo.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    homeHeaderInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var homeHeaderInfo = this.state.homeHeaderInfo;
        return (
            <div style={{display:'flex'}}>
                <Slider info={(homeHeaderInfo && homeHeaderInfo.data["background_slider"])||[]} />
                <Search info={(homeHeaderInfo && homeHeaderInfo.data["search_content"]) || ""}/>
                <Nav info={(homeHeaderInfo && homeHeaderInfo.data["nav"]) || []}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',backgroundColor:'white',position:'absolute',zIndex:1,top:520}}>
                    <HomeContent />
                </div>
            </div>
        );
    }
}

export default Home;
