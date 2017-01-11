---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR ADD_EDIT REQUESTOR 

 property | value 
--- | --- 
 label | DSIR ADD_EDIT REQUESTOR
 tag | UPDRQSTR
 routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
 return value type | SINGLE VALUE
 description | This RPC will add or update an entry in the REQUESTOR FILE in ROI (#19620.12)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA ARRAY | LIST |  | true | DATA - ARRAY - This will be a multiple value parameter. The values in order will be as follows:  1. Requestor File Internal Number (Null if new OR Numeric) 2. Lookup Name - Text - REQUIRED 3. Requestor type - Pointer to DSIR BILLING TYPE file (19620.8) 4. First Name 5. Middle Name 6. Last Name 7. Corporate Name 8. Salutation 9. E-mail 10. Primary address Pointer (IEN in 19620.92) 11. PATIENT POINTER (IE. \441;DPT(\, \67:DSIR(19620.96,\) | 




 ###### Generated on January 11th 2017, 6:39:43 am