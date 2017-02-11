import React, {Component,PropTypes} from 'react';
import MovieTriviaSmallItem from './MovieTriviaSmallItem'

var info;
var width;

var lastIndex = 0;

class MovieTriviaItem extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
    };

    static defaultProps = {
        info: null,
        width:120,
    };

    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
    }

    componentWillReceiveProps(props){
        info = props.info;
        width = props.width;
        if(this.state.index > 2){
            this.setState({index:2});
        }
    }

    render(){
        var self = this;
        return (
            <div style={{width:width}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <p style={{color:'#222',fontSize:14,height:20,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.title.maintitle}</p>
                    <p style={{color:'#999',fontSize:12,height:20,whiteSpace:'nowrap',wordBreak:'keep-all',overflow:'hidden',textOverflow:'ellipsis'}}>{info.title.subtitle}</p>
                </div>
                <ul style={{width:'100%'}}>
                    {
                        info.items.map(function(value,index,array){
                            var type = false;
                            if(index == self.state.index){
                                type = true;
                            }
                            return (
                                <li key={index} style={{width:'100%'}}
                                    onMouseEnter={()=>{
                                        info = self.props.info;
                                        self.setState({
                                            index: index,
                                        })
                                    }
                                }>
                                    <MovieTriviaSmallItem info={value} width={width} type={type}/>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MovieTriviaItem;