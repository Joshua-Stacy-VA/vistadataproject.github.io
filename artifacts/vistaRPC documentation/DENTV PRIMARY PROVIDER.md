---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV PRIMARY PROVIDER 

 property | value 
--- | --- 
 label | DENTV PRIMARY PROVIDER
 tag | GS
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | SINGLE VALUE
 description | This rpc gets or sets the primary and secondary providers for adental patient. It also sends back the User duz if the user is a dental provider for the Encounter Provider.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 15 | true | The first parameter is the patient ien (DFN) which is the ien tothe DENTAL PATIENT (#220) file. | 
| PSPROV | LITERAL | 40 | true | The second, optional, parameter is the primary and secondary provideriens, in the format p1^p2^p3.  P3 is the Encounter Provider. | 
| OMIT | LITERAL | 1 | true | A flag which determines whether omissions are allowed or required. | 




 ###### Generated on January 11th 2017, 6:39:43 am