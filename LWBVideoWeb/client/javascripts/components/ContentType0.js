import React,{Component,PropTypes} from 'react';
import ContentLargeItem from './ContentLargeItem';
import ContentSmallItem from './ContentSmallItem';

var widthSpacing = 20;
var heightSpacing = 20;

var info;
var width;
var height;
var smallItemWidth;
var smallItemHeight;
var largeItemWidth;
var largeItemHeight;


class ContentType0 extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        lineItemCount:PropTypes.number
    };

    static defaultProps = {
        info: null,
        width: 1240,
        height: 420,
        lineItemCount:5
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
        smallItemWidth = (width - widthSpacing*(this.props.lineItemCount-1))/this.props.lineItemCount;;
        smallItemHeight = (height - 40 - heightSpacing)/2;
        largeItemWidth = smallItemWidth*2 + widthSpacing;
        largeItemHeight = smallItemHeight*2 + heightSpacing;
    }

    render(){
        return (
            <div style={{display:'flex',width:this.props.width,height:this.props.height,flexDirection:'column',marginBottom:20,overflow:'hidden'}}>
                <h2 style={{display:'flex',height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                <div style={{display:'flex',width:this.props.width,height:this.props.largeItemHeight}}>
                    <ContentLargeItem info={info.content[0]} width={largeItemWidth} height={largeItemHeight} />
                    {this.renderSmallItems(info.content.slice(1))}
                </div>
            </div>
        );
    }

    renderSmallItems(data){
        var self = this;
        return (
            <ul style={{display:'flex',width:smallItemWidth*3+widthSpacing*2,height:largeItemHeight,justifyContent:'space-between',flexWrap:'wrap',marginLeft:20}}>
                {
                    data.map(function(value,index,array){
                        return (<li key={index} style={{display:'inline-block'}}><ContentSmallItem info={value} width={smallItemWidth} height={smallItemHeight}/></li>);
                    })
                }
            </ul>
        );
    }
}

export default ContentType0;