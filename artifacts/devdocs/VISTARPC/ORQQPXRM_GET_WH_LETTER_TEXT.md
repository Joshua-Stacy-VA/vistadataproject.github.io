---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM GET WH LETTER TEXT<br/>
# ORQQPXRM GET WH LETTER TEXT

Retrieve letter text for a WH letter

## Properties

Property | Value
--- | ---
Label | LETTER
Routine | [WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
WVIEN | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [LETTER^WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html)
Method Comment | Returns the letter text for the purpose of
Input Parameters | WVIEN
First Comment | {::nomarkdown}<pre><code> notification<br/>  Input: RESULT - array name to return data in [required]<br/>          WVIEN - FILE 790.404 IEN [required]<br/><br/> Output: RESULT(0)=First line of letter text   <OR><br/>                   -1^error message<br/>         RESULT(n)= remaining lines of letter text</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I '$G(WVIEN) S RESULT(0)="-1^Purpose IEN not greater than 0" Q<br/> I '$D(^WV(790.404,WVIEN,0)) D  Q<br/> .S RESULT(0)="-1^No such purpose of notification"<br/> .Q<br/> I '$O(^WV(790.404,WVIEN,1,0)) D  Q<br/> .S RESULT(0)="-1^No letter defined for this purpose"<br/> .Q<br/> N WVCNT,WVLOOP<br/> S RESULT(0)="",(WVCNT,WVLOOP)=0<br/> F  S WVLOOP=$O(^WV(790.404,WVIEN,1,WVLOOP)) Q:'WVLOOP  D<br/> .S WVCNT=WVCNT+1<br/> .S RESULT(WVCNT)=$G(^WV(790.404,WVIEN,1,WVLOOP,0))<br/> .Q</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uReminders.pas">uReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}