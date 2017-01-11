---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE REQUEUE 

 property | value 
--- | --- 
 label | MAG DICOM ROUTE REQUEUE
 tag | REQUEUE
 routine | [MAGDRPC6](http://code.osehra.org/dox/Routine_MAGDRPC6_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ A normal maintenance activity is to re-queue any images that may not have been transmitted because the connection between the transmitting and receiving sites was temporarily unavailable. In order to perform this maintenance, the user of the DICOM Gateway would invoke a menu option that calls this RPC. This RPC will requeue any entries in the Transmission Queue that were created for the specified LOCATION and that are currently in a state of \FAILED\.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 




 ###### Generated on January 11th 2017, 6:39:43 am