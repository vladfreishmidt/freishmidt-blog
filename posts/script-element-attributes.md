---
title: "Attributes of the <script> element"
subtitle: "The primary method of inserting JavaScript into an HTML page is via the `<script>` element."
date: "2023-10-08"
---

The primary method of inserting JavaScript into an HTML page is via the `<script>` element. This element was created by Netscape and first implemented in Netscape Navigator 2. It was later added to the formal HTML specification. There are eight attributes for the `<script>` element:

- **async** — Optional. Indicates that the script should begin downloading immediately but should
  not prevent other actions on the page such as downloading resources or waiting for other
  scripts to load. Valid only for external script files.

- **charset** — Optional. The character set of the code specified using the src attribute. This attribute is rarely used because most browsers don’t honor its value.

- **crossorigin** — Optional. Configures the CORS settings for the associated request; by
  default, CORS is not used at all. crossorigin="anonymous" will configure the request for
  the file to not have the credentials flag set. crossorigin="use-credentials" will set the
  credentials flag, meaning the outgoing request will include credentials.

- **defer** — Optional. Indicates that the execution of the script can safely be deferred until after the
  document’s content has been completely parsed and displayed. Valid only for external scripts.

- **integrity** — Optional. Allows for verification of Subresource Integrity (SRI) by checking the
  retrieved resource against a provided cryptographic signature. If the signature of the retrieved
  resource does not match that specified by this attribute, the page will error and the script will
  not execute. This is useful for ensuring that a Content Delivery Network (CDN) is not serving malicious payloads.

- **language** — Deprecated 👴. Originally indicated the scripting language being used by the code
  block (such as “JavaScript,” “JavaScript1.2,” or “VBScript”). Most browsers ignore this attribute; it should not be used.

- **src** — Optional. Indicates an external file that contains code to be executed.

- **type** — Optional. Replaces language; indicates the content type (also called MIME type) of
  the scripting language being used by the code block. Traditionally, this value has always been
  “text/javascript,” though both “text/javascript” and “text/ecmascript” are deprecated.
  JavaScript files are typically served with the “application/x-javascript” MIME type even
  though setting this in the type attribute may cause the script to be ignored. Other valid values
  are “application/javascript” and “application/ecmascript.” If the value is “module,” the code
  is treated as an ES6 module and only then is eligible to use the import and export keywords.
