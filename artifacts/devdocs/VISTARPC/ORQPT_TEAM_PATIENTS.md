---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT TEAM PATIENTS<br/>
# ORQPT TEAM PATIENTS

Function returns an array of patients on a team.

## Properties

Property | Value
--- | ---
Label | TEAMPTS
Routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TEAM ID | LITERAL | 16 | true | The record number from the OE/RR Team File (#100.21).



## MUMPS Method Description

Property | Value
--- | ---
Method | [TEAMPTS^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
Method Comment | RETURN LIST OF PATIENTS IN A TEAM
Input Parameters | TEAM, TMPFLAG
First Comment | {::nomarkdown}<pre><code> Also called under DBIA # 2692.<br/> If TMPFLAG passed and = TRUE, code expects a "^TMP(xxx"<br/>    global root string passed in ORY, and builds the returned <br/>    list in that global instead of to a memory array.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DOTMP,NEWTMP<br/> S DOTMP=0<br/> I $G(TMPFLAG) D             ; Was value passed?<br/> .I TMPFLAG S DOTMP=1        ; Is value TRUE?<br/> I +$G(TEAM)<1 D<br/> .I DOTMP S NEWTMP=ORY_1_")",@NEWTMP="^No team identified" Q<br/> .I 'DOTMP S ORY(1)="^No team identified" Q<br/> N ORI,ORPT,I<br/> S I=0<br/> S ORI=0 F  S ORI=$O(^OR(100.21,+TEAM,10,ORI)) Q:ORI<1  D<br/> .S ORPT=^OR(100.21,+TEAM,10,ORI,0)<br/> .I DOTMP D<br/> ..S I=I+1,NEWTMP=ORY_+I_")"<br/> ..S @NEWTMP=+ORPT_U_$P(^DPT(+ORPT,0),U)<br/> .I 'DOTMP S I=I+1,ORY(I)=+ORPT_U_$P(^DPT(+ORPT,0),U)<br/> I DOTMP S:I<1 NEWTMP=ORY_1_")",@NEWTMP="^No patients found."<br/> I 'DOTMP S:I<1 ORY(1)="^No patients found."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}