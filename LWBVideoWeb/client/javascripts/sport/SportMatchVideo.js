import React, {Component,PropTypes} from 'react';

import ContentMiddleItem from '../components/ContentMiddleItem';

var info;
var width;
var height;

class SportMatchVideo extends Component {

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: {},
        width: 1280,
        height: 720,
    };

    constructor(props) {
        super(props);
        this.state = {
            index:0,
            teamsItemIndex:0,
            ballstarItemIndex:-1,
            teamsShowOrHidden: false,
            ballstarShowOrHidden: false
        }
    }

    componentWillMount() {
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    componentWillUpdate(props) {
        info = this.props.info;
    }

    render(){
        var self = this;
        return (
            <div style={{display:'flex',width:width,height:height,flexDirection:'column'}}>
                <h2 style={{height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                <ul style={{display:'flex',borderStyle:'solid',borderWidth:1,borderColor:'#999',height:50}}>
                    {
                        info.content.map(function(value,index,array){
                            var backgroundColor = (self.state.index == index)?"#ff920b":"white";
                            var fontColor =  (self.state.index == index)?"white":"black";
                            return (
                                <li key={index} style={{display:"flex",width:80,height:50,justifyContent:'center',alignItems:'center',backgroundColor:backgroundColor,borderRightStyle:'solid',borderRightWidth:1,borderRightColor:'#999'}}
                                    onClick={()=>self.setState({index:index,teamsItemIndex:0,ballstarItemIndex:0})}>
                                    <a href="javascript:void(0);" style={{fontSize:20,color:fontColor}}>{value.title}</a>
                                </li>
                            )})
                    }
                </ul>
                <div style={{display:'flex',marginTop:10,justifyContent:'space-between'}}>
                    {this.renderLeft(info.content[self.state.index])}
                    {this.renderRight(info.content[self.state.index])}
                </div>
            </div>
        );
    }

    renderLeft(data){
        var self = this;
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:416,height:620,backgroundColor:'#f4f4f4',overflowX:'hidden',overflowY:'scroll'}}>
                <div>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                        <h3>球队</h3>
                        <a href="javascript:void(0);" style={{fontSize:12}} onClick={()=>self.setState({teamsShowOrHidden:!self.state.teamsShowOrHidden})}>
                            {self.state.teamsShowOrHidden?'收起':'全部'}
                        </a>
                    </div>
                    <ul style={{display:'flex',width:396,height:self.state.teamsShowOrHidden?'auto':250,overflow:'hidden',justifyContent:'space-between',flexWrap:'wrap'}}>
                        {
                            data.teams.map(function(value,index,array){
                                var backgroundColor = (self.state.teamsItemIndex==index)?'#ff920b':'white';
                                return (
                                    <li key={index} style={{display:'flex',marginTop:(index>3)?8:0,width:93, height:120,backgroundColor:backgroundColor}}
                                        onClick={()=>self.setState({teamsItemIndex:index,ballstarItemIndex:-1})}>
                                        <a href="javascript:void(0)" style={{display:'flex',justifyContent:'center',width:93, height:120,alignItems:'center',flexDirection:'column'}}>
                                            <img src={value.icon} width={50} height={50} />
                                            <span style={{fontSize:14,color:'#222',marginTop:5,textAlign:'center', whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis',width:80}}>{value.name}</span>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div style={{marginTop:20}}>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                        <h3>球员</h3>
                        <a href="javascript:void(0);" style={{fontSize:12}} onClick={()=>self.setState({ballstarShowOrHidden:!self.state.ballstarShowOrHidden})}>
                            {self.state.ballstarShowOrHidden?'收起':'全部'}
                        </a>
                    </div>
                    <ul style={{display:'flex',width:396,height:self.state.ballstarShowOrHidden?'auto':250,overflow:'hidden',justifyContent:'space-between',flexWrap:'wrap'}}>
                        {
                            data.ballStars.map(function(value,index,array){
                                var borderColor = (self.state.ballstarItemIndex==index)?'#ff920b':'white';
                                return (
                                    <li key={index} style={{display:'flex',marginTop:(index>3)?8:0,width:93, height:120,backgroundColor:'white',borderWidth:1,borderStyle:'solid',borderColor:borderColor}}
                                        onClick={()=>{self.setState({ballstarItemIndex:index,teamsItemIndex:-1})}}>
                                        <a href="javascript:void(0)" style={{display:'flex',justifyContent:'center',alignItems:'center',width:93, height:120,flexDirection:'column'}}>
                                            <img src={value.icon} width={80} height={90} />
                                            <span style={{fontSize:14,color:'#222',marginTop:5,textAlign:'center', whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis',width:80}}>{value.name}</span>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    renderRight(data){
        var self = this;
        return (
            <div style={{display: 'flex',width:860,height:600}}>
                <ul style={{display:"flex",width:860,height:600,flexWrap:'wrap'}}>
                    {
                        data.videos.map(function(value,index,array){
                            return (
                                <li key={index} style={{display:"flex",padding:7,flexDirection:'column'}}>
                                    <div style={{display:'flex',position:'relative'}}>
                                        <a href={value.link} target="_blank" style={{width:200,height:120}}>
                                            <img src={value.image} style={{width:200,height:120}}/>
                                            <div style={{position:'absolute',bottom:0,left:0,width:200,backgroundColor:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center'}}>
                                                <p style={{fontSize:14,color:'white',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'keep-all',width:200}}>{value.subtitle}</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <p style={{fontSize:14,color:'#222',maxLines:2,overflow:'hidden',textOverflow:'ellipsis',width:200}}>
                                            <a href={value.link} target="_blank">
                                                {value.maintitle}
                                            </a>
                                        </p>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default SportMatchVideo;