import React,{Component,PropTypes} from 'react';
import ContentMiddleItem from './ContentMiddleItem';
import ContentMiddleItem1 from './ContentMiddleItem1';

var widthSpacing = 20;
var heightSpacing = 20;

var info;
var width;
var height;
var itemWidth;
var itemHeight;

class ContentType2 extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        lineItemCount:PropTypes.number,
        type: PropTypes.number
    };

    static defaultProps = {
        info: null,
        width: 1240,
        height: 360,
        lineItemCount:5,
        type: 0
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
        itemWidth = (width - widthSpacing*(this.props.lineItemCount-1))/this.props.lineItemCount;
        itemHeight = height-40;
    }

    render(){
        var info = this.props.info;
        return (
            <div style={{display:'flex',width:width,flexDirection:'column'}}>
                <h2 style={{display:'flex',height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                {this.renderItem(info.content)}
            </div>
        );
    }

    renderItem(info){
        var self = this;
        return (
            <ul style={{display:'flex',width:'100%',justifyContent:'space-between',flexWrap:'wrap'}}>
                {
                    info.map(function(value,index,array){
                    if(self.props.type == 1){
                        return (
                            <li style={{display:'inline-block'}} key={index}>
                                <ContentMiddleItem1 info={value} width={itemWidth}/>
                            </li>
                        );
                    }
                    return (
                        <li style={{display:'inline-block'}} key={index}>
                            <ContentMiddleItem info={value} width={itemWidth}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ContentType2;