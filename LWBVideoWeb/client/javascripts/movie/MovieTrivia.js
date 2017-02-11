import React,{Component, PropTypes} from 'react';
import ContentSmallItem from '../components/ContentSmallItem';
import MovieTriviaItem from './MovieTriviaItem';

var widthSpacing = 20;
var heightSpacing = 20;

var info;
var width;
var height;
var smallItemWidth;
var smallItemHeight;

class Trivia extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: null,
        width: 972,
        height: 610,
    };

    constructor(props){
        super(props);
        this.state={
            upDownFlag: true
        }
    }

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
        smallItemWidth = (this.props.width - 4*widthSpacing)/5;
        smallItemHeight = 140;
    }

    componentWillReceiveProps(props){
        info = props.info;
        width = props.width;
        height = props.height;
        smallItemWidth = (props.width - 4*widthSpacing)/5;
        smallItemHeight = 140;
    }

    render(){
        var self = this;
        return (
            <div style={{display:'flex',width:width,flexDirection:'column'}}>
                <h2 style={{height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                <div style={{display:'flex',flexDirection:'column',width:width}}>
                    <div style={{display:'flex',width:width,justifyContent:'space-between'}}>
                        <div style={{width:576,height:300}}>
                            <video width="100%" style={{backgroundColor:'black'}} height="100%" src={info.largeItem.src} controls="controls">该浏览器暂不支持video影片</video>
                        </div>
                        <ul style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:(smallItemWidth*2+widthSpacing)}}>
                            {
                                info.smallItems.map(function(value,index,array){
                                    return (
                                        <li key={index} style={{display:'inline-block'}}>
                                            <ContentSmallItem info={value} width={smallItemWidth} height={smallItemHeight}/>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <ul style={{display:'flex',overflow:'hidden',justifyContent:'space-between',marginTop:20,borderTopStyle:'solid',borderTopWidth:1,borderTopColor:'#909090',height:self.state.upDownFlag?320:'auto'}}>
                        {
                            info.middleItems.map(function(value,index,array){
                                return (
                                    <li key={index} style={{display:'inline-block'}}>
                                        <MovieTriviaItem info={value} width={120}/>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <a style={{display:'flex',width:'100%',height:30,justifyContent:'center',alignItems:'center',borderStyle:'solid',borderWidth:1,borderColor:'#cccccc'}}
                        onClick={()=>self.setState({upDownFlag:!self.state.upDownFlag})}>
                        <span><img src={this.state.upDownFlag?"images/down.png":"images/up.png"} style={{width:16,height:16}}/></span>
                        <p style={{marginLeft:10}}>{this.state.upDownFlag?"查看全部":"收起"}</p>
                    </a>
                </div>
            </div>
        );
    }

    renderList(list){
        return (
            <ul style={{backgroundColor:'#f0f0f0'}}>
                {
                    list.map(function(value,index,array){
                        if((index !=0 && index != 1)){
                            return   (
                                <li key={index} style={{width:width,padding:5,marginLeft:5}}>
                                    <a href={value.link} target="_blank" style={{
                                        width:width,
                                        height:20,
                                        fontSize: 14,
                                        whiteSpace: 'nowrap',
                                        wordBreak: 'keep-all',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {value.title}
                                    </a>
                                </li>);
                        }
                        return (
                            <li key={index} style={{width:width,padding:10,marginLeft:5}}>
                                <a href={value.link} target="_blank" style={{
                                    display:'flex',
                                    whiteSpace: 'nowrap',
                                    wordBreak: 'keep-all',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    <img src={value.image} style={{width:80,height:50}}/>
                                    <div style={{display:'flex',flexDirection:'column',marginLeft:5,justifyContent:'center'}}>
                                        <span style={{fontSize:14,padding:2,whiteSpace: 'nowrap',wordBreak: 'keep-all',overflow: 'hidden',textOverflow: 'ellipsis'}}>{value.maintitle}</span>
                                        <span style={{
                                            color: '#999',
                                            fontSize: 12,
                                            padding:2,
                                            whiteSpace: 'nowrap',
                                            wordBreak: 'keep-all',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>{value.subtitle}</span>
                                    </div>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default Trivia;