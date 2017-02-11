import React,{Component,PropTypes} from 'react';

var info;
var width;

class RightContentItem extends Component{

    static propTypes={
        info: PropTypes.object,
        width: PropTypes.number,
    };

    static defaultProps={
        info: {},
        width: 228,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
    }

    render(){
        return (
            <div style={{width:width}}>
                <h2 style={{display:'flex',height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                {this.renderList(info.content)}
            </div>
        );
    }

    renderList(list){
        return (
            <ul style={{backgroundColor:'#f0f0f0'}}>
                {
                    list.map(function(value,index,array){
                        return (
                            <li key={index}>
                                <a href={value.link} style={{display:'flex',flexDirection:'column',padding:10,paddingBottom:0}}>
                                    <img src={value.image} style={{width:width-20,height:80}}/>
                                    <span style={{fontSize:14,height:20,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{value.title}</span>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default RightContentItem;