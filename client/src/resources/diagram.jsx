export const newBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0x97gjy" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="8.3.0">
  <bpmn:process id="Process_0ica5r3" isExecutable="false">
    <bpmn:startEvent id="StartEvent_0upxjxn" />
    <bpmn:task id="Activity_063q994" />
    <bpmn:subProcess id="Activity_1697hnz">
      <bpmn:startEvent id="Event_1puiyv8" />
      <bpmn:exclusiveGateway id="Gateway_1hcieoo" />
    </bpmn:subProcess>
    <bpmn:dataObjectReference id="DataObjectReference_1d607w9" dataObjectRef="DataObject_0ep8utc" />
    <bpmn:dataObject id="DataObject_0ep8utc" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0ica5r3">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_0upxjxn">
        <dc:Bounds x="226" y="81" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="DataObjectReference_1d607w9_di" bpmnElement="DataObjectReference_1d607w9">
        <dc:Bounds x="682" y="200" width="36" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_063q994_di" bpmnElement="Activity_063q994">
        <dc:Bounds x="440" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1697hnz_di" bpmnElement="Activity_1697hnz" isExpanded="true">
        <dc:Bounds x="160" y="200" width="490" height="200" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1puiyv8_di" bpmnElement="Event_1puiyv8">
        <dc:Bounds x="200" y="282" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1hcieoo_di" bpmnElement="Gateway_1hcieoo" isMarkerVisible="true">
        <dc:Bounds x="495" y="245" width="50" height="50" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
