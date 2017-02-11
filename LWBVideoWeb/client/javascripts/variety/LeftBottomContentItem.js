import React,{Component,PropTypes} from 'react';
import HomeContentMostSmallItem from '../components/ContentMostSmallItem';

var widthSpacing = 20;
var heightSpacing = 20;

var info;
var width;
var height;
var smallItemWidth;
var smallItemHeight;

class LeftBottomContentItem extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        lineItemCount: PropTypes.number,
        lineCounts:  PropTypes.number
    };

    static defaultProps = {
        info: null,
        width: 1240,
        height:180,
        lineItemCount:5,
        lineCounts:1
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
        smallItemWidth = (width - widthSpacing*(this.props.lineItemCount-1))/this.props.lineItemCount;
        smallItemHeight = (height - 30 - heightSpacing*(this.props.lineCounts-1))/this.props.lineCounts;
    }

    render(){
        return (
            <div style={{display:'flex',width:width,height:height,flexDirection:'column',marginBottom:20}}>
                <div style={{display:'flex',paddingTop:5,paddingBottom:5}}>
                    <img src={info.image} style={{width:25,height:25}}/>
                    <h3 style={{display:'flex',height:25,fontSize:20,alignItems:'center',color:'#999',marginLeft:5}}>{info.title}</h3>
                </div>
                {this.renderItem(info.content)}
            </div>
        );
    }

    renderItem(info){
        var self = this;
        return (
            <ul style={{display:'flex',width:width,height:height-40,justifyContent:'space-between'}}>
                {
                    info.map(function(value,index,array){
                    return (
                        <li style={{display:'inline-block'}} key={index}><HomeContentMostSmallItem info={value} width={smallItemWidth} height={smallItemHeight}/></li>
                    );
                })}
            </ul>
        );
    }
}

export default LeftBottomContentItem;