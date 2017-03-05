import React,{Component} from 'react';
import config from '../../data/config.json';
import ContentType0 from '../components/ContentType0';
import ContentType1 from '../components/ContentType1';
import ContentType2 from '../components/ContentType2';
import LWBVideoFooter from '../components/LWBVideoFooter';

class HomeContent extends Component{

    constructor(props){
        super(props);
        this.state = {
            homeContentInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/homeContent.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    homeContentInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var homeContentInfo = this.state.homeContentInfo;
        return (
            <div style={{display:'flex',width:1240,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                {homeContentInfo && this.renderContent(homeContentInfo)}
                <LWBVideoFooter />
            </div>
        );
    }

    renderContent(homeContentInfo){
        var view = [];
        var data = homeContentInfo.data;
        for(var i = 0; i < data.length; i++) {
            var item = data[i];
            switch (item.type) {
                case 0: {
                    view.push(<ContentType0 key={i} info={item} lineItemCount={5}/>);
                    break;
                }
                case 1:{
                    view.push(<ContentType1 key={i} info={item} lineItemCount={5}/>);
                    break;
                }
                case 2:{
                    view.push(<ContentType2 key={i} info={item} lineItemCount={5}/>);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return view;
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.homeContentInfo != nextState.homeContentInfo;
    }
}

export default HomeContent;
