---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV IMPORT MEDIA LOG STORE 

 property | value 
--- | --- 
 label | MAGV IMPORT MEDIA LOG STORE
 tag | IMPMEDIA
 routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Files data from an Importer II media import event to the MAGV IMPORT MEDIA LOG file (#2006.9422)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGVDUZ | LITERAL | 16 | true | DUZ of the user importing the media. | 
| MAGVWKST | LITERAL | 30 | true | Computer name of the workstation used for the media import event. | 
| MEDTYPE | LITERAL | 16 | true | Media Type used to transport the objects:  Direct Import,  Network Import, Staged Media, DICOM Correct. | 
| MEDVALID | LITERAL | 16 | true | Validation status of the media import event:    0 = VALID MEDIA -1 = DICOMDIR MISSING -2 = DICOMDIR INVALID | 
| MEDVMSG | LITERAL | 220 | true | Description of the validation status of the media import event. | 




 ###### Generated on January 11th 2017, 6:39:43 am