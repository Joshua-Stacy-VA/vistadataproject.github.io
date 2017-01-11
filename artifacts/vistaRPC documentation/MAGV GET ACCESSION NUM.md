---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET ACCESSION NUM 

 property | value 
--- | --- 
 label | MAGV GET ACCESSION NUM
 tag | GETACCNO
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | SINGLE VALUE
 description | This RPC returns an accession number given a patient reference internal entry number and procedure reference internal entry number.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATREFIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGING PATIENT REFERENCE File (#2005.6) with which the procedure reference is associated. | 
| PROCREFIEN | LITERAL | 10 | true | This is the procedure's internal entry number on the IMAGING PROCEDUREREFERENCE File (#2005.61). | 
| OVERRIDE | LITERAL | 3 | true | This parameter should be used with EXTREME CAUTION.  If set TRUE(nonzero), will suppress the validation of the procedure reference IENagainst the patient reference IEN. | 




 ###### Generated on January 11th 2017, 6:39:43 am