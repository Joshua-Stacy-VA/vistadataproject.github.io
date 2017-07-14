---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORAM3 COMPENT<br/>
# ORAM3 COMPENT

Enters complication note into the Anticoagulation Flowsheet file (#103).Can also be entered as part of a complete visit entry.

## Properties

Property | Value
--- | ---
Label | COMPENT
Routine | [ORAM3](http://code.osehra.org/dox/Routine_ORAM3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | 
DUZ | LITERAL |  |  | 
CCODE | LITERAL |  |  | CODE TO NOTE IF COMPLICATION IS MAJOR, MINOR OR BOTH
CTEXT | LITERAL |  |  | Carroted (&#x27;^&#x27;) string of complication types/comments
CDATE | LITERAL |  |  | &#x27;ENGLISH&#x27; DATE OF THE COMPLICATION;This is the date for the flow sheet to put the, probably historic, entry in the proper order in the flow sheet.  DATE/TIME stamp is in the file, but not visible in the flow sheet.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}