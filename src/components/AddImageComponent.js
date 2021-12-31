import  Modal  from "react-modal";
import React,{ useState } from "react";
import { Button, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import Axios from "axios";
import { baseUrl } from "../shared/basedUrl";
import tree from '../Assets/tree.jpg'


Modal.setAppElement('#root')
function AnyReactComponent (LanLng){
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFile, setselectedFile] = useState();
     function fileSelectedHandler (event){
        console.log("ENENT",event.target.files[0]);
        setselectedFile(prevfile=>{
            return{selectedFile:event.target.files[0]}
        })
    }
    function fileUploadHandler(){
        // console.log("FILE",selectedFile.selectedFile);
        // console.log("LAT",LanLng.lat);
        // console.log("LNG",LanLng.lng);
        const id=localStorage.getItem('id');
        
          var formData = new FormData();
          formData.append('imageFile',selectedFile.selectedFile)
          formData.append('longitude',LanLng.lng)
          formData.append('latitude',LanLng.lat)

          Axios.defaults.withCredentials = true
        //   for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        Axios(baseUrl+"map/map_points/"+id,formData,{method: 'POST',withCredentials: true})
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
          .catch(error=>{
            console.log(error)
          })

    }
    
    return (
        <div>
            <div><h3 ><i onClick={()=>setModalIsOpen(true)} style={{color:" #143306"}} className="fa fa-tree"></i></h3></div>
            <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
                <ModalHeader>
                    Add Image
                </ModalHeader >
                <ModalBody>

                {/* <p>Longitute is{lng}</p>
                <p>Latitude is {lat}</p> */}
                {/* <Button onClick={()=>setModalIsOpen(false)}>Upload Image</Button> */}
                {/* <div>
                
                </div> */}
                 <input type="file" multiple onChange={fileSelectedHandler}></input>
                 <Button onClick={fileUploadHandler} style={{float:"right"}}> Add Image</Button>
                </ModalBody>
                <hr/>
                <ModalHeader>
                <p>Related Images</p>
                </ModalHeader >
                <ModalBody>
                <div>
                <Row>
                    <Col sm="6">
                        <Card>
                            <CardImg top max="300px" height="600px" src={tree} alt="tree" />
                                <CardBody>
                                    <CardTitle>Palm Tree</CardTitle>
                                    <CardSubtitle>Synonyms: Areca faufel, Areca hortensis, Areca himalayana
                                                    Common names: Betel nut, areca
                                                    Dhivehi name: Fen-foah
                                                    Status: Common; grown in home gardens and cultivated in large scal 
                                    </CardSubtitle>
                                    <CardText>Description: An erect, slender-stemmed, single-trunked palm that can grow up to 30 m tall but normally trees are in between 10 to 15 m in height. Trunk is green when young, grey coloured in old trees with prominent white leaf scars. Fronds (leaves) are even-pinnately compound with a rigid but recurved rachis and 30 to 50 long lanceolate-shaped leaflets. Frond base sheath is long, smooth and green in colour</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card>
                        <CardImg top max="300px" height="600px" src={tree} alt="tree" />
                                <CardBody>
                                    <CardTitle>Palm Tree</CardTitle>
                                    <CardSubtitle>Synonyms: Areca faufel, Areca hortensis, Areca himalayana
                                                    Common names: Betel nut, areca
                                                    Dhivehi name: Fen-foah
                                                    Status: Common; grown in home gardens and cultivated in large scal 
                                    </CardSubtitle>
                                    <CardText>Description: An erect, slender-stemmed, single-trunked palm that can grow up to 30 m tall but normally trees are in between 10 to 15 m in height. Trunk is green when young, grey coloured in old trees with prominent white leaf scars. Fronds (leaves) are even-pinnately compound with a rigid but recurved rachis and 30 to 50 long lanceolate-shaped leaflets. Frond base sheath is long, smooth and green in colour</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>
                    
                    </div>

                </ModalBody>
                <ModalFooter>
                    <div>
                        <Button onClick={()=>setModalIsOpen(false)}>close</Button>
                    </div>
                </ModalFooter>
                
            </Modal>
        </div>
        
    );
  }
  export default AnyReactComponent;