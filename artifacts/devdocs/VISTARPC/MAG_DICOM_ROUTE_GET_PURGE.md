---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM ROUTE GET PURGE<br/>
# MAG DICOM ROUTE GET PURGE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ 

## Properties

Property | Value
--- | ---
Label | PURGE
Routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.
DEST | LITERAL | 30 | true | The value of this parameter is a pointer to either ^MAG(2005.2)or ^MAGDICOM(2006.585).This pointer identifies the destination to which the imageswere transmitted.
MAX | LITERAL | 30 | true | The value of this parameter is an integer number.This number specifies the maximum number of names of files thatis to be returned per call to this RPC.
DONE | LIST |  | true | This parameter is an array. The values in this array (if any)are obtained in an earlier call to this same RPC.Each call to this RPC returns a list of files to be purgedat the remote location, and each subsequent call to this RPCshould provide (through this parameter) the list of files thathave been successfully purged. In the VistA system, a cross-referenceis maintained that indicates which files are to be purged when,and the information from this parameter array is used to clean outthis cross-reference.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}