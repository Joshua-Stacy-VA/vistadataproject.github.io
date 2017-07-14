---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Order_Quick_View-101_44<br/>
<a name="top"></a>
# Order Quick View (101.44)
The newer CPRS ordering dialogs use a Windows Listview control for displaying lists of orderable items and quick orders.  Using this control will help us rely less on custom built controls to handle long lists of items.  While the Listview control is able to operate on long lists of items, it must know at the outset how many items are potentially going to display and must be able to map from any sequence number produced by the Listview control  to a specific item in the list.  The ORDER QUICK VIEW file (101.44) provides this mapping.  It maps a subset of orderable items or quick orders in alphabetical order to specific sequence numbers.

**Global:** ^ORD(101.44,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name for the list to be displayed by a Windows Listview<br/>control. | STRING | INDEXED<br/>REQUIRED | 
**Last Update**{::nomarkdown}<pre><code>  last_update</code></pre>{:/} | 6 | The contains the time when the items in the list were last built. | STRING |  | 
**Quick Order**{::nomarkdown}<pre><code>  quick_order</code></pre>{:/} | 10 | This multiple contains the quick orders that belong to a given list. | OBJECT |  | [Quick_Order-101_441](#Quick_Order-101_441)
**Set Member**{::nomarkdown}<pre><code>  set_member</code></pre>{:/} | 20 | This multiple contains the orderable items in a specific subset (lab,<br/>inpatient meds, diets, etc.). | OBJECT |  | [Set_Member-101_442](#Set_Member-101_442)

## Sub-Files
### <a name="Quick_Order-101_441"></a>Quick Order (101.441)

<dl>
<dt>ID</dt><dd>Quick_Order-101_441</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Quick Order**{::nomarkdown}<pre><code>  quick_order</code></pre>{:/} | .01 | This points to a quick order in the Order Dialog file (101.41). | POINTER | INDEXED<br/>REQUIRED | [Order_Dialog-101_41](Order_Dialog-101_41)
**Display Text**{::nomarkdown}<pre><code>  display_text</code></pre>{:/} | 2 | This contains the text to display in the view list. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Set_Member-101_442"></a>Set Member (101.442)

<dl>
<dt>ID</dt><dd>Set_Member-101_442</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Set Member**{::nomarkdown}<pre><code>  set_member</code></pre>{:/} | .01 | This points to an item in the Orderable Item file (101.43). | POINTER | INDEXED<br/>REQUIRED | [Orderable_Items-101_43](Orderable_Items-101_43)
**Display Text**{::nomarkdown}<pre><code>  display_text</code></pre>{:/} | 2 | This is the text that is displayed in the view list. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}