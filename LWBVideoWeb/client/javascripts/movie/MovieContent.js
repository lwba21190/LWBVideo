import React,{Component} from 'react';
import movieContentInfo from '../../data/movieContent.json'
import ContentType2 from '../components/ContentType2';
import LWBVideoFooter from '../components/LWBVideoFooter';
import ContentSort from '../components/ContentSort';
import MovieTrivia from './MovieTrivia';
import BoxOffice from './BoxOffice';
import ProgramList from '../components/ProgramList';
import MovieContentItem from './MovieContentItem';
import Leaderboard from '../components/Leaderboard';
import MovieHourMan from './MovieHourMan';
import MovieComeSoon from './MovieComeSoon';

class MovieContent extends Component{

    render(){
        return (
            <div style={{display:'flex',width:1240,flexDirection:'column'}}>
                <div style={{marginBottom:20}}>
                    <ContentSort info={movieContentInfo.data.sort} />
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <MovieTrivia info={movieContentInfo.data.leftContent.trivia} width={972}/>
                        <ProgramList info={movieContentInfo.data.rightContent.programList} width={248} height={460} />
                    </div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <ContentType2 info={movieContentInfo.data.leftContent.premiereTheaters} width={972} lineItemCount={5} type={1}/>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <BoxOffice info={movieContentInfo.data.rightContent.boxOffice} width={248} />
                            <div style={{marginTop:80}}>
                            <Leaderboard info={movieContentInfo.data.rightContent.movieHotSearchBoard} width={248} height={280}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <ContentType2 info={movieContentInfo.data.leftContent.winterVideo} width={972} lineItemCount={5} type={1}/>
                        <MovieHourMan info={movieContentInfo.data.rightContent.movieHourMan} width={248} />
                    </div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <ContentType2 info={movieContentInfo.data.leftContent.membersOnly} width={972} lineItemCount={5} type={1}/>
                        <Leaderboard info={movieContentInfo.data.rightContent.memberHotSearchBoard} width={248} height={280}/>
                    </div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <div>
                            <ContentType2 info={movieContentInfo.data.leftContent.ticketArea} width={972} lineItemCount={5} type={1}/>
                            <ul style={{display:'flex',justifyContent:'space-between'}}>
                                {
                                    movieContentInfo.data.leftContent.ticketArea.content.map(function(value,index,array){
                                        return (
                                            <li key={index} style={{backgroundColor:'#c81624',width:(972-20*4)/5,height:30,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                <a style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>买电影票</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <MovieComeSoon info={movieContentInfo.data.rightContent.movieComeSoon} width={248}/>
                    </div>
                </div>
                <div>
                    <MovieContentItem info={movieContentInfo.data.leftContent.microfilm} lineItemCount={6}/>
                    <MovieContentItem info={movieContentInfo.data.leftContent.featuresPlan} lineItemCount={6}/>
                    <MovieContentItem info={movieContentInfo.data.leftContent.wonderfulTopic} lineItemCount={6}/>
                    <ContentType2 info={movieContentInfo.data.leftContent.chineseStrongFile} lineItemCount={6} type={1}/>
                    <ContentType2 info={movieContentInfo.data.leftContent.diffColorsEA} lineItemCount={6} type={1}/>
                    <ContentType2 info={movieContentInfo.data.leftContent.asiaFeatured} lineItemCount={6} type={1}/>
                </div>
                <LWBVideoFooter />
            </div>
        );
    }

    renderLeftBottomItems(items){

    }
}

export default MovieContent;