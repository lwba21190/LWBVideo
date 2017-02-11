import React,{Component, PropTypes} from 'react';

class ContentStarItem extends Component{

    static propTypes={
        info: PropTypes.array
    };

    static defaultProps={
        info: []
    };

    render(){
        var info = this.props.info;
        return (
            <div style={{display:'flex',height:120,justifyContent:'space-between',alignItems:'center',backgroundColor:'#f0f0f0'}}>
                <div style={{width:248,height:80,display:'column',borderRightStyle:'solid', borderRightWidth:1,borderRightColor:"#909090"}}>
                    <p style={{color:"#909090",fontSize:14,marginLeft:20}}>{info[0].title}</p>
                    {this.renderItem(info[0].items,228)}
                </div>
                <div style={{width:248,height:80,display:'column',borderRightStyle:'solid', borderRightWidth:1,borderRightColor:"#909090"}}>
                    <p style={{color:"#909090",fontSize:14,marginLeft:20}}>{info[1].title}</p>
                    {this.renderItem(info[1].items,228)}
                </div>
                <div style={{width:496,height:80,display:'column',borderRightStyle:'solid',borderRightWidth:1,borderRightColor:"#909090"}}>
                    <p style={{color:"#909090",fontSize:14,marginLeft:20}}>{info[2].title}</p>
                    {this.renderItem(info[2].items,476)}
                </div>
                <div style={{width:248,height:80,display:'column'}}>
                    <p style={{color:"#909090",fontSize:14,marginLeft:20}}>{info[3].title}</p>
                    {this.renderItem(info[3].items,228)}
                </div>
            </div>
        );
    }

    renderItem(items,width){
        return(
            <ul style={{display:'flex',width:width,height:40,marginLeft:20,marginTop:10,justifyContent:'space-between',flexWrap:'wrap',overflow:'hidden'}}>
                {
                    items.map(function(value,index,array) {
                        return (
                            <li style={{display:'inline-block',marginRight:20,height:20}} key={index}><a  style={{fontSize:12}} href={value.link} target="_blank">{value.name}</a></li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default ContentStarItem;
