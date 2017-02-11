import React,{Component, PropTypes} from 'react';

var info;
var width;
var height;

class ContentStarItem extends Component{

    static propTypes={
        info: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number
    };

    static defaultProps={
        info: {},
        width: 120,
        height: 160
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render(){
        return (
            <div style={{display:'flex',flexDirection:'column',width:width,height:height,justifyContent:'center',alignItems:'center'}}>
                <div style={{display:'flex',position:'relative'}}>
                    <a href={info.link} target="_blank"><img src={info.image} style={{width:width,height:height-40,borderRadius:width/2}} /></a>
                    <img style={{position:'absolute', top:5,right:5}} src={info.subscript}/>
                </div>
                <strong style={{fontSize:14,color:'#222',height:20,overflow:'hidden',textOverflow:'ellipsis'}}><a  href={info.link} target="_blank">{info.maintitle}</a></strong>
                <p style={{fontSize:12,color:'#999',height:20,overflow:'hidden',textOverflow:'ellipsis'}}>{info.subtitle}</p>
            </div>
        );
    }
}

export default ContentStarItem;
