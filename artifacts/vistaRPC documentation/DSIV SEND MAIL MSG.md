---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV SEND MAIL MSG 

 property | value 
--- | --- 
 label | DSIV SEND MAIL MSG
 tag | SEND
 routine | [DSIVXM](http://code.osehra.org/dox/Routine_DSIVXM_source.html)
 return value type | SINGLE VALUE
 description | This will send a Mailman message

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ARR | LIST | 250 | true | This array contains all the data needed to invoke Mailman's send amessage API.  ARR format:  ARR(sub) = p1 ^ p2  where   sub = any subscript value [0,1,2,3,...]    p1 = parameter name indicating the mail api entity    p2 = the value of the parameter p1            Req/   p1      Opt   p2 (and description)---------  ----  ------------------------------------------------------- FLAGS     opt   string of characters representing special instructions                  P := priority   I := informational only    X := closed                  C := confidential   R := confirm receipt  FROM      opt   default to DUZ - sender of message SELF BSKT  opt   if FROM=DUZ then this canbe the name of DUZ's mail                 basket to deliver the message [basket must already exist]  VAPOR     opt   Fileman date.time for which thismessage should be deleted                 from recipient's mail baskets   SUBJ     req   subject of the message [3-65 characters]  NOTME     opt   if this equals 1, then DO NOT include user DUZ as a                 recipient. Otherwise DUZ will always be a recipient even                 if they are not included in the recipient list    REC     opt   this is only optional if the mail message will include                 DUZ as a recipient.  These are the recipients of the                 message.   Acceptable values are:                     DUZ number                     G.mail group name                     D.VistA device name                     S.server name                 For DUZ and mail group recipients there are additional                 parameters you can use as prefixes to the recipient:                     I: - indicate this recipient is informational only                     C: - indicate that this recipient is carbon copy (cc)                     L@Fileman_date.time: - deliver this message to this                       recipient at the specified date.time                 Examples: for user 1301 -   I:1301                           C:G.IRM STAFF                           IL@3021224.23:G.MCCR   TEXT     req   text of message.  Each line of text will be a separate                 ARR(sub) entry.  No line should exceed 80 characters. | 




 ###### Generated on January 11th 2017, 6:39:43 am