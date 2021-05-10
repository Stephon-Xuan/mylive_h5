import React from "react";
import { List } from "../../components/List/List.jsx";
import { SearchBarBtn } from './Search/Search.jsx'
import { CarouselList } from './Carousel/Carousel.jsx'
import { Notice } from './Notice/Notice'
import './Home.css'

export class Home extends React.Component {
    
    render(){
        return(
        <div>
            <Notice></Notice>
            <div onClick={() =>{window.location.assign('/search')}}>
                <SearchBarBtn ></SearchBarBtn>
            </div>
            
            <div className={'carouselList'}>
                <CarouselList></CarouselList>
            </div>
            <List></List>
        </div>
    )
    }
    
}