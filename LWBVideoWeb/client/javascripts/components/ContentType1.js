import React,{Component,PropTypes} from 'react';
import HomeContentMostSmallItem from './ContentMostSmallItem';

var widthSpacing = 20;
var heightSpacing = 20;

var info;
var width;
var height;
var smallItemWidth;
var smallItemHeight;

class ContentType1 extends Component{

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
        height:200,
        lineItemCount:5,
        lineCounts:1
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
        smallItemWidth = (width - widthSpacing*(this.props.lineItemCount-1))/this.props.lineItemCount;
        smallItemHeight = (height - 40 - heightSpacing*(this.props.lineCounts-1))/this.props.lineCounts;
    }

    componentWillReceiveProps(props){
        info = props.info;
        width = props.width;
        height = props.height;
        smallItemWidth = (width - widthSpacing*(props.lineItemCount-1))/props.lineItemCount;
        smallItemHeight = (height - 40 - heightSpacing*(props.lineCounts-1))/props.lineCounts;
    }

    render(){
        return (
            <div style={{display:'flex',width:width,height:height,flexDirection:'column',marginBottom:20}}>
                <h2 style={{display:'flex',height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                {this.renderItem(info.content)}
            </div>
        );
    }

    renderItem(info){
        var self = this;
        return (
            <ul style={{display:'flex',width:width,height:height-40,justifyContent:'space-between',flexWrap:'wrap'}}>
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

export default ContentType1;