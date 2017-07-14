---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS IAM EDIT USER<br/>
# XUS IAM EDIT USER

This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to edit an existing user in the VistA NEW PERSON file (#200). The XUSHOWSSN Security Key is required to edit Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB). The XUSPF200 Security Key is required to edit a user without an SSN (file #200 special privileges).

## Properties

Property | Value
--- | ---
Label | IAMEU
Routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INARRY | LIST | 240 | true | The IAM RSD is unclear what the input data is or how it will be formatted.
AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Provisioning Application.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}