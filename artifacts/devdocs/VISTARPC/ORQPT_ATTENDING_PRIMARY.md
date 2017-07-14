---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT ATTENDING PRIMARY<br/>
# ORQPT ATTENDING PRIMARY

Returns a patient's attending physician and primary provider.

## Properties

Property | Value
--- | ---
Label | ATTPRIM
Routine | [ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 16 | true | Patient identifier from the PATIENT FILE [#2].




## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}