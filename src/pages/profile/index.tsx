import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetInfo from '../../components/widgetsInfo';
import "./index.css";



function Index() {    


     useEffect(() => { 
        
            //! http://localhost:3000/Profile?id=1
            let key_value= window.location.search; //! ?id=1
            //console.log("key_value:",key_value);


            let urlParams = new URLSearchParams(key_value); //! 1
            let urlParams_id = urlParams.get('id');
            
            //console.log("urlParams_id:",urlParams_id);
           
     }, []);

     

  return (
        <div className='profile'>
               <Sidebar/>
               <div className="profileHome">
                    <Navbar />
                    <div className="profileContainer">
                      
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
                         />   

                    </div>



                    </div>
               </div>
        </div>
    
  )
}

export default Index;
