---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU REMINDER DIALOGS<br/>
# TIU REMINDER DIALOGS

Returns a list of reminder dialogs allowed for use as Templates.

## Properties

Property | Value
--- | ---
Label | REMDLGS
Routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [REMDLGS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Returns a list of all reminder dialogs usable in templates
Code | {::nomarkdown}<pre><code> N SRV<br/> K TIUY<br/> D RDACCUM(.TIUY,"USR","N")<br/> S SRV=$$GETSRV(DUZ)<br/> D RDACCUM(.TIUY,"SRV.`"_+$G(SRV),"N")<br/> D RDACCUM(.TIUY,"DIV","N")<br/> D RDACCUM(.TIUY,"SYS","N")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}