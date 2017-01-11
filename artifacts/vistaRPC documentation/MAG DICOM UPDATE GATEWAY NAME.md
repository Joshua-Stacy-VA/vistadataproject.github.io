---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM UPDATE GATEWAY NAME 

 property | value 
--- | --- 
 label | MAG DICOM UPDATE GATEWAY NAME
 tag | UPDTGW
 routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC updates the name and location of a DICOM Gateway in thedatabase on the VistA system (table # 2006.587 in ^MAG(2006.587)).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OLDNAM | LITERAL | 30 | true | The value of this parameter is a string that identifiesthe current DICOM Gateway.This value corresponds to the one that is expectedto be the one currently stored in the VistA database. | 
| NEWNAM | LITERAL | 20 | true | The value of this parameter is a string that identifiesthe current DICOM Gateway.This value corresponds to the one that is to be enteredin the VistA database. | 
| OLDLOC | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location for which images are beingtransmitted.This value corresponds to the one that is expectedto be the one currently stored in the VistA database. | 
| NEWLOC | LITERAL | 20 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location for which images are beingtransmitted.This value corresponds to the one that is to be enteredin the VistA database. | 




 ###### Generated on January 11th 2017, 6:39:43 am