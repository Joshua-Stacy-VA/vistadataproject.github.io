---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 FILTER GET LIST<br/>
# MAG4 FILTER GET LIST

Returns a list of Image FiltersEither for a specific user (Private filters)or Public filters.Some Public filters are distributed with the installation.Public filters can also be created by the Imaging site manager.

## Properties

Property | Value
--- | ---
Label | GETLIST
Routine | [MAGGSFLT](http://code.osehra.org/dox/Routine_MAGGSFLT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL | 40 | true | This is DUZ, if &quot;&quot; is sent, then the RPC retrieves the Public filters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}