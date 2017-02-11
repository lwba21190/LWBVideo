import React,{Component, PropTypes} from 'react';

var info;
var width;
var height;

class ProgramList extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: {},
        width: 248,
        height: 560,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render(){
        return (
            <div style={{display:'flex',width:width,height:height,backgroundColor:'#f0f0f0',flexDirection:'column'}}>
                <div style={{width:width,height:40,borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#909090'}}>
                    <strong style={{width:80,textAlign:'center',color:'white',backgroundColor:'#ff920b',fontSize:20}}>{info.title}</strong>
                </div>
                {this.renderItems(info.items)}
            </div>
        );
    }

    renderItems(items){
        var self = this;
        return(
            <div style={{overflowY:'scroll',overflowX:'hidden'}}>
                {
                    items.map(function(value,index,array){
                        return (
                            <dl key={index}>
                                <dt style={{width:width,paddingLeft:10,paddingTop:5,paddingBottom:5}}>
                                    <span style={{backgroundColor:'#ff920b',padding:2,color:'white',fontSize:12,borderRadius:2}}>{value.title}</span>
                                </dt>
                                {self.renderList(value.list)}
                            </dl>
                        );
                    })
                }
            </div>
        );
    }

    renderList(list){
        return (
                list.map(function(value,index,array){
                    if((value.image == "")){
                        return   (
                            <dd key={index} style={{width:width,alignItems:'center',padding:10}}>
                                <a href={value.link} target="_blank" style={{
                                    height:40,
                                    fontSize: 12,
                                    whiteSpace: 'nowrap',
                                    wordBreak: 'keep-all',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {value.maintitle}
                                    <span style={{
                                        color: '#999',
                                        fontSize: 12,
                                        marginLeft: 10,
                                        whiteSpace: 'nowrap',
                                        wordBreak: 'keep-all',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>{value.subtitle}</span>
                                </a>
                            </dd>);
                    }
                    return (
                        <dd key={index} style={{width:width,alignItems:'center',padding:10}}>
                            <a href={value.link} target="_blank" style={{
                                display:'flex',
                                whiteSpace: 'nowrap',
                                wordBreak: 'keep-all',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                <img src={value.image}/>
                                <div style={{display:'flex',flexDirection:'column',marginLeft:10}}>
                                    <span>{value.maintitle}</span>
                                    <span style={{
                                        color: '#999',
                                        fontSize: 12,
                                        whiteSpace: 'nowrap',
                                        wordBreak: 'keep-all',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>{value.subtitle}</span>
                                </div>
                            </a>
                        </dd>
                    );
                })
        );
    }
}

export default ProgramList;