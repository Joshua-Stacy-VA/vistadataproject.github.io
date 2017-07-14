---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XOBV TEST MULT ARRAY PARAMS<br/>
# XOBV TEST MULT ARRAY PARAMS

This RPC receives 3 arrays set up by a client. This tests the capabilityof VistaLink to support multiple array-type RPC parameters. It sets each of the three arrays into a local array, sequentially, andreturns the local array back to the client. This RPC is used as part of the test and learning application distributedpart of VistALink.

## Properties

Property | Value
--- | ---
Label | MARRAYS
Routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARRAY | LIST |  | true | An array of information.
ARRAY2 | LIST |  | true | An array of information.
ARRAY3 | LIST |  | true | An array of information.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}