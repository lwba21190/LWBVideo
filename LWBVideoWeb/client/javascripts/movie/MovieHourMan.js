import React,{Component, PropTypes} from 'react';

var info;
var width;

class MovieHourMan extends Component{

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
                        var backgroundColor = '#ff920b';
                        if(index > 2){
                            backgroundColor = '#999';
                        }
                        return (
                            <li key={index} style={{width:'100%',height:25,paddingTop:3,paddingDown:3,display:'flex',alignItems:'center'}}>
                                <div style={{width:16,height:16,backgroundColor:backgroundColor,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <strong style={{color:'white'}}>{index+1}</strong>
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',paddingLeft:5,paddingRight:5}}>
                                    <a href={value.star_link} target="_blank" style={{fontSize:14,display:'flex'}}>{value.name}</a>
                                    <a href={value.movie_link} target="_blank" style={{fontSize:12,display:'flex'}}>{value.movie}</a>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default MovieHourMan;