---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPS LIST<br/>
# ORQQPS LIST

Function returns a list of a patient's medications.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient id (DFN) from Patient File (#2).
START DATE/TIME | LITERAL | 16 | true | Start date/time in FileMan format indicating what date/time to beginlisting medications.
STOP DATE/TIME | LITERAL | 16 | true | Stop date/time in FileMan format indicating what date/time to end listingmedications.



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
Method Comment | return pt&#x27;s condensed medication list
Input Parameters | ORPT, ORSTRTDT, ORSTOPDT
First Comment | {::nomarkdown}<pre><code>id^nameform^stop date^route^schedule/infusion rate^refills remaining</code></pre>{:/}
Code | {::nomarkdown}<pre><code> K ^TMP("PS",$J),^TMP("ORPS",$J)<br/> D OCL^PSOORRL(ORPT,ORSTRTDT,ORSTOPDT)<br/> N I,J,K,X,Z,ZZ,NODE,RSORT,NAME,SCH,MDR,RATE,TYPE,ADD,SOL,IVX<br/> S I=0,X=0,NODE=0,SCH="",MDR=""<br/> F  S X=$O(^TMP("PS",$J,X)) Q:X<1  D<br/> .Q:+$P(^TMP("PS",$J,X,0),U)<1<br/> .S TYPE=$P(^TMP("PS",$J,X,0),U)<br/> .I +$G(^TMP("PS",$J,X,"MDR",0))>0 D  ;get abbrev med route<br/> ..S ZZ=^TMP("PS",$J,X,"MDR",0) F Z=1:1:ZZ D<br/> ...I Z=1 S MDR=^TMP("PS",$J,X,"MDR",Z,0)<br/> ...E  S MDR=MDR_", "_^TMP("PS",$J,X,"MDR",Z,0)<br/> .I +$G(^TMP("PS",$J,X,"SCH",0))>0 D  ;get schedule<br/> ..S ZZ=^TMP("PS",$J,X,"SCH",0) F Z=1:1:ZZ D<br/> ...I Z=1 S SCH=$P(^TMP("PS",$J,X,"SCH",Z,0),U)<br/> ...E  S SCH=SCH_", "_$P(^TMP("PS",$J,X,"SCH",Z,0),U)<br/> .;<br/> .I TYPE["I",+$G(^TMP("PS",$J,X,"B",0))>0 D  ;IV meds - get solution<br/> ..S ZZ=^TMP("PS",$J,X,"B",0) F Z=1:1:ZZ D<br/> ...I Z=1 S SOL=$P(^TMP("PS",$J,X,"B",Z,0),U)_" "_$P(^(0),U,2)<br/> ...E  S SOL=SOL_", "_$P(^TMP("PS",$J,X,"B",Z,0),U)_" "_$P(^(0),U,2)<br/> ..I +$G(^TMP("PS",$J,X,"A",0))>0 D  ;get additive<br/> ...S ZZ=^TMP("PS",$J,X,"A",0) F Z=1:1:ZZ D<br/> ....S ADD=$P(^TMP("PS",$J,X,"A",Z,0),U)_" "_$P(^(0),U,2)<br/> ....S NAME=ADD_" in "_$G(SOL)<br/> ....S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)_NAME<br/> ....S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars<br/> ....S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_NAME_U_$P(^(0),U,4)_U_$G(MDR)_U_$P(^(0),U,3)<br/> ..E  D<br/> ...S NAME=$G(SOL)<br/> ...S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)<br/> ...S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars<br/> ...S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_NAME_U_$P(^(0),U,4)_U_$G(MDR)_U_$P(^(0),U,3)<br/> .;<br/> .I TYPE["I",'(+$G(^TMP("PS",$J,X,"B",0))>0) D  ;unit dose inpatient meds<br/> ..S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)_$P(^(0),U,2)<br/> ..S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars<br/> ..S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_$P(^(0),U,2)_U_$P(^(0),U,4)_U_$G(MDR)_U_$G(SCH)<br/> .;<br/> .I TYPE["O" D  ;outpatient meds<br/> ..S RSORT=9999999-$P(^TMP("PS",$J,X,0),U,4)_$P(^(0),U)_$P(^(0),U,2)<br/> ..S RSORT=$E(RSORT,1,128)  ;limit gbl subscript length to 128 chars<br/> ..S ^TMP("ORPS",$J,RSORT)=$P(^TMP("PS",$J,X,0),U)_U_$P(^(0),U,2)_U_$P(^(0),U,4)_U_$G(MDR)_U_$G(SCH)_U_$P(^(0),U,5)<br/> .;<br/> F  S NODE=$O(^TMP("ORPS",$J,NODE)) Q:NODE<1  D<br/> .S I=I+1<br/> .S ORY(I)=^TMP("ORPS",$J,NODE)<br/> S:+$G(ORY(1))<1 ORY(1)="^No medications found."<br/> K ^TMP("PS",$J),^TMP("ORPS",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}