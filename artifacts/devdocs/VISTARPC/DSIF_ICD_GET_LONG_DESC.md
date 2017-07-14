---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF ICD GET LONG DESC<br/>
# DSIF ICD GET LONG DESC

This RPC will return the long description (max 245 characters) for the specified code.

## Properties

Property | Value
--- | ---
Label | LD
Routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFVAL | LITERAL |  | true | This is the internal value of the code you wish to lookup. This input is required.
DSIFFIL | LITERAL |  | true | This is the file you wish to search. This input is required. Ex.  80 - Diagnosis     80.1 - Procedure
DSIFDT | LITERAL |  |  | This is the date you wish to search to apply code set versioning. This input is optional, if no date is passed the date will default to today.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}