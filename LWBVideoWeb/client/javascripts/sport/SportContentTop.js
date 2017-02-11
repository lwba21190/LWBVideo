import React,{Component,PropTypes} from 'react';
import SportContentTopItem from './SportContentTopItem';

var info;
var width;
var height;

class SportContentTop extends Component{

    static propTypes = {
        info: PropTypes.array.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: [],
        width: 1280,
        height: 600,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    constructor(props){
        super(props);
        this.state = {
            index:0,
            itemIndex:0
        }
    }

    componnetWillUpdate(props){
        info = props.info;
    }

    render(){
        var self = this;
        var item = info[this.state.index];
        return (
            <div style={{display:'flex',flexDirection:'column',width:width,height:height,background:'url(http://mat1.gtimg.com/v/2015vchannel/images/sports_focus_bg.jpg) no-repeat' }}>
                <div style={{display:'flex',width:width,justifyContent:'space-between'}}>
                    <div style={{display:'flex',width:850,height:height-40}}>
                        <video width='100%' height='100%'  src={item.content[self.state.itemIndex].src} controls="controls" style={{backgroundColor:'black'}}>该浏览器暂不支持video影片</video>
                    </div>
                    <div style={{width:420,height:height-40}}>
                        <ul style={{overflowY:'scroll',overflowX:'hidden',display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'100%',height:'100%'}}>
                            {
                                item.content.map(function(value,index,array){
                                    var selected = self.state.itemIndex == index;
                                    return (
                                        <li key={index} style={{display:'flex',width:204,height:120}}
                                        onClick={()=>self.setState({itemIndex:index})}>
                                            <SportContentTopItem info={value} selected={selected}/>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <ul style={{display:'flex',justifyContent:'center',alignItems:'center',height:40}}>
                        {
                            info.map(function(value,index,array){
                                var color = (self.state.index == index)?'white':'#999';
                                return (
                                    <li key={index} style={{width:100,height:20,textAlign:'center',padding:5,margin:10,borderStyle:'solid',borderWidth:1,borderColor:color,color:color}}
                                        onClick={()=>self.setState({index:index,itemIndex:0})}>
                                        {value.title}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SportContentTop;