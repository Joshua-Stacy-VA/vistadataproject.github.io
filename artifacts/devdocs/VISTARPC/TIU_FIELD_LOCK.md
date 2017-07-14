---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU FIELD LOCK<br/>
# TIU FIELD LOCK

Locks a template field record for editing

## Properties

Property | Value
--- | ---
Label | LOCK
Routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | IEN of Template Field.



## MUMPS Method Description

Property | Value
--- | ---
Method | [LOCK^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | Lock Template Field
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> L +^TIU(8927.1,TIUDA,0):1<br/> S TIUY=$T</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}