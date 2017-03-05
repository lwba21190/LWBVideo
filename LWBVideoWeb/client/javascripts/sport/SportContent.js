import React,{Component} from 'react';
import LWBVideoFooter from '../components/LWBVideoFooter';
import SportContentTop from './SportContentTop';
import config from '../../data/config.json';
import SportScheduleLiveTable from './SportScheduleLiveTable';
import ContentType1 from '../components/ContentType1';
import SportMatchVideo from './SportMatchVideo';
import SportContentItem from './SportContentItem';
import SportWonderfulMedia from './SportWonderfulMedia';

class SportContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            sportContentInfo: null
        }
    }

    componentDidMount(){
        var self = this;
        fetch(config.host+"/data/sportContent.json")
            .then((res)=>res.json())
            .then((resJson)=>{
                self.setState({
                    sportContentInfo: resJson
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render(){
        var sportContentInfo = this.state.sportContentInfo;
        if(!sportContentInfo) return(<div></div>);
        return (
            <div style={{display:'flex',width:1280,flexDirection:'column'}}>
                <SportContentTop info={sportContentInfo.data.contentTop}/>
                <div style={{marginTop:20}}>
                    <SportScheduleLiveTable info={sportContentInfo.data.sportScheduleLiveTable} />
                </div>
                <div style={{marginTop:20}}>
                    <ContentType1 info={sportContentInfo.data.recommendedForYou} width={1280} height={360} lineItemCount={6} lineCounts={2} />
                </div>
                <div style={{marginTop:20}}>
                    <SportMatchVideo info={sportContentInfo.data.matchVideo} width={1280} height={720}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.yingchao} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.ouguan} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.zhongchao} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.quanlilianmeng} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.gongfuboji} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.jixianyundong} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.kuxuantitan} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportContentItem info={sportContentInfo.data.tiyuanchuangshipin} lineItemCount={6}/>
                </div>
                <div style={{marginTop:20}}>
                    <SportWonderfulMedia info={sportContentInfo.data.jingcaiyuanmeiti}/>
                </div>
                <LWBVideoFooter />
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.sportContentInfo !== nextState.sportContentInfo;
    }
}

export default SportContent;
