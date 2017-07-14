---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC SR LIST<br/>
# DSIC SR LIST

Return a list of actual surgical cases for a patient for a date range

## Properties

Property | Value
--- | ---
Label | LISTSR
Routine | [DSICSRPT](http://code.osehra.org/dox/Routine_DSICSRPT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is patient pointer from file 2 for which to retrieve cases.
ALPHA | LITERAL | 14 | true | This is the starting date.time in Fileman format for retrieving surgical cases.  Default value is 1/1/2000
OMEGA | LITERAL | 14 | true | This is a Fileman date.time  It is the ending date for surgical cases.  The default value is TODAY



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}