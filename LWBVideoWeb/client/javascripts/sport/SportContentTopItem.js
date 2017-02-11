import React,{Component,PropTypes} from 'react';
import $ from 'jquery';

var info;
var width;
var height;

class SportContentTopItem extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        selected: PropTypes.bool.isRequired
    };

    static defaultProps = {
        info: {},
        width: 204,
        height:120,
        selected:false
    };

    constructor(props){
        super(props);
        this.state = {
            showOrHidden: false
        }
    }

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    componentWillUpdate(props){
        info = this.props.info;
    }


    render(){
        var self = this;
        return (
            <div style={{width:width,height:height,position:'relative'}}
                onMouseEnter={()=>this.setState({showOrHidden:true})}
                onMouseLeave={()=>this.setState({showOrHidden:false})}>
                <img src={info.image} width={width} height={height}/>
                <div style={{width:'100%',position:'absolute',bottom:0,left:0,textAlign:'center',backgroundColor:'rgba(0,0,0,0.6)',display:(this.state.showOrHidden?'none':'inline')}}>
                    <p style={{fontSize:14,color:'white'}}>{info.maintitle}</p>
                </div>
                <div style={{backgroundColor:'rgba(0,0,0,0.6)',position:'absolute',width:'100%',height:'100%',top:0,left:0,display:(this.state.showOrHidden?'inline':'none')}}>
                    <p style={{color:'white',fontSize:14,marginLeft:10,marginTop:10}}>{info.maintitle}</p>
                    <p style={{color:'#ccc',fontSize:12,marginLeft:20,marginTop:10}}>{info.subtitle}</p>
                    <p style={{color:'white',backgroundColor:'#ff920b',fontSize:14,width:40,textAlign:'center',marginLeft:10,marginTop:12}}>观看</p>
                </div>
                <div style={{backgroundColor:'#ff920b',position:'absolute',width:'100%',height:'100%',top:0,left:0,display:(this.props.selected?'flex':'none'),flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <p style={{color:'white',fontSize:14,marginLeft:10,marginTop:10}}>{info.maintitle}</p>
                    <p style={{color:'#ccc',fontSize:12,marginLeft:20,marginTop:10}}>{info.subtitle}</p>
                </div>
            </div>
        );
    }
}

export default SportContentTopItem;