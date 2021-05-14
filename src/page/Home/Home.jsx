import React, { useEffect, useState } from "react";
// import { ListCard } from "../../components/ListCard/ListCard.jsx";
import { ListShow } from "../../components/ListShow/ListShow.jsx";
import { SearchBarBtn } from './Search/Search.jsx'
import { CarouselList } from './Carousel/Carousel.jsx'
import { Notice } from './Notice/Notice'
import './Home.css'
import $api from '../../api'

export const Home = () => {
     const [listData,setlistData] = useState([]) 
     const [carouselList,setCarouselList] = useState([])
    
        useEffect(()=>{
            $api.livingRoomApi.getRoomList().then((data)=>{
                setlistData(data)
            }).catch(e =>{
                console.log("请求错误",e)
            })

            $api.carouselApi.getCarouselList().then(data =>{
                console.log("轮播图父级数据",data)
                setCarouselList(data)
            }).catch(e =>[
                console.log("请求错误",e)
            ])

        },[])

    return(
        <div>
            <Notice></Notice>
            <div onClick={() =>{window.location.assign('/search')}}>
                <SearchBarBtn ></SearchBarBtn>
            </div>
            <div className={'carouselList'}>
               {  (carouselList && carouselList.length > 0) &&
                    <CarouselList carouselList={ carouselList }>
                    </CarouselList> 
               }
            </div>
            <ListShow listData={listData}></ListShow>
        </div>
    )
    
    
}