export const finance01 = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:collaboration id="Collaboration_0czsqyr">
    <bpmn2:participant id="Participant_0cyhvx8" name="Project Manager" processRef="Process_1" />
    <bpmn2:participant id="Participant_1pkei7n" name="Finance" processRef="Process_03nbtv8" />
    <bpmn2:participant id="Participant_1cgq2zz" name="News IS" processRef="Process_15j00g7" />
    <bpmn2:messageFlow id="Flow_191rqoz" sourceRef="Activity_1uolowb" targetRef="Activity_1b68qrt" />
    <bpmn2:messageFlow id="Flow_0bji2r5" sourceRef="Activity_1uolowb" targetRef="Activity_0o56861" />
    <bpmn2:messageFlow id="Flow_1nkszoy" sourceRef="Activity_165fdov" targetRef="Activity_1bxu4b8" />
  </bpmn2:collaboration>
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:sequenceFlow id="Flow_00qz2l4" sourceRef="StartEvent_1" targetRef="Activity_1kym186" />
    <bpmn2:sequenceFlow id="Flow_0a6q6mb" sourceRef="Activity_1kym186" targetRef="Activity_1uolowb" />
    <bpmn2:sequenceFlow id="Flow_0txhnf5" sourceRef="Activity_1uolowb" targetRef="Event_0qa2cao" />
    <bpmn2:task id="Activity_1kym186" name="Collect Task&#10;Weekly Status">
      <bpmn2:incoming>Flow_00qz2l4</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0a6q6mb</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_1uolowb" name="Update&#10;Project Schedule">
      <bpmn2:incoming>Flow_0a6q6mb</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0txhnf5</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:endEvent id="Event_0qa2cao">
      <bpmn2:incoming>Flow_0txhnf5</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:startEvent id="StartEvent_1" name="Weekly Report">
      <bpmn2:outgoing>Flow_00qz2l4</bpmn2:outgoing>
      <bpmn2:timerEventDefinition id="TimerEventDefinition_18lhvoo" />
    </bpmn2:startEvent>
  </bpmn2:process>
  <bpmn2:process id="Process_03nbtv8">
    <bpmn2:sequenceFlow id="Flow_1lyughp" sourceRef="Event_0d6rhsy" targetRef="Activity_165fdov" />
    <bpmn2:sequenceFlow id="Flow_1cddz0o" sourceRef="Activity_165fdov" targetRef="Activity_0igxrc7" />
    <bpmn2:sequenceFlow id="Flow_1pkpsyx" sourceRef="Activity_0igxrc7" targetRef="Activity_01k62q2" />
    <bpmn2:sequenceFlow id="Flow_1f20ewe" sourceRef="Activity_01k62q2" targetRef="Event_0fixfag" />
    <bpmn2:endEvent id="Event_0fixfag">
      <bpmn2:incoming>Flow_1f20ewe</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:task id="Activity_01k62q2" name="Send Revenew Report to HQ">
      <bpmn2:incoming>Flow_1pkpsyx</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1f20ewe</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_0igxrc7" name="Generate Revenew Recognitions Report">
      <bpmn2:incoming>Flow_1cddz0o</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1pkpsyx</bpmn2:outgoing>
      <bpmn2:dataOutputAssociation id="DataOutputAssociation_172u3dh">
        <bpmn2:targetRef>DataObjectReference_0i4pehp</bpmn2:targetRef>
      </bpmn2:dataOutputAssociation>
    </bpmn2:task>
    <bpmn2:task id="Activity_165fdov" name="Generate Progress Complection Report">
      <bpmn2:incoming>Flow_1lyughp</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1cddz0o</bpmn2:outgoing>
      <bpmn2:dataOutputAssociation id="DataOutputAssociation_1m640to">
        <bpmn2:targetRef>DataObjectReference_0i4pehp</bpmn2:targetRef>
      </bpmn2:dataOutputAssociation>
    </bpmn2:task>
    <bpmn2:startEvent id="Event_0d6rhsy" name="Corporate Report">
      <bpmn2:outgoing>Flow_1lyughp</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:dataObjectReference id="DataObjectReference_0i4pehp" name="Progress Report" dataObjectRef="DataObject_1d6w0ol" />
    <bpmn2:dataObject id="DataObject_1d6w0ol" />
  </bpmn2:process>
  <bpmn2:process id="Process_15j00g7">
    <bpmn2:task id="Activity_1b68qrt" name="Update Resource Assignments">
      <bpmn2:dataOutputAssociation id="DataOutputAssociation_0gi3ayx">
        <bpmn2:targetRef>DataObjectReference_1qy2gh2</bpmn2:targetRef>
      </bpmn2:dataOutputAssociation>
    </bpmn2:task>
    <bpmn2:task id="Activity_1bxu4b8" name="Generate Progress Complection Report">
      <bpmn2:dataOutputAssociation id="DataOutputAssociation_0ouu9m8">
        <bpmn2:targetRef>DataObjectReference_1qy2gh2</bpmn2:targetRef>
      </bpmn2:dataOutputAssociation>
    </bpmn2:task>
    <bpmn2:task id="Activity_0o56861" name="Update Project Task" />
    <bpmn2:dataObjectReference id="DataObjectReference_1qy2gh2" name="Project effort status" dataObjectRef="DataObject_1xluxk9" />
    <bpmn2:dataObject id="DataObject_1xluxk9" />
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0czsqyr">
      <bpmndi:BPMNShape id="Participant_0cyhvx8_di" bpmnElement="Participant_0cyhvx8">
        <dc:Bounds x="130" y="220" width="600" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_00qz2l4_di" bpmnElement="Flow_00qz2l4">
        <di:waypoint x="218" y="350" />
        <di:waypoint x="250" y="350" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0a6q6mb_di" bpmnElement="Flow_0a6q6mb">
        <di:waypoint x="350" y="350" />
        <di:waypoint x="400" y="350" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0txhnf5_di" bpmnElement="Flow_0txhnf5">
        <di:waypoint x="500" y="350" />
        <di:waypoint x="572" y="350" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_1kym186_di" bpmnElement="Activity_1kym186">
        <dc:Bounds x="250" y="310" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1uolowb_di" bpmnElement="Activity_1uolowb">
        <dc:Bounds x="400" y="310" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0qa2cao_di" bpmnElement="Event_0qa2cao">
        <dc:Bounds x="572" y="332" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_04gcg9x_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="182" y="332" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="164" y="375" width="72" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_1pkei7n_di" bpmnElement="Participant_1pkei7n" isHorizontal="true">
        <dc:Bounds x="130" y="490" width="900" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1lyughp_di" bpmnElement="Flow_1lyughp">
        <di:waypoint x="238" y="630" />
        <di:waypoint x="550" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1cddz0o_di" bpmnElement="Flow_1cddz0o">
        <di:waypoint x="650" y="630" />
        <di:waypoint x="700" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1pkpsyx_di" bpmnElement="Flow_1pkpsyx">
        <di:waypoint x="800" y="630" />
        <di:waypoint x="850" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1f20ewe_di" bpmnElement="Flow_1f20ewe">
        <di:waypoint x="950" y="630" />
        <di:waypoint x="972" y="630" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_0fixfag_di" bpmnElement="Event_0fixfag">
        <dc:Bounds x="972" y="612" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_01k62q2_di" bpmnElement="Activity_01k62q2">
        <dc:Bounds x="850" y="590" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0igxrc7_di" bpmnElement="Activity_0igxrc7">
        <dc:Bounds x="700" y="590" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_165fdov_di" bpmnElement="Activity_165fdov">
        <dc:Bounds x="550" y="590" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0d6rhsy_di" bpmnElement="Event_0d6rhsy">
        <dc:Bounds x="202" y="612" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="177" y="655" width="86" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="DataObjectReference_0i4pehp_di" bpmnElement="DataObjectReference_0i4pehp">
        <dc:Bounds x="662" y="505" width="36" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="639" y="562" width="82" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_1cgq2zz_di" bpmnElement="Participant_1cgq2zz" isHorizontal="true">
        <dc:Bounds x="130" y="760" width="600" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1b68qrt_di" bpmnElement="Activity_1b68qrt">
        <dc:Bounds x="410" y="860" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1bxu4b8_di" bpmnElement="Activity_1bxu4b8">
        <dc:Bounds x="550" y="860" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0o56861_di" bpmnElement="Activity_0o56861">
        <dc:Bounds x="270" y="860" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="DataObjectReference_1qy2gh2_di" bpmnElement="DataObjectReference_1qy2gh2">
        <dc:Bounds x="512" y="775" width="36" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="498" y="832" width="64" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_191rqoz_di" bpmnElement="Flow_191rqoz">
        <di:waypoint x="450" y="390" />
        <di:waypoint x="450" y="860" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0bji2r5_di" bpmnElement="Flow_0bji2r5">
        <di:waypoint x="450" y="390" />
        <di:waypoint x="450" y="790" />
        <di:waypoint x="310" y="790" />
        <di:waypoint x="310" y="860" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1nkszoy_di" bpmnElement="Flow_1nkszoy">
        <di:waypoint x="600" y="670" />
        <di:waypoint x="600" y="860" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="DataOutputAssociation_1m640to_di" bpmnElement="DataOutputAssociation_1m640to">
        <di:waypoint x="600" y="590" />
        <di:waypoint x="600" y="530" />
        <di:waypoint x="660" y="530" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="DataOutputAssociation_172u3dh_di" bpmnElement="DataOutputAssociation_172u3dh">
        <di:waypoint x="750" y="590" />
        <di:waypoint x="750" y="530" />
        <di:waypoint x="698" y="530" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="DataOutputAssociation_0gi3ayx_di" bpmnElement="DataOutputAssociation_0gi3ayx">
        <di:waypoint x="480" y="860" />
        <di:waypoint x="480" y="800" />
        <di:waypoint x="512" y="800" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="DataOutputAssociation_0ouu9m8_di" bpmnElement="DataOutputAssociation_0ouu9m8">
        <di:waypoint x="570" y="860" />
        <di:waypoint x="570" y="800" />
        <di:waypoint x="548" y="800" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`