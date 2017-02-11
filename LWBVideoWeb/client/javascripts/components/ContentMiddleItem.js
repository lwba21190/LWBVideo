import React,{Component,PropTypes} from 'react';

var info;
var width;
var height;

class ContentMiddleItem extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number
    };

    static defaultProps = {
        info: {},
        width: 232,
        height: 360,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render(){
        return (
            <div style={{width:width,height:height,marginBottom:20}}>
                <div style={{display:'flex',flex:1,position:'relative'}}>
                    <a href={info.link} target="_blank" style={{width:width,height:height-40}}>
                        <img src={info.image} style={{width:width,height:height-40}}/>
                        <img style={{position:'absolute', top:5,right:5}} src={info.subscript}/>
                        <img style={{position:'absolute', top:0,left:0}} src={info.leftsubscript}/>
                        <div style={{position:'absolute', bottom:10,left:10,display:'flex',justifyContent:'space-between'}}>
                            <p style={{fontSize:14,color:'white',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'keep-all',width:180}}>{info.figureInfo}</p>
                            <p style={{fontSize:14,color:'#FFA500',marginLeft:20}}>{info.score}</p>
                        </div>
                    </a>
                </div>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                    <p style={{fontSize:14,color:'#222',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'keep-all',width:width}}><a href={info.link} target="_blank">{info.maintitle}</a></p>
                    <p style={{fontSize:12,color:'#999',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'keep-all',width:width}}>{info.subtitle}</p>
                </div>
            </div>
        );
    }
}

export default ContentMiddleItem;