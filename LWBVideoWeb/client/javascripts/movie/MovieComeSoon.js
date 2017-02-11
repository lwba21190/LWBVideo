import React,{Component, PropTypes} from 'react';

var info;
var width;

class MovieComeSoon extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
    };

    static defaultProps = {
        info: {},
        width: 248,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
    }

    render(){
        var self = this;
        return (
            <div style={{display:'flex',width:width,flexDirection:'column'}}>
                <h2 style={{height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                {this.renderItems()}
            </div>
        );
    }

    renderItems(){
        var self = this;
        var items = info.content;
        return (
            <ul style={{display:'flex',width:'100%',flexWrap:'wrap',backgroundColor:'#f0f0f0',padding:5}}>
                {
                    items.map(function (value, index, array) {
                        return (
                            <li key={index} style={{width:'100%',padding:5,display:'flex',alignItems:'center'}}>
                                <a href={value.href} target="_blank" style={{width:80,height:50}}><img src={value.image} style={{width:80,height:50}}/></a>
                                <div href={value.link} target="_blank" style={{display:'flex',flexDirection:'column',width:'60%',overflow:'hidden',marginLeft:5,justifyContent:'center'}}>
                                    <p style={{fontSize:14,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{value.maintitle}</p>
                                    <span style={{fontSize:12,color:'#999',whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{value.subtitle}</span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default MovieComeSoon;