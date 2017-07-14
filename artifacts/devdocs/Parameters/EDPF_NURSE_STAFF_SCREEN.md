---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; EDPF NURSE STAFF SCREEN<br/>
# EDPF NURSE STAFF SCREEN

This allows a site to select which type of filtering, or screening, that should be applied to the New Person file (200) when selecting nurses in EDIS.  The default is to screen by presence in the NURS STAFF file (210) with a status of &quot;active&quot;.  Other options include:   1:  Allow only persons holding the ORELSE key.  2:  Allow only persons holding the PSJ RNURSE key.  3:  Allow selection from all entries in the NEW PERSON file (200).

## Properties

Property | Value
--- | ---
Summary | Nursing Staff Screen for EDIS
Value Type | set of codes
Value Domain | 0:Active in NURS STAFF (210);1:Hold ORELSE Key;2:Hold PSJ RNURSE Key;3:All Persons (No Screen)
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
3 | DIVISION
5 | SYSTEM
10 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}