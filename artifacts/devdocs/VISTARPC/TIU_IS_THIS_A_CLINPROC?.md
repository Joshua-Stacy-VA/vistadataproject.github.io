---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU IS THIS A CLINPROC?<br/>
# TIU IS THIS A CLINPROC?

This RPC evaluates whether or not a Title is under theCLINICAL PROCEDURES Class.

## Properties

Property | Value
--- | ---
Label | ISCP
Routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TITLE | LITERAL |  | true | This is the TIU Document file (#8925.1) IEN for the Title selected.



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISCP^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
Method Comment | RPC that evaluates whether or not a Title is under
Input Parameters | TITLE
First Comment | {::nomarkdown}<pre><code>the CLINICAL PROCEDURES Class<br/> Input  -- TITLE    TIU Document Definition file (#8925.1) IEN<br/>                    (May be Document Class instead of Title.)<br/> Output -- TIUY     1=True and 0=False</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUCLASS<br/> I +$G(TITLE)'>0 S TIUY=0 G ISCPQ<br/> S TIUCLASS=+$$CLASS<br/> I +TIUCLASS'>0 S TIUY=0 G ISCPQ<br/> S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}