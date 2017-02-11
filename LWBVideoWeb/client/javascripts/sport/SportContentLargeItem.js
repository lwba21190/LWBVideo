import React,{Component,PropTypes} from 'react';

var info;
var width;
var height;

class SportContentLargeItem extends Component{

    static propTypes = {
        info: PropTypes.object.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {
        info: null,
        width: 200,
        height:160,
    };

    componentWillMount(){
        info = this.props.info;
        width = this.props.width;
        height = this.props.height;
    }

    render() {
        if (info.image == "") {
            return (
                <div style={{width: width, height: height}}>
                    <div style={{display: 'flex', flexDirection: 'column', padding: 10}}>
                        <a href={info.link} target="_blank" style={{fontSize:20,padding:5}}>{info.maintitle}</a>
                        <p style={{fontSize: 12, color: '#999',padding:5}}>{info.subtitle}</p>
                    </div>
                </div>
            );
        }
        return (
            <div style={{display: 'flex', width: width, height: height}}>
                <a href={info.link} target="_blank" style={{position:'relative',width: '60%', height: height}}>
                    <img src={info.image} style={{position:'absolute',width: '100%', height: height}}/>
                    <img style={{position:'absolute', top:5,right:5}} src={info.subscript}/>
                    <img style={{position:'absolute', top:0,left:0}} src={info.leftsubscript}/>
                </a>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 10,
                    width: '40%',
                    height: height
                }}>
                    <a href={info.link} target="_blank" style={{fontSize:14,padding:5}}>{info.maintitle}</a>
                    <p style={{fontSize: 12, color: '#999',padding:5}}>{info.subtitle}</p>
                </div>
            </div>
        );
    }
}

export default SportContentLargeItem;