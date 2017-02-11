import React,{Component,PropTypes} from 'react';
import SportContentTopItem from './SportContentTopItem';

var info;
var width;
var height;

class SportScheduleLiveTable extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: [],
        width: 1280,
        height: 330,
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

    render(){
        var self = this;
        return (
            <div style={{display:'flex',flexDirection:'column',width:width,height:height}}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <h2 style={{height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                    <ul style={{display:'flex'}}>
                        {
                            info.content.map(function(value,index,array){
                                var backgroundColor = (self.state.index == index)?"#ff920b":"white";
                                var fontColor =  (self.state.index == index)?"white":"black";
                                return (
                                    <li key={index} style={{display:"flex",paddingLeft:10,paddingRight:10,marginLeft:20,fontSize:16,color:fontColor,backgroundColor:backgroundColor}}
                                        onClick={()=>self.setState({index:index,itemIndex:0})}>
                                        {value.title}
                                    </li>
                                )})
                        }
                    </ul>
                </div>
                <div style={{display:'flex',marginTop:10}}>
                    <p style={{width:200,height:80,fontSize:20,borderWidth:1,borderColor:'#999',borderStyle:"solid",display:'flex',justifyContent:'center',alignItems:'center'}}>{info.content[self.state.index].header}</p>
                    <ul style={{display:'flex'}}>
                        {
                            info.content[self.state.index].items.map(function(value,index,array){
                                return (
                                    <li key={index} style={{
                                            display:"flex",
                                            flexDirection:'column',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            width:120,
                                            height:80,
                                            borderStyle:'solid',
                                            borderTopWidth:(self.state.itemIndex == index)?2:1,
                                            borderBottomWidth:1,
                                            borderRightWidth:1,
                                            borderLeftWidth:0,
                                            borderColor:'#999',
                                            borderTopColor:(self.state.itemIndex == index)?'#222':'#999',
                                            backgroundColor:(self.state.itemIndex == index)?'#ccc':'white'}}
                                            onClick={()=>self.setState({itemIndex:index})}>
                                        <p  style={{fontSize:14,fontWeight:((self.state.itemIndex == index)?'bold':'normal')}}>{value.time.date}</p>
                                        <div style={{display:'flex'}}>
                                            <p style={{color:'#999',fontSize:12,fontWeight:((self.state.itemIndex == index)?'bold':'normal')}}>{value.time.weekday}</p>
                                            <span style={{marginLeft:5,color:'#999',fontSize:12,fontWeight:((self.state.itemIndex == index)?'bold':'normal')}}>{value.time.screenings}</span>
                                        </div>
                                    </li>
                                )})
                        }
                    </ul>
                </div>
                <div style={{width:width,backgroundColor:'#f4f4f4',alignItems:'center',overflow:'hidden'}}>
                    <ul   style={{display:'flex',width:width,overflowX:'scroll',overflowY:'hidden',height:200,alignItems:'center'}}>
                        {
                            info.content[self.state.index].items[self.state.itemIndex].match.map(function(value,index,array){
                                return (
                                    <li key={index} style={{display:'flex',flexDirection:'column',width:210,alignItems:'center',justifyContent:'space-around'}}>
                                        <div style={{display:'flex',width:210,justifyContent:'space-around'}}>
                                            <div style={{display:'flex',flexDirection:'column',width:80,alignItems:'center'}}>
                                                <img src={value.team[0].icon} width={80} height={80} />
                                                <p style={{fontSize:14,color:'#999'}}>{value.team[0].name}</p>
                                            </div>
                                            <div style={{display:'flex',flexDirection:'column',width:80,alignItems:'center'}}>
                                                <img src={value.team[1].icon} width={80} height={80} />
                                                <p  style={{fontSize:14,color:'#999'}}>{value.team[1].name}</p>
                                            </div>
                                        </div>
                                        <p style={{fontSize:12,padding:5}}>{value.time}</p>
                                        <a href={(value.link != "")?value.link :'javascript:void(0);'} style={{fontSize:14,padding:5,color:'#222',backgroundColor:'white'}}>{value.remind}</a>
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

export default SportScheduleLiveTable;