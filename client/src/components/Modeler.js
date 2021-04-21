import React, { Component }  from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
// import 'bpmn-font/dist/css/bpmn-embedded.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import { emptyBpmn } from '../resources/template.jsx';

// for navigation
// import navigationModeler from '../components/EditorNavigation'

// test open diagram
import { useFilePicker } from "use-file-picker";
import { newBpmn } from '../resources/diagram.jsx';

import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');



class Modeler extends Component {

    modeler = null;
    
    componentDidMount = () => {
        this.modeler = new BpmnModeler({
            container: '#bpmnview',
            keyboard: {
                bindTo: window
            },
            propertiesPanel: {
                parent: '#propertiesview'
            },
            additionalModules: [
                propertiesPanelModule,
                propertiesProviderModule
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor
            }
        });

        this.newBpmnDiagram();
    }


    newBpmnDiagram = () => {
        this.openBpmnDiagram(emptyBpmn);
    }

    openBpmnDiagram = (xml) => {
        this.modeler.importXML(xml, (error) => {
            if (error) {
                return console.log(error);
            }

            var canvas = this.modeler.get('canvas');

            canvas.zoom('fit-viewport');
        });
    }

    saveBpmnDiagram = () => {
             this.modeler.saveXML({ format: true }, function(err, xml) {
                 if(err){
                    console.log('gagal mendownload')
                 }
                console.log('sukses mendownload')
                console.log(xml);

                var xmlFile = new File([xml], "bpmn-diagram.bpmn", {type: "data:application/bpmn20-xml;charset=UTF-8"});
                FileSaver.saveAs(xmlFile);
             });    
    }

    openNewBpmnDiagram = (fileSelected) => {
        this.openBpmnDiagram(fileSelected);
    }

    // showFile = async (e) => {
    //     e.preventDefault()
    //     const reader = new FileReader()
    //     reader.onload = async (e) => { 
    //       const text = (e.target.result)
    //       console.log(text)
    //       alert(text)

    //     };
    //     alert('SUKSES BRO')
    //     reader.readAsText(e.target.files[0])
    //   }

    openFileBPMN = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            console.log("sukses")
            alert("sukses")
            this.openBpmnDiagram(text)
        };
        alert("Loading bro")
        reader.readAsText(e.target.files[0])
    }


    render = () => {
        return(
            <div>
                <div className="dash-navigation">
                    <ul>
                        <li><button onClick={this.newBpmnDiagram} className="button-normal">Create New BPMN Diagram</button></li>
                        <li><p>Open BPMN Diagram</p><input type="file" onChange={(e) => this.openFileBPMN(e)} className="input-normal"/></li>
                        <li><button onClick={this.saveBpmnDiagram} className="button-normal">Download BPMN Diagram</button></li>
                        
                        {/* <button onClick={this.openFileSelector}>Reopen file selector</button> */}
                        {/* <pre>{JSON.stringify(filesContent)}</pre> */}
                    </ul>
                </div>
                <div className="dash-content">
                    <div id="main-wrapper">
                        <div id="canvas"></div>
                        <div id="bpmncontainer">
                        <div id="propertiesview" style={{ width: '0%', height: '98vh', float: 'right', maxHeight: '98vh', overflowX: 'auto', backgroundColor: "#D3D3D3" }}></div>
                        <div id="bpmnview" style={{ width: '100%', height: '98vh', float: 'left' }}>
                            <h5 className="title-diagram">Diagram : ..</h5>
                            {/* <button onClick={this.newBpmnDiagram}>New</button>
                            <button onClick={this.saveBpmnDiagram}>Save</button>
                            <button onClick={this.openNewBpmnDiagram}>Open File</button> */}
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Modeler;