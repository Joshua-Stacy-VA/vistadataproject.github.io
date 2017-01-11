---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR ADD_EDIT ADDRESS 

 property | value 
--- | --- 
 label | DSIR ADD_EDIT ADDRESS
 tag | UPDTADDR
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | SINGLE VALUE
 description | This RPC is ussed to add or update an address in the ROI ADDRESS file (#19620.92).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST |  | true | DATA - ARRAY - This will be a multiple value parameter.  The values in order will be as follows:   1. Address File Internal Number (Null if new OR Numeric)  2. Patient - Internal Number (\441;DPT(,\)  3. Street Address Line One - Text 35 character max  4. Street Address Line Two - Text 35 character max  5. Street Address Line Three - Text 35 character max  6. City - Text 40 character max  7. State - Internal Number - Numeric (ie. 36 for NY)  8. Zip Code - Numeric 5 or 9 numbers  9. Address Holder - Code ; Description     (Patient/Unregistered Patient/Requestor - P/N/R) 10. Holder - Internal Number ; File Reference\      (Patient, Unregistered Patient, or Requestor IEN)     (\441;DPT(,\/\6;DSIR(19620.96,\/\36;DSIR(19620.12,\) 11. Inactive flag (1=INACTIVE 12. Phone 13. Fax | 




 ###### Generated on January 11th 2017, 6:39:43 am