---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ VIX LOG REMOTE IMG ACCESS 

 property | value 
--- | --- 
 label | MAGJ VIX LOG REMOTE IMG ACCESS
 tag | LOGRIA
 routine | [MAGJVAPI](http://code.osehra.org/dox/Routine_MAGJVAPI_source.html)
 return value type | SINGLE VALUE
 description | Log ViX-enabled Remote Image Access Events.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 256 | true | CARET DELIMITED AS FOLLOWS:  ^01: ACTION ... \VR-RV\_ subset member from ACTION+1^MAGGTAU  ^02: RADFN .... IEN of PATIENT file (#2)  ^03: MAGIEN ... IEN of IMAGE file (#2005)  ^04: NIMGS .... VRad Image Count  ^05: REMOTE ... VRad Remote Read Flag  ^06: MAGJVRV .. VRad Version  ^07: USERCLS .. VRad User Class  ^08: VIXTXID .. VRad VIX Transaction ID | 




 ###### Generated on January 11th 2017, 6:39:43 am