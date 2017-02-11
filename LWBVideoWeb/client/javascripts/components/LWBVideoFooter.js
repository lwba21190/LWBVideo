import React,{Component} from 'react';

class LWBVideoFooter extends Component{
    render(){
        return(
            <div style={{width:'100%',backgroundColor:'#ccc',height:80,display:'flex',zIndex:1,justifyContent:'center',position:'relative'}}>
                <p style={{marginTop:50,fontSize:14,color:'#222'}}>author：lwb</p>
                <p style={{marginTop:50,fontSize:14,color:'#222',marginLeft:50}}>email：1013485938@qq.com</p>
            </div>
        );
    }
}

export default LWBVideoFooter;