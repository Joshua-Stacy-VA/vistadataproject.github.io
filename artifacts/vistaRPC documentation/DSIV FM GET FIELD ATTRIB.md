---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV FM GET FIELD ATTRIB 

 property | value 
--- | --- 
 label | DSIV FM GET FIELD ATTRIB
 tag | FIELD
 routine | [DSIVFM06](http://code.osehra.org/dox/Routine_DSIVFM06_source.html)
 return value type | ARRAY
 description | This will return the inputted field attributes for a file.  As of 7/29/2003, these attributes are available: AUDIT AUDIT CONDITION COMPUTE ALGORITHM COMPUTED FIELDS USED DATE FIELD LAST EDITED DECIMAL DEFAULT DELETE ACCESS DESCRIPTION FIELD LENGTH GLOBAL SUBSCRIPT LOCATION HELP-PROMPT INPUT TRANSFORM LABEL MULTIPLE-VALUED OUTPUT TRANSFORM POINTER READ ACCESS SOURCE SPECIFIER TECHNICAL DESCRIPTION TITLE TYPE WRITE ACCESS XECUTABLE HELP

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 30 | true |  This can be the file number or the full name of the file.  For subfiles, it must be the subfile number. | 
| FIELD | LITERAL | 30 | true |  This is the field number or the full name of the field | 
| FLAG | LITERAL | 2 | true |  This is a flag controlling what will be returned. The default value is <null>.  FLAG can contain N. If FLAG contains N then do not return attributes whose value is <null> If FLAGS contains Z, then for WOrd Processing attributes, include   the zeroth node with the text | 
| ATT | LIST | 30 | true |  This is a list of attributes to return.   List[n] := attribute name  where n=0,1,2,3,...  You can send List[0] := \*\ to get all field attributes | 




 ###### Generated on January 11th 2017, 6:39:43 am