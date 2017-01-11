---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE STATUS 

 property | value 
--- | --- 
 label | MAG DICOM ROUTE STATUS
 tag | STATUS
 routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ When the Routing Gateway has made an attempt to transmit a file,it will call this RPC to change the status of theentry in the transmission queue to either \SENT\ or \FAILED\. This RPC will change the status of the entry in the transmissionqueue (file # 2005.035) with entry-number D0 to the indicatedstatus.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| D0 | LITERAL | 30 | true | The value of this parameter is a pointer to an entry in theTransmission Queue (^MAGQUEUE(2006.035,D0)).The status of this entry in the Transmission Queue will beupdated by this RPC. | 
| STATUS | LITERAL | 30 | true | The value of this parameter is a string that identifies thenew status of the current entry in the Transmission Queue.Possible values are \SENDING\, \SENT\ and \FAILED\. | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 




 ###### Generated on January 11th 2017, 6:39:43 am