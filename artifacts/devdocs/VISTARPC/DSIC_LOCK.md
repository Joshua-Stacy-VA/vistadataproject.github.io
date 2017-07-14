---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC LOCK<br/>
# DSIC LOCK

This will allow a GUI application issue a LOCK or UNLOCK on a global node or a record in a file.  If the LOCK is issued, it is the responsibility of the application to issue the UNLOCK.

## Properties

Property | Value
--- | ---
Label | LOCK
Routine | [DSICLOCK](http://code.osehra.org/dox/Routine_DSICLOCK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REF | LITERAL | 128 | true | This can be a closed form of a global or it can be a file number.  If it is a file number, then IFN is also required.  The file number can be the file number of the entire file or the subfile number of corresponding to the ^DD() value.  If it is a subfile, then the IFN parameter must be set accordingly. Examples of globals:  ^DSI(19621,0) - since there is no record number the global name has to                  be passed  ^DSI(19621,&quot;B&quot;)
IFN | LITERAL | 15 | true | This is the internal entry number (record number) of the record that you wish to lock or unlock in the file specified in the REF parameter.  IFN is required if the REF parameter is a file or subfile number. IFN is the IEN if you are locking the entire record.  If you are locking a subrecord in a multiple, the IFN must be a proper IENS at the appropriate level as documented in the Fileman DBS manuals.
FLAG | LITERAL | 2 | true | This flag indicates whether or not the global reference should be locked or unlocked.  The default value is 1 which means to lock the global.  If it has a value of -1 then unlock the global reference.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}