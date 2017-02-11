import React,{Component,PropTypes} from 'react';

var info;
var width;
var height;

class SportWonderfulMedia extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: [],
        width: 1280,
        height: 185,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    constructor(props){
        super(props);
        this.state={
            index: -1
        }
    }

    render(){
        var self = this;
        return (
            <div style={{display:'flex',flexDirection:'column',width:width,height:height}}>
                <h2 style={{height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                <ul style={{display:'flex',height:height-40,justifyContent:'space-between',alignItems:'center'}}
                    onMouseLeave={()=>this.setState({index:-1})}>
                    {
                        info.content.map(function(value,index,array){
                            var backgroundColor = (self.state.index == index)?"#ccc":"white";
                            return (
                                <li key={index} style={{display:"flex",width:100,padding:10,backgroundColor:backgroundColor,flexDirection:'column',justifyContent:'center',alignItems:'center'}}
                                    onMouseEnter={()=>self.setState({index:index})}>
                                    <a href={value.link} target="_blank"><img src={value.image} width={100} height={100}/></a>
                                    <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                                        <a href={value.link} target="_blank" style={{fontSize:12,fontColor:"#222"}}>{value.maintitle}</a>
                                        <p style={{backgroundColor:'#ff920b',width:30,textAlign:'center',fontSize:12,fontColor:"white"}}>{value.subtitle}</p>
                                    </div>
                                </li>
                            )})
                    }
                </ul>
            </div>
        );
    }
}

export default SportWonderfulMedia;