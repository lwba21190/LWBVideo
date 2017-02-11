import React,{Component,PropTypes} from 'react';

class Nav extends Component{
    static propTypes={
        info: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps={
        info: []
    };

    render(){
        return (
            <div style={{display:'flex',alignItems:'center',position:'absolute',width:'100%',height:30,top:65,borderRadius:25,borderWidth:6,backgroundColor:'rgba(204,204,204,0.5)'}}>
                {this.renderNavItem(this.props.info)}
            </div>
        );
    }

    renderNavItem(info){
        return (
            <ul style={{flex:1}}>
                {info.map(function(value,index,array){
                    return (
                        <li key={index} style={{display:'inline-block',marginLeft:20}}>
                            <a target="_blank" href={value.link}>{value.title}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Nav;