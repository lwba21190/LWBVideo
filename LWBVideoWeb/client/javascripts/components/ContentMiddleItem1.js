import React, {Component,PropTypes} from 'react';

var info;
var width;
var height;

class MovieMiddleItem1 extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: {},
        width: 178,
        height: 260
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render() {
        return(
            <div style={{width:width,height:height,marginBottom:20}}>
                <div style={{display:'flex',position:'relative',width:width}}>
                    <a href={info.link} target="_blank" style={{position:'relative',height:height-20,overflow:'hidden'}}>
                        <img src={info.image} style={{width:width,height:height-20}}/>
                        <img style={{position:'absolute', top:5,right:5}} src={info.subscript}/>
                        <sup style={{position:'absolute',backgroundColor:'#ff920b',width:80,textAlign:'center', top:10,left:-20,transform:'rotate(-45deg)',color:'white',fontSize:12}}>
                            {info.leftsubscript}
                        </sup>
                        <div href={info.link} style={{position:'absolute',width:width, bottom:0,left:0,display:'flex',flexDirection:'column',backgroundColor:'rgba(0,0,0,0.6)'}}>
                            <p style={{fontSize:14,color:'white',marginLeft:5,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'keep-all',width:width}}>{info.subtitle}</p>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div style={{display:'flex',alignItems:'center',marginLeft:5}}>
                                    {info.figureInfo != "" && <img src="images/movie_play.png"  style={{width:12,height:12}} />}
                                    <p style={{fontSize:12,color:'#999',marginLeft:5,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.figureInfo}</p>
                                </div>
                                <p style={{fontSize:14,color:'#FFA500',marginRight:5}}>{info.score}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20}}>
                    <a href={info.link} target="_blank" style={{fontSize:14,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'keep-all',maxWidth:width}}>{info.maintitle}</a>
                </div>
            </div>
        );
    }
}

export default MovieMiddleItem1;