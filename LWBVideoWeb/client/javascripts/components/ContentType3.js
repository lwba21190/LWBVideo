import React,{Component,PropTypes} from 'react';
import ContentStarItem from './ContentStarItem';

var widthSpacing = 40;
var heightSpacing = 20;

var info;
var width;
var height;
var itemWidth;
var itemHeight;


class ContentType3 extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        lineItemCount: PropTypes.number
    };

    static defaultProps = {
        info: null,
        width: 1240,
        height: 200,
        lineItemCount: 8
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
        itemWidth = (width - widthSpacing*(this.props.lineItemCount-1))/this.props.lineItemCount;
        itemHeight = height-40;
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
        return (
            <ul style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                {
                    info.map(function(value,index,array){
                    return (
                        <li style={{display:'inline-block'}} key={index}><ContentStarItem info={value} width={itemWidth} height={itemHeight}/></li>
                    );
                })}
            </ul>
        );
    }
}

export default ContentType3;