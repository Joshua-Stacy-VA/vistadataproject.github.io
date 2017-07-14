---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU GET PRF ACTIONS<br/>
# TIU GET PRF ACTIONS

This RPC gets the Patient Record Flag History Assignments/Actions for a Patient/Title Combination.

## Properties

Property | Value
--- | ---
Label | GETACTS
Routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUTTL | LITERAL |  | true | TIU DOCUMENT DEFINITION (TITLE) IEN
DFN | LITERAL |  | true | Patient Pointer (file 2 IEN)



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETACTS^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Method Comment | RPC Gets PRF Action info
Input Parameters | TIUTTL, DFN
First Comment | {::nomarkdown}<pre><code>"Action" is shorthand for Assignment History entry<br/>Returns data in the following format for each Action:<br/>TIUY(ACTID) =<br/> FLAGNAME^ASSGNIEN^ACTIONNAME^ACTIONIEN^ACTIONDATEI^ACTIONDATEE^TIUIEN<br/>  where Integer ACTID = subscript after "HISTORY" in array returned<br/>   by GETHTIU^DGPFAPI1<br/>Returns linkable actions (whether linked or not) for Patient DFN<br/> and flag assoc w/ TIUTTL.<br/>Excludes UNLINKABLE actions = Entered in Error actions (EIE) or<br/> actions taken prior to an EIE action.<br/>Erroneous and EIE actions may be for the wrong patient, etc.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUDG,ACTID,TIUFLAG,UNLINKBL,ARRAYNM<br/> S TIUY=1,ARRAYNM="^TMP(""TIUPRFH"",$J)"<br/> S TIUDG=$$GETHTIU^DGPFAPI1(DFN,TIUTTL,ARRAYNM)<br/> I 'TIUDG S TIUY="0^"_$P(TIUDG,U,2) G GETACTX<br/> I '$$AVAILACT^TIUPRFL("^TMP(""TIUPRFH"",$J)",,.UNLINKBL) S TIUY="0^All linkable Flag actions are already linked"<br/> S TIUFLAG=$P(^TMP("TIUPRFH",$J,"FLAG"),U,2)_U_$P(^TMP("TIUPRFH",$J,"ASSIGNIEN"),U)<br/> S ACTID=0<br/> F  S ACTID=$O(^TMP("TIUPRFH",$J,"HISTORY",ACTID)) Q:'+ACTID  D<br/> . Q:$G(UNLINKBL(ACTID))<br/> . S TIUY(ACTID)=TIUFLAG<br/> . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"ACTION"),U,2)<br/> . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"HISTIEN"),U,1)<br/> . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"DATETIME"),U,1)<br/> . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"DATETIME"),U,2)<br/> . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"TIUIEN"),U,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fNoteProps.pas">fNoteProps.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}