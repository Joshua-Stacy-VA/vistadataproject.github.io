---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV UPDATE PCE 

 property | value 
--- | --- 
 label | DENTV UPDATE PCE
 tag | UPD
 routine | [DENTVTPE](http://code.osehra.org/dox/Routine_DENTVTPE_source.html)
 return value type | GLOBAL ARRAY
 description | Deletes procedures, diagnosis and providers from PCE when users delete transactions from DRM Plus.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST | 256 | true | Contains a list of transaction ids deleted from DRM Plus in the format:DATA(txnid). | 




 ###### Generated on January 11th 2017, 6:39:43 am