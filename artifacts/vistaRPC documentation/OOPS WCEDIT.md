---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS WCEDIT 

 property | value 
--- | --- 
 label | OOPS WCEDIT
 tag | OWCPCLR
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | SINGLE VALUE
 description | This call clears the Supervisor signature and related fields if the WorkersCompensation specialist has edited fields INJURED PERFORMING DUTY (#146),NOT INJURED PERFORMING JOB (#147), INJURY CAUSED BY EMPLOYEE (#148),CAUSED BY EMPLOYEE EXPLAIN (#149), SUPERVISOR NOT AGREE EXPLAN (#164), or REASON AGENCY CONTROVERTS COP (#165) after the Supervisor signed.  It also sets the field WORKER'S COMP EDIT (#199) so the required bulletin will be sent.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 25 | true | This is the IEN for the ASISTS record that is being modified. | 
| CALLER | LITERAL | 10 | true | This is the menu that originated the call. | 
| FORM | LITERAL | 10 | true | This is the form type which can be 2162, CA1, or CA2.  However, the only formever expected with this call is a CA1. | 




 ###### Generated on January 11th 2017, 6:39:43 am