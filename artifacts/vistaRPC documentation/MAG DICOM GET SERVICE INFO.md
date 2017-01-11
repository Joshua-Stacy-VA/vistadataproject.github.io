---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET SERVICE INFO 

 property | value 
--- | --- 
 label | MAG DICOM GET SERVICE INFO
 tag | SERVICE
 routine | [MAGDRPC2](http://code.osehra.org/dox/Routine_MAGDRPC2_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC retrieves the credentials for the DICOM GatewayService account.When an end-user changes an access or verify code whilea \long-running\ process like \Process Text Messages\ or\Process DICOM Images\ is running, the need my arise forthe DICOM Gateway to re-connect to its VistA system.When the stored user's credentials fail, the DICOM Gatewaycan temporarily continue to function using these credentials.




 ###### Generated on January 11th 2017, 6:39:43 am