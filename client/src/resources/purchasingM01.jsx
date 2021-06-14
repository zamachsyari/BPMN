export const purchasing01 = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:collaboration id="Collaboration_0czsqyr">
    <bpmn2:participant id="Participant_0cyhvx8" processRef="Process_1" />
  </bpmn2:collaboration>
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:startEvent id="StartEvent_1">
      <bpmn2:outgoing>Flow_018s9cm</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:sequenceFlow id="Flow_018s9cm" sourceRef="StartEvent_1" targetRef="Activity_06i8cop" />
    <bpmn2:sequenceFlow id="Flow_0426e9c" sourceRef="Activity_06i8cop" targetRef="Activity_1lju31d" />
    <bpmn2:sequenceFlow id="Flow_1pyv0io" name="Approved" sourceRef="Gateway_0fdu4m8" targetRef="Gateway_0qdvjcv" />
    <bpmn2:sequenceFlow id="Flow_02s0yid" sourceRef="Gateway_0qdvjcv" targetRef="Activity_0dtzw94" />
    <bpmn2:sequenceFlow id="Flow_1s32ug9" sourceRef="Gateway_0qdvjcv" targetRef="Activity_106qy75" />
    <bpmn2:sequenceFlow id="Flow_054m6ze" sourceRef="Activity_0dtzw94" targetRef="Gateway_0srqwub" />
    <bpmn2:sequenceFlow id="Flow_1n4k0th" sourceRef="Activity_106qy75" targetRef="Gateway_0srqwub" />
    <bpmn2:task id="Activity_06i8cop" name="Quotation&#10;Handling">
      <bpmn2:incoming>Flow_018s9cm</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0426e9c</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:exclusiveGateway id="Gateway_0fdu4m8">
      <bpmn2:incoming>Flow_0fjylq3</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1pyv0io</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_0uo6919</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:sequenceFlow id="Flow_1mqnj9o" sourceRef="Gateway_0srqwub" targetRef="Activity_1oanway" />
    <bpmn2:sequenceFlow id="Flow_0eikwpt" sourceRef="Activity_1oanway" targetRef="Event_182g3lw" />
    <bpmn2:sequenceFlow id="Flow_0fjylq3" sourceRef="Activity_1lju31d" targetRef="Gateway_0fdu4m8" />
    <bpmn2:parallelGateway id="Gateway_0srqwub">
      <bpmn2:incoming>Flow_054m6ze</bpmn2:incoming>
      <bpmn2:incoming>Flow_1n4k0th</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1mqnj9o</bpmn2:outgoing>
    </bpmn2:parallelGateway>
    <bpmn2:endEvent id="Event_182g3lw">
      <bpmn2:incoming>Flow_0eikwpt</bpmn2:incoming>
      <bpmn2:terminateEventDefinition id="TerminateEventDefinition_186xud5" />
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="Flow_0uo6919" name="Not Approved" sourceRef="Gateway_0fdu4m8" targetRef="Event_0vsh3bf" />
    <bpmn2:endEvent id="Event_0vsh3bf">
      <bpmn2:incoming>Flow_0uo6919</bpmn2:incoming>
      <bpmn2:terminateEventDefinition id="TerminateEventDefinition_12ohz4r" />
    </bpmn2:endEvent>
    <bpmn2:subProcess id="Activity_1lju31d" name="Approve&#10;Order">
      <bpmn2:incoming>Flow_0426e9c</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0fjylq3</bpmn2:outgoing>
    </bpmn2:subProcess>
    <bpmn2:parallelGateway id="Gateway_0qdvjcv">
      <bpmn2:incoming>Flow_1pyv0io</bpmn2:incoming>
      <bpmn2:outgoing>Flow_02s0yid</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_1s32ug9</bpmn2:outgoing>
    </bpmn2:parallelGateway>
    <bpmn2:task id="Activity_0dtzw94" name="Order&#10;Handling">
      <bpmn2:incoming>Flow_02s0yid</bpmn2:incoming>
      <bpmn2:outgoing>Flow_054m6ze</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_106qy75" name="Order Handling">
      <bpmn2:incoming>Flow_1s32ug9</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1n4k0th</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:userTask id="Activity_1oanway" name="Review &#10;Order">
      <bpmn2:incoming>Flow_1mqnj9o</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0eikwpt</bpmn2:outgoing>
    </bpmn2:userTask>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0czsqyr">
      <bpmndi:BPMNShape id="Participant_0cyhvx8_di" bpmnElement="Participant_0cyhvx8" isHorizontal="true">
        <dc:Bounds x="130" y="220" width="978" height="450" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_018s9cm_di" bpmnElement="Flow_018s9cm">
        <di:waypoint x="208" y="440" />
        <di:waypoint x="230" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0426e9c_di" bpmnElement="Flow_0426e9c">
        <di:waypoint x="330" y="440" />
        <di:waypoint x="360" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1pyv0io_di" bpmnElement="Flow_1pyv0io">
        <di:waypoint x="535" y="440" />
        <di:waypoint x="585" y="440" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="537" y="422" width="47" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_02s0yid_di" bpmnElement="Flow_02s0yid">
        <di:waypoint x="610" y="415" />
        <di:waypoint x="610" y="370" />
        <di:waypoint x="650" y="370" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1s32ug9_di" bpmnElement="Flow_1s32ug9">
        <di:waypoint x="610" y="465" />
        <di:waypoint x="610" y="510" />
        <di:waypoint x="650" y="510" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_054m6ze_di" bpmnElement="Flow_054m6ze">
        <di:waypoint x="750" y="370" />
        <di:waypoint x="790" y="370" />
        <di:waypoint x="790" y="415" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1n4k0th_di" bpmnElement="Flow_1n4k0th">
        <di:waypoint x="750" y="510" />
        <di:waypoint x="790" y="510" />
        <di:waypoint x="790" y="465" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1mqnj9o_di" bpmnElement="Flow_1mqnj9o">
        <di:waypoint x="815" y="440" />
        <di:waypoint x="890" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0eikwpt_di" bpmnElement="Flow_0eikwpt">
        <di:waypoint x="940" y="480" />
        <di:waypoint x="940" y="552" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0fjylq3_di" bpmnElement="Flow_0fjylq3">
        <di:waypoint x="460" y="440" />
        <di:waypoint x="485" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0uo6919_di" bpmnElement="Flow_0uo6919">
        <di:waypoint x="510" y="415" />
        <di:waypoint x="510" y="348" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="436" y="363" width="68" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="172" y="422" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_06i8cop_di" bpmnElement="Activity_06i8cop">
        <dc:Bounds x="230" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0fdu4m8_di" bpmnElement="Gateway_0fdu4m8" isMarkerVisible="true">
        <dc:Bounds x="485" y="415" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1jucnz9_di" bpmnElement="Gateway_0srqwub">
        <dc:Bounds x="765" y="415" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1cwldz4_di" bpmnElement="Event_182g3lw">
        <dc:Bounds x="922" y="552" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1wspkvz_di" bpmnElement="Event_0vsh3bf">
        <dc:Bounds x="492" y="312" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0evyuqg_di" bpmnElement="Gateway_0qdvjcv">
        <dc:Bounds x="585" y="415" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0dtzw94_di" bpmnElement="Activity_0dtzw94">
        <dc:Bounds x="650" y="330" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_106qy75_di" bpmnElement="Activity_106qy75">
        <dc:Bounds x="650" y="470" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0mvf1f2_di" bpmnElement="Activity_1oanway">
        <dc:Bounds x="890" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0g4vfpp_di" bpmnElement="Activity_1lju31d">
        <dc:Bounds x="360" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`