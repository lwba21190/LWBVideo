import React,{Component,PropTypes} from 'react';

var info;
var width;
var height;

class ContentLargeItem extends Component{

    static propTypes={
        info: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number
    };

    static defaultProps={
        info: {},
        width: 484,
        height: 380,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render(){
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:width,height:height}}>
                <div style={{position:'relative'}}>
                    <a href={info.link} target="_blank"><img style={{width:width,height:height}} src={info.image}/></a>
                    <strong style={{position:'absolute',fontSize:14,left:10,bottom:30,color:'white',whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}><a href={info.link} target="_blank">{info.maintitle}</a></strong>
                    <p style={{position:'absolute',left:10,bottom:10,fontSize:12,color:'#ccc',whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.subtitle}</p>
                    <img src={info.subscript} style={{position:'absolute',right:5,top:5}}/>
                </div>
            </div>
        );
    }
}

export default ContentLargeItem;