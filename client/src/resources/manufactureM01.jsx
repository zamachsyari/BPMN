export const manufacture01 = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:collaboration id="Collaboration_0czsqyr">
    <bpmn2:participant id="Participant_0cyhvx8" name="Production" processRef="Process_1" />
    <bpmn2:participant id="Participant_1gkxm4k" name="Quality Assurance" processRef="Process_1oc0od1" />
    <bpmn2:messageFlow id="Flow_05lyje6" sourceRef="Activity_1a890c7" targetRef="Activity_0x8zu3r" />
    <bpmn2:messageFlow id="Flow_0vu8q9p" sourceRef="Activity_1ywz5wo" targetRef="Event_05d1atm" />
  </bpmn2:collaboration>
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:startEvent id="StartEvent_1" name="Production Order Received">
      <bpmn2:outgoing>Flow_0zqppdn</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:task id="Activity_1r3nuk2" name="Prepare Materials">
      <bpmn2:incoming>Flow_0zqppdn</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0mkoaaf</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="Flow_0zqppdn" sourceRef="StartEvent_1" targetRef="Activity_1r3nuk2" />
    <bpmn2:sequenceFlow id="Flow_0mkoaaf" sourceRef="Activity_1r3nuk2" targetRef="Activity_0xhy4q6" />
    <bpmn2:sequenceFlow id="Flow_11dgm6y" sourceRef="Activity_0xhy4q6" targetRef="Activity_1a890c7" />
    <bpmn2:sequenceFlow id="Flow_1qy650n" sourceRef="Activity_1a890c7" targetRef="Event_05d1atm" />
    <bpmn2:sequenceFlow id="Flow_049d0f3" sourceRef="Event_05d1atm" targetRef="Activity_1j1v9bu" />
    <bpmn2:sequenceFlow id="Flow_03cw8sh" sourceRef="Activity_1j1v9bu" targetRef="Gateway_0kbeudo" />
    <bpmn2:sequenceFlow id="Flow_107wnkw" name="quality not acceptable" sourceRef="Gateway_0kbeudo" targetRef="Activity_0docpjg" />
    <bpmn2:sequenceFlow id="Flow_1jqc0qw" sourceRef="Gateway_0kbeudo" targetRef="Activity_1f3tep1" />
    <bpmn2:sequenceFlow id="Flow_056h0l2" sourceRef="Activity_1f3tep1" targetRef="Event_1mvgizt" />
    <bpmn2:task id="Activity_0xhy4q6" name="Assemble Door">
      <bpmn2:incoming>Flow_0mkoaaf</bpmn2:incoming>
      <bpmn2:outgoing>Flow_11dgm6y</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_1a890c7" name="Send inquiry for&#10;quality check">
      <bpmn2:incoming>Flow_11dgm6y</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1qy650n</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_1j1v9bu" name="receive and check quality report">
      <bpmn2:incoming>Flow_049d0f3</bpmn2:incoming>
      <bpmn2:outgoing>Flow_03cw8sh</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_0docpjg" name="fix door">
      <bpmn2:incoming>Flow_107wnkw</bpmn2:incoming>
    </bpmn2:task>
    <bpmn2:exclusiveGateway id="Gateway_0kbeudo" name="quality ok">
      <bpmn2:incoming>Flow_03cw8sh</bpmn2:incoming>
      <bpmn2:outgoing>Flow_107wnkw</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_1jqc0qw</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:task id="Activity_1f3tep1" name="release door">
      <bpmn2:incoming>Flow_1jqc0qw</bpmn2:incoming>
      <bpmn2:outgoing>Flow_056h0l2</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:endEvent id="Event_1mvgizt" name="door released">
      <bpmn2:incoming>Flow_056h0l2</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:intermediateCatchEvent id="Event_05d1atm" name="quality report received">
      <bpmn2:incoming>Flow_1qy650n</bpmn2:incoming>
      <bpmn2:outgoing>Flow_049d0f3</bpmn2:outgoing>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_19rn0w3" />
    </bpmn2:intermediateCatchEvent>
  </bpmn2:process>
  <bpmn2:process id="Process_1oc0od1">
    <bpmn2:sequenceFlow id="Flow_1jzlm7c" sourceRef="Activity_0x8zu3r" targetRef="Activity_1qgc3vq" />
    <bpmn2:sequenceFlow id="Flow_0a5kv0t" sourceRef="Activity_1qgc3vq" targetRef="Activity_1ywz5wo" />
    <bpmn2:task id="Activity_1ywz5wo" name="send quality report">
      <bpmn2:incoming>Flow_0a5kv0t</bpmn2:incoming>
    </bpmn2:task>
    <bpmn2:task id="Activity_1qgc3vq" name="check quality">
      <bpmn2:incoming>Flow_1jzlm7c</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0a5kv0t</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_0x8zu3r" name="receive inquiry for quality check">
      <bpmn2:outgoing>Flow_1jzlm7c</bpmn2:outgoing>
    </bpmn2:task>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0czsqyr">
      <bpmndi:BPMNShape id="Participant_0cyhvx8_di" bpmnElement="Participant_0cyhvx8" isHorizontal="true">
        <dc:Bounds x="130" y="20" width="1200" height="370" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0zqppdn_di" bpmnElement="Flow_0zqppdn">
        <di:waypoint x="218" y="220" />
        <di:waypoint x="270" y="220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0mkoaaf_di" bpmnElement="Flow_0mkoaaf">
        <di:waypoint x="370" y="220" />
        <di:waypoint x="400" y="220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11dgm6y_di" bpmnElement="Flow_11dgm6y">
        <di:waypoint x="500" y="220" />
        <di:waypoint x="540" y="220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1qy650n_di" bpmnElement="Flow_1qy650n">
        <di:waypoint x="640" y="220" />
        <di:waypoint x="672" y="220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_049d0f3_di" bpmnElement="Flow_049d0f3">
        <di:waypoint x="708" y="220" />
        <di:waypoint x="780" y="220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_03cw8sh_di" bpmnElement="Flow_03cw8sh">
        <di:waypoint x="880" y="220" />
        <di:waypoint x="955" y="220" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_107wnkw_di" bpmnElement="Flow_107wnkw">
        <di:waypoint x="980" y="195" />
        <di:waypoint x="980" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="993" y="172" width="54" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1jqc0qw_di" bpmnElement="Flow_1jqc0qw">
        <di:waypoint x="980" y="245" />
        <di:waypoint x="980" y="270" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_056h0l2_di" bpmnElement="Flow_056h0l2">
        <di:waypoint x="1030" y="310" />
        <di:waypoint x="1092" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="182" y="202" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="157" y="245" width="86" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1r3nuk2_di" bpmnElement="Activity_1r3nuk2">
        <dc:Bounds x="270" y="180" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0xhy4q6_di" bpmnElement="Activity_0xhy4q6">
        <dc:Bounds x="400" y="180" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1a890c7_di" bpmnElement="Activity_1a890c7">
        <dc:Bounds x="540" y="180" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1j1v9bu_di" bpmnElement="Activity_1j1v9bu">
        <dc:Bounds x="780" y="180" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0docpjg_di" bpmnElement="Activity_0docpjg">
        <dc:Bounds x="930" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0kbeudo_di" bpmnElement="Gateway_0kbeudo" isMarkerVisible="true">
        <dc:Bounds x="955" y="195" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="996" y="243" width="47" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1f3tep1_di" bpmnElement="Activity_1f3tep1">
        <dc:Bounds x="930" y="270" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1mvgizt_di" bpmnElement="Event_1mvgizt">
        <dc:Bounds x="1092" y="292" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1076" y="335" width="68" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1dazhye_di" bpmnElement="Event_05d1atm">
        <dc:Bounds x="672" y="202" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="658" y="172" width="65" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_1gkxm4k_di" bpmnElement="Participant_1gkxm4k" isHorizontal="true">
        <dc:Bounds x="130" y="430" width="940" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1jzlm7c_di" bpmnElement="Flow_1jzlm7c">
        <di:waypoint x="640" y="560" />
        <di:waypoint x="680" y="560" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0a5kv0t_di" bpmnElement="Flow_0a5kv0t">
        <di:waypoint x="780" y="560" />
        <di:waypoint x="820" y="560" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_1ywz5wo_di" bpmnElement="Activity_1ywz5wo">
        <dc:Bounds x="820" y="520" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1qgc3vq_di" bpmnElement="Activity_1qgc3vq">
        <dc:Bounds x="680" y="520" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0x8zu3r_di" bpmnElement="Activity_0x8zu3r">
        <dc:Bounds x="540" y="520" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_05lyje6_di" bpmnElement="Flow_05lyje6">
        <di:waypoint x="590" y="260" />
        <di:waypoint x="590" y="520" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0vu8q9p_di" bpmnElement="Flow_0vu8q9p">
        <di:waypoint x="870" y="520" />
        <di:waypoint x="870" y="320" />
        <di:waypoint x="690" y="320" />
        <di:waypoint x="690" y="238" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`