import React,{Component, PropTypes} from 'react';

var info;
var width;
var height;

class ContentSmallItem extends Component{

    static propTypes={
        info: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number
    };

    static defaultProps={
        info: null,
        width: 232,
        height: 180,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render(){
        return (
            <div style={{display:'flex',flexDirection:'column',width: width,height:height}}>
                <div style={{display:'flex',position:'relative'}}>
                    <a href={info.link} target="_blank"><img src={info.image} style={{width:width,height:height-40}} /></a>
                    <img style={{position:'absolute', top:5,right:5}} src={info.subscript}/>
                    <p style={{position:'absolute',left:10,bottom:10,fontSize:14,color:'white',whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.figureInfo}</p>
                </div>
                <strong style={{display:'flex',fontSize:14,color:'#222',height:20,alignItems:'center',whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}><a  href={info.link} target="_blank">{info.maintitle}</a></strong>
                <p style={{display:'flex',height:20,fontSize:12,color:'#999',alignItems:'center',whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.subtitle}</p>
            </div>
        );
    }
}

export default ContentSmallItem;
