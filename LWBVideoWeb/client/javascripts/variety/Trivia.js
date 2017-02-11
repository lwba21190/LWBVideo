import React,{Component, PropTypes} from 'react';

var info;
var width;
var height;

class Trivia extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: null,
        width: 248,
        height: 340,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render(){
        return (
            <div style={{display:'flex',width:width,height:height,flexDirection:'column'}}>
                <h2 style={{height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                {this.renderList(info.content)}
            </div>
        );
    }

    renderList(list){
        return (
            <ul style={{backgroundColor:'#f0f0f0'}}>
                {
                    list.map(function(value,index,array){
                        if((index !=0 && index != 1)){
                            return   (
                                <li key={index} style={{width:width,padding:5,marginLeft:5}}>
                                    <a href={value.link} target="_blank" style={{
                                        width:width,
                                        height:20,
                                        fontSize: 14,
                                        whiteSpace: 'nowrap',
                                        wordBreak: 'keep-all',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {value.title}
                                    </a>
                                </li>);
                        }
                        return (
                            <li key={index} style={{width:width,padding:10,marginLeft:5}}>
                                <a href={value.link} target="_blank" style={{
                                    display:'flex',
                                    whiteSpace: 'nowrap',
                                    wordBreak: 'keep-all',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    <img src={value.image} style={{width:80,height:50}}/>
                                    <div style={{display:'flex',flexDirection:'column',marginLeft:5,justifyContent:'center'}}>
                                        <span style={{fontSize:14,padding:2,whiteSpace: 'nowrap',wordBreak: 'keep-all',overflow: 'hidden',textOverflow: 'ellipsis'}}>{value.maintitle}</span>
                                        <span style={{
                                            color: '#999',
                                            fontSize: 12,
                                            padding:2,
                                            whiteSpace: 'nowrap',
                                            wordBreak: 'keep-all',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>{value.subtitle}</span>
                                    </div>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default Trivia;