---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB CREATE CONTEXT<br/>
# XWB CREATE CONTEXT

Establishes context on the server, which will be checked by the Broker beforeexecuting any other remote procedure.  Since context is nothing more than aclient/server "B"-type option in the OPTION file (#19), standard MenuMansecurity is applied in establishing a context.  Therefore, a context optioncan be granted to user(s) exactly the same way as regular options are doneusing MenuMan.A context can not be established for the following reasons:        The user has no access to that option        The option is temporarily out of orderAn application can switch from one context to another as often as it needs to.Each time a context is created the previous context is overwritten.For more information on creating a context and the overall Broker securitysee Broker on-line help documentation.

## Properties

Property | Value
--- | ---
Label | CRCONTXT
Routine | [XWBSEC](http://code.osehra.org/dox/Routine_XWBSEC_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CRCONTXT^XWBSEC](http://code.osehra.org/dox/Routine_XWBSEC_source.html)
Method Comment | creates context for the passed in option
Input Parameters | OPTION
Code | {::nomarkdown}<pre><code> K XQY0,XQY N XWB1,XABPGMOD,XWBPGMOD S RESULT=0<br/> S OPTION=$$DECRYP^XUSRB1(OPTION) ;S:OPTION="" OPTION="\"<br/> I OPTION="" S XQY=0,XQY0="",RESULT=1 Q  ;delete context if "" passed in.<br/> S XWB1=$$OPTLK^XQCS(OPTION)<br/> I XWB1="" S (XWBSEC,RESULT)="The context '"_OPTION_"' does not exist on server." Q  ;P10<br/> S RESULT=$$CHK^XQCS(DUZ,XWB1)<br/> S XWBPGMOD=$$KCHK^XUSRB("XUPROGMODE")<br/> I RESULT!XWBPGMOD S XQY0=OPTION,XQY=XWB1,RESULT=1<br/> E  S XWBSEC=RESULT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}