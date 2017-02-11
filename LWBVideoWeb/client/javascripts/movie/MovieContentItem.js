import React,{Component,PropTypes} from 'react';
import ContentMostSmallItem from '../components/ContentMostSmallItem';
import MovieContentLargeItem from './MovieContentLargeItem';

var widthSpacing = 20;
var heightSpacing = 20;

var info;
var width;
var height;
var smallItemWidth;
var smallItemHeight;

class MovieContentItem extends Component{

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
                        if(index == 0){
                            return (
                                <li style={{display:'inline-block',backgroundColor:'#cccccc'}} key={index}><MovieContentLargeItem info={value} width={smallItemWidth*2+widthSpacing} height={smallItemHeight}/></li>
                            );
                        }
                        return (
                            <li style={{display:'inline-block'}} key={index}><ContentMostSmallItem info={value} width={smallItemWidth} height={smallItemHeight}/></li>
                        );
                    })}
            </ul>
        );
    }
}

export default MovieContentItem;