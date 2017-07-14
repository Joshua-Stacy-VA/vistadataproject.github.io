---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS AV CODE<br/>
# XUS AV CODE

This API checks if a ACCESS/VERIFY code pair is valid.It returns an array of values R(0)=DUZ if sign-on was OK, zero if not OK.R(1)=(0=OK, 1,2...=Can't sign-on for some reason).R(2)=verify needs changing.R(3)=Message.R(4)=0R(5)=count of the number of lines of text, zero if none.R(5+n)=message text.

## Properties

Property | Value
--- | ---
Label | VALIDAV
Routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
AVCODE | LITERAL | 60 | true | accessCode_&quot;;&quot;_verifyCode in unencrypted form.



## MUMPS Method Description

Property | Value
--- | ---
Method | [VALIDAV^XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Method Comment | RPC. XUS CVC - IA #6296
Input Parameters | AVCODE
First Comment | {::nomarkdown}<pre><code>Check a users access<br/>Return R(0)=DUZ, R(1)=(0=OK, 1,2...=Can't sign-on for some reason)<br/> R(2)=verify needs changing, R(3)=Message, R(4)=0, R(5)=msg cnt, R(5+n)<br/> R(R(5)+6)=# div user must select from, R(R(5)+6+n)=div<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X,XUSER,XUNOW,XUDEV,XUM,XUMSG,%1,VCCH K DUZ<br/> S U="^",RET(0)=0,RET(5)=0,XUF=$G(XUF,0),XUM=0,XUMSG=0,XUDEV=0<br/> S DUZ=0,DUZ(0)="",VCCH=0 D NOW<br/> S XOPT=$$STATE^XWBSEC("XUS XOPT")<br/> S XUMSG=$$INHIBIT() I XUMSG S XUM=1 G VAX ;Logon inhibited<br/> I $$LKCHECK^XUSTZIP($G(IO("IP"))) S XUMSG=7 G VAX ;IP locked<br/> I $L(AVCODE) D<br/> . I $E(AVCODE,1,2)="~1" S DUZ=$$CHKASH^XUSRB4(AVCODE),DUZ("AUTHENTICATION")="ASHTOKEN" Q<br/> . I $E(AVCODE,1,2)="~2" S DUZ=$$CHKCCOW^XUSRB4(AVCODE),DUZ("AUTHENTICATION")="CCOWTOKEN" Q<br/> . S DUZ=$$CHECKAV^XUS($$DECRYP^XUSRB1(AVCODE)),DUZ("AUTHENTICATION")="AVCODES"<br/> . Q<br/> I DUZ'>0,$$FAIL^XUS3 D  G VAX<br/> . S XUM=1,XUMSG=7,X=$$RA^XUSTZ H 5 ;3 Strikes<br/> S XUMSG=$$UVALID^XUS() G:XUMSG VAX ;Check User<br/> S VCCH=$$VCVALID() ;Check VC<br/> I $G(DUZ("LOA"))="" S DUZ("LOA")=2<br/> I DUZ>0 S XUMSG=$$POST(1)<br/> I XUMSG>0 S DUZ=0,VCCH=0 ;If can't sign-on, don't tell need to change VC<br/> I 'XUMSG,VCCH S XUMSG=12 D SET^XWBSEC("XUS DUZ",DUZ) ;Need to change VC</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}