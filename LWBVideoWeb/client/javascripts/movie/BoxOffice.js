import React,{Component, PropTypes} from 'react';

var info;
var width;

class BoxOffice extends Component{

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

    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    render(){
        var self = this;
        return (
            <div style={{display:'flex',width:width,flexDirection:'column'}}>
                <h2 style={{height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                <div>
                    {this.renderHeaders()}
                </div>
                {this.renderItems()}
            </div>
        );
    }

    renderHeaders(){
        var self = this;

        return (
            <ul style={{display:'flex',width:'100%'}}>
                {
                    info.content.map(function(value,index,array){
                        var backgroundColor = (self.state.index == index)?'#dbdbdb':'#cccccc';
                        return (
                            <li key={index} style={{display:'flex',width:'100%',height:30,justifyContent:'center',alignItems:'center',backgroundColor:backgroundColor}}
                                onMouseEnter={()=>self.setState({index: index})}>
                                <a style={{width:'100%',textAlign:'center'}}>{value.title}</a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    renderItems(){
        var self = this;
        var items = info.content[self.state.index].content;
        return (
            <div style={{overflow:'hidden',width:'100%'}}>
                <div style={{width:'100%'}}>
                    <a href={items[0].link} target="_blank" style={{position:'relative',width:'100%',display:'flex'}}>
                        <img src={items[0].image} style={{width:'100%',height:100}} />
                        <div style={{display:'flex',position:'absolute',bottom:0,left:0,width:'100%',backgroundColor:'rgba(204, 204, 204, 0.5)'}}>
                            <div style={{width:40,height:40,backgroundColor:'#ff920b',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <strong style={{color:'white'}}>{1}</strong>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flex:1,paddingLeft:5,paddingRight:10}}>
                                <p style={{fontSize:14,width:'70%',color:'white',whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{items[0].title}</p>
                                <span style={{fontSize:12,color:'white'}}>{items[0].watchtimes}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <ul style={{display:'flex',width:'100%',flexWrap:'wrap',backgroundColor:'#f0f0f0'}}>
                    {
                        items.slice(1).map(function (value, index, array) {
                            var backgroundColor = '#ff920b';
                            if(index > 1){
                                backgroundColor = '#999';
                            }
                            return (
                                <li key={index} style={{width:'100%',height:25,padding:5,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <div style={{width:16,height:16,backgroundColor:backgroundColor,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <strong style={{color:'white'}}>{index+2}</strong>
                                    </div>
                                    <a href={value.link} target="_blank" style={{display:'flex',width:'90%',fontSize:14,marginLeft:5,alignItems:'center',justifyContent:'space-between'}}>
                                        <p style={{width:'70%',fontSize:14,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis',}}>{value.title}</p>
                                        <span style={{fontSize:12}}>{value.watchtimes}</span>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default BoxOffice;