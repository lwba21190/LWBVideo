import React, {Component,PropTypes} from 'react';

var info;
var width;

class MovieTriviaSmallItem extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        type: PropTypes.bool
    };

    static defaultProps = {
        info: null,
        width:120,
        type: false
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
    }

    componentWillReceiveProps(props){
        info = props.info;
        width = props.width;
    }

    render(){
        if(this.props.type){
            return (
                <div style={{display:'flex',alignItem:'center',width:width,height:160,borderTopStyle:'dotted',borderTopWidth:1,borderTopColor:'#909090'}}>
                    <a href={info.link} target="_blank" style={{position:'relative',width:'100%',height:150,paddingTop:5,paddingBottom:5}}>
                        <img src={info.image} style={{width:'100%',height:150}} />
                        <div style={{position:'absolute',width:'100%',bottom:5,backgroundColor:'rgba(0,0,0,0.6)'}}>
                            <p style={{color:'white',fontSize:14,paddingLeft:5,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.maintitle}</p>
                            <p style={{color:'#999',fontSize:12,paddingLeft:5,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.subtitle}</p>
                        </div>
                    </a>
                </div>
            );
        }
        return (
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:width,height:60,borderTopStyle:'dotted',borderTopWidth:1,borderTopColor:'#909090'}}>
                <p style={{color:'#222',fontSize:14}}>{info.maintitle}</p>
                <p style={{color:'#999',fontSize:12}}>{info.subtitle}</p>
            </div>
        );
    }
}

export default MovieTriviaSmallItem;