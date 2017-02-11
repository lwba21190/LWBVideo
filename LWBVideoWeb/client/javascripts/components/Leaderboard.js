import React,{Component,PropTypes} from 'react';

var info;
var width;
var height;

class Leaderboard extends Component{

    static propTypes={
        info: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number
    };

    static defaultProps={
        info: {},
        width: 248,
        height: 340,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    componentWillReceiveProps(props){
        info = props.info;
        width = props.width;
        height = props.height;
    }


    render(){
        return (
            <div style={{width:width,height:height,display:'flex',flexDirection:'column'}}>
                <h2 style={{display:'flex',height:40,fontSize:28,alignItems:'center',color:'#222'}}>{info.title}</h2>
                {this.renderList(info.content)}
            </div>
        );
    }

    renderList(items){
        return (
            <div style={{overflow:'hidden'}}>
                <div>
                    <a href={items[0].link} target="_blank" style={{position:'relative'}}>
                        <img src={items[0].image} style={{width:width,height:100}} />
                        <div style={{display:'flex',position:'absolute',bottom:0,left:0}}>
                            <div style={{width:40,height:40,backgroundColor:'#ff920b',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <strong style={{color:'white'}}>{1}</strong>
                            </div>
                            <div style={{width:width-40,backgroundColor:'rgba(204, 204, 204, 0.5)',display:'flex',paddingLeft:5,alignItems:'center'}}>
                                <strong>{items[0].title}</strong>
                            </div>
                        </div>
                    </a>
                </div>
                <ul style={{display:'flex',flexWrap:'wrap',backgroundColor:'#f0f0f0'}}>
                    {
                        items.slice(1).map(function (value, index, array) {
                            var backgroundColor = '#ff920b';
                            if(index > 1){
                                backgroundColor = '#999';
                            }
                            return (
                                <li key={index} style={{width:(width-20)/2,height:25,padding:5,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <div style={{width:16,height:16,backgroundColor:backgroundColor,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <strong style={{color:'white'}}>{index+2}</strong>
                                    </div>
                                    <a href={value.link} target="_blank" style={{width:(width-20)/2-16,fontSize:14,marginLeft:5,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis',alignItems:'center'}}>{value.title}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Leaderboard;