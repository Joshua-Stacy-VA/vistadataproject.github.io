---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE GET VISIT<br/>
# ORWPCE GET VISIT

Returns the visit IEN.

## Properties

Property | Value
--- | ---
Label | GETVISIT
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETVISIT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Get the visit IEN
Input Parameters | IEN, DFN, VSITSTR
Code | {::nomarkdown}<pre><code> I +$G(IEN)<1 D  I 1<br/> .S VISIT=$$GETENC^PXAPI(DFN,$P(VSITSTR,";",2),$P(VSITSTR,";"))<br/> E  S VISIT=$P(^TIU(8925,IEN,0),U,3)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}