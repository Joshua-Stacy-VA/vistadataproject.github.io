---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV SEND ALERT 

 property | value 
--- | --- 
 label | DSIV SEND ALERT
 tag | SEND
 routine | [DSIVXQA](http://code.osehra.org/dox/Routine_DSIVXQA_source.html)
 return value type | SINGLE VALUE
 description | RPC to send a user a kernal alert

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST |  | true | DATA is a list which is expecting data in the following format: DATA(sub) = value  subscript  required  value  ---------  --------  ---------------------------------------  XQAMSG        Y      message displayed to the user (80 char)   XQAROU        N      tag^routine to be invoked                       if from RPC this must be silent   XQAID         N      package identifier for alert   XQADATA       N      an application specific data string     [the alert processor will set XQADATA equal to this and will      be available to M routine specified in XQAROU]   XQAARCH       N      # days to keep in alert tracking file   XQASURO       N      # days to wait before forwarding alert     [forwarded to recipient's Mailman's surrogates if unprocessed      by recipient]   XQASUPV       N      supervisor forwarding     [# days to wait before forwarding to recipient's supervisor if      unprocessed by recipient.  SUPERVIOR = CHIEF field from file      49 corresponding to recipient's SERVICE/SECTION]   DFN           N      pointer to PATIENT file     [used to construct XQAID so that it works properly in CPRS]   PKG           N      namespace of calling app - default=VEJD   Rn            Y      at least one must be defined - recipients of  R1,R2,R3,...          alert - can be pointer to NEW PERSON file                        or G.<name of mail group>  Example of setup in the GUI:  Param.List['\XQAMSG\'] := text  Param.list['\R1\']     := duz of recipient  Param.List['\DFN\']    := pointer to PATIENT file | 




 ###### Generated on January 11th 2017, 6:39:43 am