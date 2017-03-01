import React,{Component,PropTypes} from 'react';

class Search extends Component{

    static propTypes={
        info: PropTypes.string
    };

    static defaultProps={
        info: ""
    };

    render(){
        return (
            <div style={{position: 'fixed',top: 10,width:1280,display:'flex',justifyContent:'center'}}>
                <div style={{width:'50%',height:40,borderRadius:25,borderWidth:6,backgroundColor:'rgba(204, 204, 204, 0.5)'}}>
                    <form action="#" method="get" style={{display: 'flex',alignItems:'center'}}>
                        <div style={{width:40,height:40,display:'flex',justifyContent:'center',alignItems:'center'}} >
                            <input type="image" src="images/search.png" style={{width:16,height:16}}/>
                        </div>
                        <input type="text" placeholder={this.props.info} style={{fontSize:20,color:'#000000',flex:1,height:40,padding:0,margin:0,border:0,backgroundColor:'transparent'}}/>
                        <input type="submit" value="全网搜" style={{color:'#ffffff',fontSize:20,height:40,width:80,backgroundColor:'#ff920b',border:0, borderTopRightRadius:25,borderBottomRightRadius:25}}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;
