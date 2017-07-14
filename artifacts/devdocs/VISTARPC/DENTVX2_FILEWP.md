---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTVX2 FILEWP<br/>
# DENTVX2 FILEWP

This RPC takes in an entity, parameter name, instance number, and the data to be filed.  

## Properties

Property | Value
--- | ---
Label | FILEWP
Routine | [DENTVX2](http://code.osehra.org/dox/Routine_DENTVX2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENT | LITERAL | 3 | true | Entity you wish to assign this Word Processing parameter to.
PAR | LITERAL | 250 | true | The word processing parameter you wish to file.
INST | LITERAL | 3 | true | Instance value of the filed parameter.
DATA | LIST | 250 | true | This is an array which contains the data to be stored in the parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}