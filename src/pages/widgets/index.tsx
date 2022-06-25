import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetInfo from '../../components/widgetsInfo';
import WidgetCardData from '../../components/widgetCardData'; 
import WidgetValue from "../../components/widgetValue";
import WidgetControl from "../../components/widgetControl";
import WidgetAddCard from "../../components/widgetAddCard";
import WidgetCategories from "../../components/widgetCategories";
import WidgetCardDataTimeLine from "../../components/widgetCardDataTimeLine";
import "./index.css";

//! icon
import BatteryFullIcon from '@material-ui/icons/BatteryFull'; 
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WifiIcon from '@material-ui/icons/Wifi';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


function Index() {

     //! State
     const [ widgetControlStatus , setWidgetControlStatus] = useState(false);
     const [ widgetControlStatus1 , setWidgetControlStatus1] = useState(false);

          
     const JsonData = [
         {
            "title":"Toplam Dosyalar",
            "content":"Sayısı: 1451 / 1 TB 200 GB 150 MB 100 KB",
            "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Dosyalar"); },
            "backgroundColor":"rgb(76, 175, 80)"
         },
         {
            "title":"Toplam Fotoğraflar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <PhotoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Fotoğraflar"); },
            "backgroundColor":"rgb(244, 67, 53)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          }
          
     ];

    
  return (
        <div className='widgets'>
               <Sidebar/>
               <div className="widgetsHome">
                    <Navbar />
                    <div className="widgetsContainer">
                     <h1> Widget: widgetInfo </h1>
                    <div style={{ display:"flex",gap:"10px"}}>
                            <WidgetInfo userId={"15"}
                                   userAvatar={"./assets/img/1.jpg"}
                                   userStatus={true}
                                   username={"username1"}
                                   nameSurname={"Olga Sukhorukova"}
                                   country={"Turkiye"}
                                   city={"Ankara"}
                                   dateofBirth={"17-03-1998"}
                                   created_at={"2022-06-19T13:56:51+03:00"}
                                   userActive={true}
                                   onlineTime={"22gun/8ay/2yıl 13sa:39dak:44sn:900ms"}
                                   editClick={()=> {alert("editClick")}}
                                   viewClick={()=> {alert("viewClick")}}
                            />
                                                 
                            <WidgetInfo userId={"657"}
                                   userAvatar={"./assets/img/2.jpg"}
                                   userStatus={false}
                                   username={"username2"}
                                   nameSurname={"Teresa McCall"}
                                   country={"Turkiye"}
                                   city={"Ankara"}
                                   dateofBirth={"17-03-1998"}
                                   created_at={"2022-06-19T13:56:51+03:00"}
                                   userActive={false}
                                   onlineTime={"22gun/8ay/2yıl 13sa:39dak:44sn:900ms"}
                                   editClick={()=> {alert("editClick")}}
                                   viewClick={()=> {alert("viewClick")}}
                            />   
                     </div>

                     <h1 style={{marginTop:"15px"}}> Widget: widgetCardData </h1>
                     <div style={{ width:"720px", display:"flex", gap:"10px"}}>
                         <div style={{ width:"350px" }}>
                            <WidgetCardData
                                backgroundColor={"#F1F1F1"}
                                WidgetBoxColor={"#0052CC"}
                                icon={<BatteryFullIcon style={{ fontSize:"40px"}} />}
                                          
                                title={"Battery Health"}
                                colorTitle={"#888888"}
                                fontSizeTitle={"16px"}
                                fontWeightTitle={"700"}

                                value={"99 %"}
                                colorValue={"black"}
                                fontSizeValue={"16px"}
                                fontWeightValue={"700"}

                                onlineStatus={true}
                                fontSizeStatus={"14px"}
                                fontWeightStatus={"700"}
                             />
                          </div>
                          <div style={{ width:"350px" }}>
                            <WidgetCardData
                                backgroundColor={"#F1F1F1"}
                                WidgetBoxColor={"#0052CC"}
                                icon={<WbSunnyIcon style={{ fontSize:"40px"}} />}
                                          
                                title={"Aydınlık Seviyesi"}
                                colorTitle={"#888888"}
                                fontSizeTitle={"16px"}
                                fontWeightTitle={"700"}

                                value={"99 %"}
                                colorValue={"black"}
                                fontSizeValue={"16px"}
                                fontWeightValue={"700"}

                                onlineStatus={true}
                                fontSizeStatus={"14px"}
                                fontWeightStatus={"700"}
                             />
                          </div>


                     </div>

                     <h1 style={{marginTop:"15px"}}> Widget: widgetValue </h1>
                     <div style={{ width:"420px", display:"flex", gap:"10px" }}>
                                     
                     <div style={{ width:"200px" }}>
                         <WidgetValue
                            backgroundColor={"#F1F1F1"}
                            
                            value={"21"}
                            colorValue={"red"}
                            fontSizeValue={"44px"}
                            fontWeightValue={"700"}
                            
                            valueKey={"°C"}
                            colorValueKey={"red"}
                            fontSizeValueKey={"18px"}
                            fontWeightValueKey={"700"}

                            title={"Mutfak Odası"}
                            colorTitle={"black"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}
                            
                            type={"Sıcaklık"}
                            colorType={"rgb(103, 116, 142)"}
                            fontSizeType={"12px"}
                            fontWeightType={"500"}

                            onlineStatus={true}
                            fontSizeStatus={"14px"}
                            fontWeightStatus={"700"}
                         />
                     </div>
                                                 
                     <div style={{ width:"200px" }}>
                         <WidgetValue
                            backgroundColor={"#F1F1F1"}
                            
                            value={"45"}
                            colorValue={"blue"}
                            fontSizeValue={"44px"}
                            fontWeightValue={"700"}
                            
                            valueKey={"%"}
                            colorValueKey={"blue"}
                            fontSizeValueKey={"18px"}
                            fontWeightValueKey={"700"}

                            title={"Yemek Odası"}
                            colorTitle={"black"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}
                            
                            type={"Nem"}
                            colorType={"rgb(103, 116, 142)"}
                            fontSizeType={"12px"}
                            fontWeightType={"500"}

                            onlineStatus={false}
                            fontSizeStatus={"14px"}
                            fontWeightStatus={"700"}
                         />
                     </div>

                     </div>
                     <h1 style={{marginTop:"15px"}}> Widget: widgetControl </h1>
                     <div style={{ width:"420px", display:"flex", gap:"10px" }}>
                            <WidgetControl
                                   title={"Wifi"}
                                   icon={<WifiIcon style={{ fontSize:"70px",opacity:"0.3" }}/>}
                                   status={widgetControlStatus}
                                   setStatus={setWidgetControlStatus}
                                   onlineStatus={false}
                                   onClick={()=> {alert("tiklama wifi")}}
                            />
                            <WidgetControl
                                   title={"Lamba"}
                                   icon={<EmojiObjectsIcon style={{ fontSize:"70px",opacity:"0.3" }}/>}
                                   status={widgetControlStatus1}
                                   setStatus={setWidgetControlStatus1}
                                   onlineStatus={true}
                                   onClick={()=> {alert("tiklama lamba")}}
                            />
                     </div>

                     <h1 style={{marginTop:"25px"}}> Widget: widgetAddCard </h1>
                     <div style={{ width:"200px", display:"flex", gap:"10px" }}>
                            <WidgetAddCard 
                               title="Yeni Cihaz"
                               onClick={()=> {alert("yeni")}}
                             />
                     </div>

                     
                     <h1 style={{marginTop:"45px"}}> Widget: widgetCategories </h1>
                     <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                            <WidgetCategories 
                                   title={"Tüm Veriler"}
                                   JsonData={JsonData}
                            />
                    </div>

                                         
                    <h1 style={{marginTop:"45px"}}> Widget: widgetCardDataTimeLine </h1>
                    <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                            <WidgetCardDataTimeLine 
                            backgroundColor={"#F1F1F1"}
                            colorTitle={"#344563"}
                            title={"Tüm Veriler TimeLine"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}
                            status={"positive"}
                            titleDetailDescription={"20%"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}
                            
                            JsonData={JsonData}
                            colorBoxTitle={"#344563"}
                            fontSizeBoxTitle={"14px"}
                            fontWeightBoxTitle={"700"}
                            colorBoxDescription={"#344563"}
                            fontSizeBoxDescription={"12px"}
                            fontWeightBoxDescription={"400"}
                            />
                     </div>
                     
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
