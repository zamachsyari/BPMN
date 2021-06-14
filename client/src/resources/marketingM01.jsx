export const marketing01 = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:collaboration id="Collaboration_0czsqyr">
    <bpmn2:participant id="Participant_0cyhvx8" name="Sales" processRef="Process_1" />
    <bpmn2:participant id="Participant_1rt0ze0" name="Product Manager" processRef="Process_1oj8ea5" />
    <bpmn2:participant id="Participant_1fqu2b6" name="Finance" processRef="Process_1h2y0mn" />
    <bpmn2:participant id="Participant_1vs6535" name="Operation" processRef="Process_1fo7cfc" />
    <bpmn2:participant id="Participant_039r1t1" name="System" processRef="Process_1a5yr9v" />
    <bpmn2:messageFlow id="Flow_14vic7d" sourceRef="Activity_0ahz4lh" targetRef="Event_1c3am8o" />
    <bpmn2:messageFlow id="Flow_1shjvxz" sourceRef="Activity_02as75k" targetRef="Activity_0jlal34" />
    <bpmn2:messageFlow id="Flow_0h6yjof" sourceRef="Activity_0jlal34" targetRef="Activity_12gfzgv" />
  </bpmn2:collaboration>
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:task id="Activity_0maoylc" name="Pricing Exception Request" />
    <bpmn2:exclusiveGateway id="Gateway_1q55m0u" name="Appeal?" />
  </bpmn2:process>
  <bpmn2:process id="Process_1oj8ea5" isExecutable="false">
    <bpmn2:startEvent id="Event_0xfpa6w">
      <bpmn2:outgoing>Flow_0vrk41m</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:task id="Activity_0ahz4lh" name="Pricing Change Request">
      <bpmn2:incoming>Flow_0vrk41m</bpmn2:incoming>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="Flow_0vrk41m" sourceRef="Event_0xfpa6w" targetRef="Activity_0ahz4lh" />
    <bpmn2:sequenceFlow id="Flow_1el7v0y" sourceRef="Activity_12gfzgv" targetRef="Event_13jc485" />
    <bpmn2:endEvent id="Event_13jc485">
      <bpmn2:incoming>Flow_1el7v0y</bpmn2:incoming>
      <bpmn2:terminateEventDefinition id="TerminateEventDefinition_0lssfmu" />
    </bpmn2:endEvent>
    <bpmn2:task id="Activity_12gfzgv" name="Implement Changes">
      <bpmn2:outgoing>Flow_1el7v0y</bpmn2:outgoing>
    </bpmn2:task>
  </bpmn2:process>
  <bpmn2:process id="Process_1h2y0mn" isExecutable="false">
    <bpmn2:exclusiveGateway id="Gateway_0860016" name="Approved?">
      <bpmn2:outgoing>Flow_0ty2qv1</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:sequenceFlow id="Flow_0ty2qv1" sourceRef="Gateway_0860016" targetRef="Gateway_1vqcr91" />
    <bpmn2:sequenceFlow id="Flow_1ab1zzv" sourceRef="Gateway_1vqcr91" targetRef="Event_17t23rl" />
    <bpmn2:exclusiveGateway id="Gateway_1vqcr91" name="Approved?">
      <bpmn2:incoming>Flow_0ty2qv1</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1ab1zzv</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:endEvent id="Event_17t23rl">
      <bpmn2:incoming>Flow_1ab1zzv</bpmn2:incoming>
    </bpmn2:endEvent>
  </bpmn2:process>
  <bpmn2:process id="Process_1fo7cfc" isExecutable="false">
    <bpmn2:task id="Activity_0jlal34" name="Implement Changes" />
  </bpmn2:process>
  <bpmn2:process id="Process_1a5yr9v" isExecutable="false">
    <bpmn2:task id="Activity_02as75k" name="Update Systems" />
    <bpmn2:startEvent id="Event_1c3am8o" name="Ident">
      <bpmn2:messageEventDefinition id="MessageEventDefinition_0mtx91u" />
    </bpmn2:startEvent>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0czsqyr">
      <bpmndi:BPMNShape id="Participant_0cyhvx8_di" bpmnElement="Participant_0cyhvx8" isHorizontal="true">
        <dc:Bounds x="130" y="20" width="778" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0maoylc_di" bpmnElement="Activity_0maoylc">
        <dc:Bounds x="370" y="50" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1q55m0u_di" bpmnElement="Gateway_1q55m0u" isMarkerVisible="true">
        <dc:Bounds x="525" y="65" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="530" y="122" width="40" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_1rt0ze0_di" bpmnElement="Participant_1rt0ze0" isHorizontal="true">
        <dc:Bounds x="130" y="170" width="778" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0vrk41m_di" bpmnElement="Flow_0vrk41m">
        <di:waypoint x="218" y="240" />
        <di:waypoint x="270" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1el7v0y_di" bpmnElement="Flow_1el7v0y">
        <di:waypoint x="800" y="240" />
        <di:waypoint x="832" y="240" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_0xfpa6w_di" bpmnElement="Event_0xfpa6w">
        <dc:Bounds x="182" y="222" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ahz4lh_di" bpmnElement="Activity_0ahz4lh">
        <dc:Bounds x="270" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0tak6hi_di" bpmnElement="Event_13jc485">
        <dc:Bounds x="832" y="222" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_12gfzgv_di" bpmnElement="Activity_12gfzgv">
        <dc:Bounds x="700" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_1fqu2b6_di" bpmnElement="Participant_1fqu2b6" isHorizontal="true">
        <dc:Bounds x="130" y="320" width="778" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0ty2qv1_di" bpmnElement="Flow_0ty2qv1">
        <di:waypoint x="445" y="380" />
        <di:waypoint x="525" y="380" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ab1zzv_di" bpmnElement="Flow_1ab1zzv">
        <di:waypoint x="575" y="380" />
        <di:waypoint x="622" y="380" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Gateway_0860016_di" bpmnElement="Gateway_0860016" isMarkerVisible="true">
        <dc:Bounds x="395" y="355" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="394" y="412" width="53" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1vqcr91_di" bpmnElement="Gateway_1vqcr91" isMarkerVisible="true">
        <dc:Bounds x="525" y="355" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="524" y="412" width="53" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_17t23rl_di" bpmnElement="Event_17t23rl">
        <dc:Bounds x="622" y="362" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_1vs6535_di" bpmnElement="Participant_1vs6535" isHorizontal="true">
        <dc:Bounds x="130" y="470" width="778" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0jlal34_di" bpmnElement="Activity_0jlal34">
        <dc:Bounds x="700" y="490" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_039r1t1_di" bpmnElement="Participant_039r1t1" isHorizontal="true">
        <dc:Bounds x="130" y="620" width="778" height="140" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_02as75k_di" bpmnElement="Activity_02as75k">
        <dc:Bounds x="400" y="660" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0oi1iyq_di" bpmnElement="Event_1c3am8o">
        <dc:Bounds x="292" y="672" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="297" y="715" width="26" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_14vic7d_di" bpmnElement="Flow_14vic7d">
        <di:waypoint x="310" y="280" />
        <di:waypoint x="310" y="672" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1shjvxz_di" bpmnElement="Flow_1shjvxz">
        <di:waypoint x="500" y="700" />
        <di:waypoint x="760" y="700" />
        <di:waypoint x="760" y="570" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0h6yjof_di" bpmnElement="Flow_0h6yjof">
        <di:waypoint x="750" y="490" />
        <di:waypoint x="750" y="280" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`