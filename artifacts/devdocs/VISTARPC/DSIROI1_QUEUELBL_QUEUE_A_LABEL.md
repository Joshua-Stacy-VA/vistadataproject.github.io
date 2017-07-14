---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROI1 QUEUELBL QUEUE A LABEL<br/>
# DSIROI1 QUEUELBL QUEUE A LABEL

This routine adds a label to an individual clerk's queue for batch printing.

## Properties

Property | Value
--- | ---
Label | QUEUELBL
Routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CIEN | LITERAL | 20 | true | CIEN is the clerk IEN.  This points at file 200.
RIEN | LITERAL | 20 | true | RIEN is the requestor IEN.  This points to file 19620.12.
AIEN | LITERAL | 20 | true | AIEN is the address IEN.  This points at file 19620.92.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}