---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET2 PATIENT DEMOGRAPHIC 

 property | value 
--- | --- 
 label | VPS GET2 PATIENT DEMOGRAPHIC
 tag | GETDATA2
 routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
 return value type | ARRAY
 description | Called by the Vetlink Kiosk system. The RPC will accept two input parameters which are the patient SSN or DFN and the patient type. The RPC returns the patient demographics,insurance, and up-coming appointments.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSNUM | LITERAL | 12 | true | Patient Social Security Number or Patient IEN. | 
| VPSTYP | LITERAL | 10 | true | SSN or DFN | 




 ###### Generated on January 11th 2017, 6:39:43 am