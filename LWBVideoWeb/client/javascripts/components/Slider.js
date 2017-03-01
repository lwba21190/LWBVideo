import React,{PropTypes,Component} from 'react';
import styles from '../../stylesheets/index.css';

var intervalId;

class Slider extends Component{
    static propTypes = {
        info: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        info: []
    };

    constructor(props){
        super(props);
        this.state = {
            curIndex: 0,
            item: (props.info.length > 0) && props.info[0]
        }
    }

    render(){
        return (
            <div style={{display:'flex',width:1280,justifyContent:'center',position:'absolute'}}>
                {this.renderView()}
                <div style={{position:'absolute',top:130,right:0}}>
                    {this.renderTitle()}
                </div>
            </div>
        );

    }

    componentDidMount(){
        this.startTimer();
    }

    startTimer(){
        var self = this;
        intervalId = setInterval(()=>{
            var index = self.state.curIndex;
            index = (index == self.props.info.length-1)?0:(index+1);
            self.setState({
                curIndex: index,
                item: self.props.info[index]
            });
        },4000);
    }

    stopTimer(){
        clearInterval(intervalId);
    }

    renderView(){
        if(this.state.item != null){
            return (<a href={this.state.item.link} target="_blank">
                <img src={this.state.item.image} alt={this.state.item.title} style={{display:'block'}}/>
            </a>);
        }
    }

    renderTitle(){
        var self = this;
        return (
            <ul style={{backgroundColor:'rgba(204,204,204,0.5)'}}
                onMouseEnter={()=>self.stopTimer()}
                onMouseLeave={()=>self.startTimer()}>
                {this.props.info.map(function(value,index,array){
                    var backgroundColor = (self.state.curIndex == index)?'#ff920b':'rgba(255,255,255,0)';
                    var fontColor = (self.state.curIndex == index)?'white':'black';
                    return (
                        <li key={index}
                            style={{paddingTop:8,paddingBottom:8,paddingLeft:8,paddingRight:8,backgroundColor:backgroundColor}}
                            onMouseEnter={()=>self.setState({
                                    curIndex: index,
                                    item:self.props.info[index]
                                })
                            }
                            onMouseLeave={()=>self.setState({
                                    curIndex: index,
                                    item:self.props.info[index]
                                })
                            }
                            >
                            <a style={{color:fontColor}} href={value.link} target='_blank'>{value.title}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }

    componentWillUnmount(){
        clearInterval(intervalId);
    }
}

export default Slider;
