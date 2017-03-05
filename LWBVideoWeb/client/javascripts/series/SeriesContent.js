import React,{Component} from 'react';
import config from '../../data/config.json'
import ContentType0 from '../components/ContentType0';
import ContentType1 from '../components/ContentType1';
import ContentType2 from '../components/ContentType2';
import ContentType3 from '../components/ContentType3';
import LWBVideoFooter from '../components/LWBVideoFooter';

class HomeContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            seriesContentInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/seriesContent.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    seriesContentInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var seriesContentInfo = this.state.seriesContentInfo;
        return (
            <div style={{display:'flex',width:1240,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                {seriesContentInfo && this.renderContent(seriesContentInfo)}
                <LWBVideoFooter />
            </div>
        );
    }

    renderContent(seriesContentInfo){
        var view = [];
        var data = seriesContentInfo.data;
        for(var i = 0; i < data.length; i++) {
            var item = data[i];
            switch (item.type) {
                case 0: {
                    view.push(<ContentType0 key={i} info={item} lineItemCount={5}/>);
                    break;
                }
                case 1:{
                    view.push(<ContentType1 key={i} info={item} lineItemCount={5}  height={380} lineCounts={2}/>);
                    break;
                }
                case 2:{
                    view.push(<ContentType2 key={i} info={item} lineItemCount={6}/>);
                    break;
                }
                case 3:{
                    view.push(<ContentType3 key={i} info={item} lineItemCount={8}/>);
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
        return this.state.seriesContentInfo !== nextState.seriesContentInfo;
    }
}

export default HomeContent;
