import React,{Component} from 'react';
import Search from '../components/Search'
import Nav from '../components/Nav'
import SportContent from './SportContent'
import config from '../../data/config.json';

class Sport extends Component{
    constructor(props){
        super(props);
        this.state = {
            sportHeaderInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/sportHeaderInfo.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    sportHeaderInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var sportHeaderInfo = this.state.sportHeaderInfo;
        return (
            <div>
                <Search  info={(sportHeaderInfo && sportHeaderInfo.data["search_content"])||[]}/>
                <Nav info={(sportHeaderInfo && sportHeaderInfo.data["nav"])||[]}/>
                <div style={{width:1280,display:'flex',justifyContent:'center',position:'absolute',top:120}}>
                    <SportContent />
                </div>
            </div>
        );
    }
}

export default Sport;
