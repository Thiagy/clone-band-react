import React,{useState, useEffect} from "react";

import SubBarNav from "./SubBarNav";
import Menu from "./Menu"
import Backdrop from "./Backdrop";
import Live from "./Live";
import HightLight from "./HightLight";
import HightLight2 from "./HightLight2";
import Adverts from "./Adverts";
import BoxNews from "./BoxNews";
import BoxJournalists from "./BoxJournalists";
import Program from "./Program";
import Variety from "./Variety";
import MostRead from "./MostRead";
import WebStory from "./WebStory";
import Variety2 from "./Variety2";
import { getNews } from "./function/newApi";
import { getMarketing } from "./function/marketingApi";

export default function Main({open, setOpen, closeMenu, setCloseMenu}){

    const[boxNews1, setBoxNews1]=useState([])
    const[boxNews2, setBoxNews2]=useState([])
    const[boxNews3, setBoxNews3]=useState([])
    const[boxNews4, setBoxNews4]=useState([])
    const[marketing, setMarketing]=useState([])
    

    function openMenu(){
        setCloseMenu((closeMenu=> !closeMenu))
    }

    useEffect(() => {
        async function fetchDataNews() {
          try {
            const arrayNews = await getNews();
            if (arrayNews) {
              setBoxNews1(arrayNews.slice(0, 24));
              setBoxNews2(arrayNews.slice(24, 48));
              setBoxNews3(arrayNews.slice(48, 72));
              setBoxNews4(arrayNews.slice(73, 97));

              setOpen(true)
            }
          } catch (error) {
           
            console.error("Erro ao buscar notícias:", error);

          }
        }
        async function fetchDataMarketing(){
            try {
                const arrayMarketing = await getMarketing();

                if(arrayMarketing){
                    setMarketing(arrayMarketing)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
      
        fetchDataNews();
        fetchDataMarketing()
      }, []);

    return (
        <main style={{display: open? 'flex': 'none'}}>
            <Menu/>
            <Backdrop closeMenu={closeMenu} openMenu={openMenu}/>
            <SubBarNav openMenu={openMenu}/>
            <Live/>
            <HightLight/>
            
            {marketing && (
                <Adverts marketing={marketing}/>
            )}
            <HightLight2/>
            <BoxNews title="Destaque" news={boxNews1}/>
            {marketing && (
                <Adverts marketing={marketing}/>
            )}
            <BoxNews title="Destaque" news={boxNews2}/>
            {marketing && (
                <Adverts marketing={marketing}/>
            )}
            <BoxNews title="Em Alta" news={boxNews3}/>
            <Variety2/>
            {marketing && (
                <Adverts marketing={marketing}/>
            )}
            <Variety/>
            <MostRead/>
            <WebStory/>
            {marketing && (
                <Adverts marketing={marketing}/>
            )}
            <BoxNews title="Você viu?" news={boxNews4}/>
            {marketing && (
                <Adverts marketing={marketing}/>
            )}
            <BoxJournalists/>
            {marketing && (
                <Adverts marketing={marketing}/>
            )}
            <Program/>
        </main>
    );
  }
  
  