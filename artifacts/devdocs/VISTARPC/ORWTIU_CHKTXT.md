---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTIU CHKTXT<br/>
# ORWTIU CHKTXT

Check for existence of text in TIU(8925,TIUDA, either in "TEXT" or "TEMP" nodes, before allowing signature.

## Properties

Property | Value
--- | ---
Label | CHKTXT
Routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORTIUDA | LITERAL |  | true | Pointer to file 8925.



## MUMPS Method Description

Property | Value
--- | ---
Method | [CHKTXT^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Checks for presence of text before signature
Input Parameters | ORTIUDA
Code | {::nomarkdown}<pre><code> S ORY='$$EMPTYDOC^TIULF(ORTIUDA)  ;DBIA #4426<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}