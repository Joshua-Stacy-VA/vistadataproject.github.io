---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP GET EXAM TRANSACTIONS<br/>
# DENTV TP GET EXAM TRANSACTIONS

This will return a complete list of exam transactions for a specified patient. The array is organized by node, not by date. For example all of the "OHA" Oral Health Assessment data is returned together. See GETFEX^DENTVTP7 comments for details.

## Properties

Property | Value
--- | ---
Label | GETFEX
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DPAT | LITERAL |  | true | This value should be the Patient IEN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}