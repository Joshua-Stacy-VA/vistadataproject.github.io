---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV LOCK<br/>
# DSIV LOCK

Lock or unlock a global reference from a GUI client

## Properties

Property | Value
--- | ---
Label | LOCK
Routine | [DSIVLOCK](http://code.osehra.org/dox/Routine_DSIVLOCK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REF | LITERAL | 30 | true | FM file number or $NAME(global) to be locked
IFN | LITERAL | 30 | true | Required if REF is a file (or subfile) numberIf REF is the top level file number, then IFN is the  IEN of the recordIf REF is a subdictionary number for a multiple, then  IFN must be the appropriate IENS for that multiple  level
FLAG | LITERAL | 2 | true | Flag for locking or unlocking  1: Lock -1: Unlock Defaults to 1
FUN | LITERAL | 1 | true | Flag to indicate if the call is extrinsic or RPC   1: Extrinsic  0: RPC



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}