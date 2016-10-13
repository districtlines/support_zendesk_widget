# District Lines - Zendesk Support Widget

This is an iFrame App for the Zendesk Private App marketplace. This App will read the Order Number and Email Address from the Zendesk ticket and pipe it through districtlines.com/admin/zendesk_widget/ and will display the order information.

## App Panels::

### Info
This panel will show the basic order information. Information included are:

- Order ID
- API Order ID (if applicable)
- Lastest Tracking Number (if applicable)
- Location of the order (if applicable)
- Subtotal
- Tax
- Shipping
- Service Fee
- Subtotal After Adjustment (subtotal - coupon amount (if applicable) )
- Total

This panel also gives the Support Rep the option to jump to the order on DL.

### Items
This panel will show the items within the order cart. Information included are per item:

- Item Name (link to design page)
- Item Size
- Item Quantity

Packages are show and grouped together. Package items will show the information about but not the quantity as the quantity is derived from the Package row.

Refunded items are denoted with a <strike>strike through</strike>.

![Panel Items](http://districtlines.s3.amazonaws.com/app_images/zendesk_widget/panel-items.png)

### Address
This panel will show the billing and shipping information for the order. Information included are:

- Email
- Phone
- Billing First Name
- Billing Last Name
- Billing Address
- Billing City
- Billing State
- Billing Province (if applicable)
- Billing Zip
- Billing Country
- Shipping First Name
- Shipping Last Name
- Shipping Address
- Shipping City
- Shipping State
- Shipping Province (if applicable)
- Shipping Zip
- Shipping Country

![Panel Address](http://districtlines.s3.amazonaws.com/app_images/zendesk_widget/panel-address.png)

### Notes
This panel will showw all the notes attached to the order. If the Support Rep is logged into districtlines.com/admin they will be able to leave a note from this window as well.

Notes in red are left by the System (automatic process notes).
Notes in blue are left by a user.

![Panel Notes](http://districtlines.s3.amazonaws.com/app_images/zendesk_widget/panel-notes.png)

### Related
This panel shows orders that have the same email from the Zendesk Ticket. This is used in the event the Ticket Requester didn't input an order number. Support Rep can try to locate their order through this panel. Clicking the order number within this panel will load the order information.

If the Support Ticket has an order attached to it and the Support Rep clicks this panel, they will be prompted within the widget that they are not looking at the order informaiton for this specific ticket. This is useful so if they accidently click one, they do not get confused why the data doesn't match the ticket.

![Panel Related](http://districtlines.s3.amazonaws.com/app_images/zendesk_widget/panel-related.png)

### Smile
This panel is just a fun panel. It shows a randomly generated Gif from Giphy. Hopefully to brighten the Support Rep's day!

![Panel Smile](http://districtlines.s3.amazonaws.com/app_images/zendesk_widget/panel-smile.png)


### Screenshot(s):
![Full ticket imagery](http://districtlines.s3.amazonaws.com/app_images/zendesk_widget/main-full.png)
