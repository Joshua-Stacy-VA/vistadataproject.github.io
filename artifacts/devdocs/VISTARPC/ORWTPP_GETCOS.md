---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPP GETCOS<br/>
# ORWTPP GETCOS



## Properties

Property | Value
--- | ---
Label | GETCOS
Routine | [ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETCOS^ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html)
Method Comment | RPC
Input Parameters | FROM, DIR, VISITORS
First Comment | {::nomarkdown}<pre><code> get elgible cosigners for current user</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I '$G(VISITORS) S VISITORS=""<br/> D GETCOS^ORWTPN(.VALUES,DUZ,FROM,DIR,VISITORS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}