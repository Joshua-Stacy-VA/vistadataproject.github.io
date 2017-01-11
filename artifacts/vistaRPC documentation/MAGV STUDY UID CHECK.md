---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV STUDY UID CHECK 

 property | value 
--- | --- 
 label | MAGV STUDY UID CHECK
 tag | STUDY
 routine | [MAGVUID](http://code.osehra.org/dox/Routine_MAGVUID_source.html)
 return value type | SINGLE VALUE
 description | Performs check for duplicate Study UIDs

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 10 | true | IEN of the patient's record in the NEW PERSON File (#200). | 
| ACNUMB | LITERAL | 20 | true | ACCESSION NUMBER (LONG FORM) DATE-SITE LOCATION The date is in VA format, and the site location code is the site number. The two components are concatenated with a hyphen (-). This component comes from image's DICOM header by way of the Modality Worklist entry for the associated study. | 
| SITE | LITERAL | 5 | true | SITE CODE (660) | 
| INSTR | LITERAL | 30 | true | INSTRUMENT NAME | 
| STUDYUID | LITERAL | 64 | true | STUDY UID | 




 ###### Generated on January 11th 2017, 6:39:43 am