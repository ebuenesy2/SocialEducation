import { useCallback, useEffect, useState } from "react";
import "./index.css";
import {useDropzone} from 'react-dropzone';


//! İcons
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckIcon from '@material-ui/icons/Check';
import axios from "axios";

export const Index =(props: any) => {  //console.log("proops:",props);
  useEffect(() => {
    console.log("widgetFileUpload");
  }, [])

  const [ fileUploadFiles , setFileUploadFiles] = useState([] as any); 
  
  const [denemeValue, setDenemeValue] = useState(0);

  const onDrop = useCallback((acceptedFiles: string | any[]) => {
    setDenemeValue(0);
   
    console.log("acceptedFiles:", acceptedFiles);
    console.log("acceptedFiles Sayısı:", acceptedFiles.length);
    console.log("acceptedFiles Name:", acceptedFiles[0].name);
    console.log("acceptedFiles Url:", (URL.createObjectURL(acceptedFiles[0])));  
  

    //! Array 
    var xArrayPreview = [];

    for (var i = 0; i < acceptedFiles.length; i++) {
      xArrayPreview.push({
        "file": acceptedFiles[i],
        "name": acceptedFiles[i].name,
        "tokenId": i,
        "previewUrl": URL.createObjectURL(acceptedFiles[i]),
        "progressValue": "0%",
        "status": "upload",
        "size": "0 KB"
      }); //! status : upload | done | error
    }

    var newxArrayPreview = xArrayPreview;
    setFileUploadFiles(newxArrayPreview); //! Verileri güncelliyor
    console.log("newxArrayPreview:", newxArrayPreview);


    setDenemeValue(0);
    
      //! File Upload 
      const url = 'http://localhost:3002/api/file/upload';
    
      //! File
      let data = new FormData();
      data.append('file', acceptedFiles[0]);
      data.append('role', 'role admin');
      data.append('usedPage', 'user');
      data.append('created_byToken', 'created_byToken');

      const options = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (progressEvent: any) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor(loaded * 100 / total); //! Yüzdelik
          console.log(loaded + 'kb of ' + total + 'kb | ' + percent + '%'); //! Yükleme Bilgileri
          newxArrayPreview[0].progressValue = percent + '%'; //! State Verileri - Yüzdelik
          newxArrayPreview[0].status = "upload"; //! State Verileri - Status
          setFileUploadFiles(newxArrayPreview); //! Verileri güncelliyor
         
        }
      }

      //Post
      axios.post(url, data, options).then((response) => {
        // alert("yüklendi");
        console.log("data:", response.data);
        newxArrayPreview[0].status = response.data.status === 1 ? "done" : "error";
        newxArrayPreview[0].name = response.data.DB.fileId;
        newxArrayPreview[0].size = response.data.DB.fileSizeConvert;
        setFileUploadFiles(newxArrayPreview); //! Verileri güncelliyor
      });
      //! File Upload End

setFileUploadFiles(newxArrayPreview); //! Verileri güncelliyor
   
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });



    
  return ( 
  <>
     <div className="fileUploadWrapper" >
        <header className="fileUploadWrapperHeader"  >File Upload</header>
        <form action="#">
          <div className="fileUploadWrapperFormFlex" >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="fileUploadWrapperFormFlexInput">
                <CloudUploadIcon className="fileUploadWrapperFormFlexIcon" />
                <p className="fileUploadWrapperFormFlexText" > Browse File to Upload or Drag and drop your images here </p>
              </div>              
            </div>
          </div>
        </form>

        <p> denemeValue: {denemeValue} </p>
        
        {fileUploadFiles.map((item: any) => (
          <>
            {item.status === "upload" ? 
              <section className="fileUploadWrapperSection" >
                <div className="fileUploadWrapperFileBox" >
                <img className="fileUploadWrapperFileBoxImg" src={item.previewUrl} />
                  <div className="fileUploadWrapperFileBoxContent" >
                    <div className="fileUploadWrapperFileBoxContentDetails" >
                      <span className="fileUploadWrapperFileBoxContentName" > {item.tokenId} * {item.status === "upload" ? "Uploading" : item.status === "done" ? "Done" : item.status }</span>
                      <span className="fileUploadWrapperFileBoxContentPercent" > {item.progressValue} </span>
                    </div>
                            
                      <div className="fileUploadWrapperFileBoxContentProgresBar" >
                        <div className="fileUploadWrapperFileBoxContentProgres" style={{ width: item.progressValue }} ></div>
                      </div>
                  </div>
                </div>
              </section> :
              
              <section className="fileUploadWrapperSection" >
                <div className="fileUploadWrapperFileBox" >
                    <img className="fileUploadWrapperFileBoxImg" src={item.previewUrl} />
                    <div className="fileUploadWrapperFileBoxContent" >
                      <div className="fileUploadWrapperFileBoxContentDetails" >
                        <span className="fileUploadWrapperFileBoxContentName" > {item.name}</span>
                        <span className="fileUploadWrapperFileBoxContentSize" > {item.size} </span>
                      </div>
                              
                      <CheckIcon className="fileUploadWrapperFileBoxContentDone" />
                    </div>
                </div>
              </section>
            }
             
          </>
        ))}

      
     
     </div>
   </>
     
  )
}

export default Index;
