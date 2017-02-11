import React,{Component} from 'react';
import varietyContentInfo from '../../data/varietyContent.json'
import ContentType0 from '../components/ContentType0';
import ContentType1 from '../components/ContentType1';
import ContentType2 from '../components/ContentType2';
import LWBVideoFooter from '../components/LWBVideoFooter';
import ContentSort from '../components/ContentSort';
import ProgramList from '../components/ProgramList';
import LeaderContent from '../components/Leaderboard';
import Trivia from './Trivia';
import RightContentItem from './RightContentItem';
import LeftBottomContentItem from './LeftBottomContentItem';

class VarietyContent extends Component{
    render(){
        return (
            <div style={{display:'flex',width:1240,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <div style={{marginBottom:20}}>
                    <ContentSort info={varietyContentInfo.data.sort} />
                </div>
                <div style={{width:1240,display:'flex',justifyContent:'space-between'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        {this.renderLeftTopContent()}
                        {this.renderLeftBottomContent()}
                    </div>
                    {this.renderRightContent()}
                </div>
                <LWBVideoFooter />
            </div>
        );
    }

    renderLeftTopContent(){
        var view = [];
        var data = varietyContentInfo.data.leftTop;
        for(var i = 0; i < data.length; i++) {
            var item = data[i];
            switch (item.type) {
                case 0: {
                    view.push(<ContentType0 key={i} info={item} width={972} height={340} lineItemCount={5} />);
                    break;
                }
                case 1:{
                    view.push(<ContentType1 key={i} info={item} width={972}/>);
                    break;
                }
                case 2:{
                    view.push(<ContentType2 key={i} info={item} width={972}/>);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return (<div>{view}</div>);
    }

    renderRightContent(){
        return (
            <div style={{marginTop:20}}>
                <ProgramList info={varietyContentInfo.data.rightContent.programList} width={248} height={540} />
                <div style={{marginTop:20}}>
                    <LeaderContent info={varietyContentInfo.data.rightContent.leaderBoard} width={248} height={340} />
                </div>
                <div style={{marginTop:20}}>
                    <Trivia info={varietyContentInfo.data.rightContent.trivia} width={248} height={340} />
                </div>
                <div style={{marginTop:20}}>
                    <RightContentItem info={varietyContentInfo.data.rightContent.programTopics} width={248}/>
                </div>
                <div style={{marginTop:20}}>
                    <RightContentItem info={varietyContentInfo.data.rightContent.planTopics} width={248}/>
                </div>
                <div style={{marginTop:20}}>
                    <RightContentItem info={varietyContentInfo.data.rightContent.cooperationTopics} width={248}/>
                </div>
            </div>
        );
    }

    renderLeftBottomContent(){
        var data = varietyContentInfo.data.leftBottom;
        var content = data.content;
        return (
            <div style={{display:'flex',width:972,flexDirection:'column'}}>
                <h2 style={{display:'flex',height:40,fontSize:28,alignItems:'center',color:'#222'}}>{data.title}</h2>
                <ul style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',width:972}}>
                    {
                        content.map(function(value,index,array){
                            var itemWidth;
                            var smallItemCount;
                            if(index%2 == 0){
                                itemWidth = 576;
                                smallItemCount = 3;
                            }else{
                                itemWidth = 376;
                                smallItemCount = 2;
                            }
                            return (
                                <li key={index} style={{display:'inline-block'}}>
                                    <LeftBottomContentItem info={value} width={itemWidth} lineItemCount={smallItemCount} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default VarietyContent;