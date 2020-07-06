(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{450:function(e,t,a){"use strict";a.r(t);var r=a(43),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Make sure you "),a("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),a("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),a("p",[e._v("💡 Learn more :  "),a("a",{attrs:{href:"https://www.realvnc.com/en/connect/download/viewer?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("VNC to Azure Linux VMs"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Author: Kumar Allamraju\nTwitter: "),a("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kumarallamraju"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Are you a MAC or Windows User? A big fan of GUI? Tired of SSH'ing to Linux VMs?  What if you want to browse the web? VNC comes to the rescue.")]),e._v(" "),a("p",[e._v("The following article was written for Ubuntu VM but a similar process applies to other Linux flavors as well.")]),e._v(" "),a("h4",{attrs:{id:"_1-create-a-new-azure-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-azure-vm","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Create a new Azure VM")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Provision"),a("OutboundLink")],1),e._v(" a Linux Virtual Machine from Azure Portal or Azure CLI.")]),e._v(" "),a("h4",{attrs:{id:"_2-connect-to-the-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-connect-to-the-vm","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Connect to the VM")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" azureuser@public-ip\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-install-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-packages","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Install packages")]),e._v(" "),a("p",[e._v("Once connected let’s update our sources list and install some extra packages:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" tightvncserver\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"_4-install-the-desktop-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-install-the-desktop-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Install the desktop environment")]),e._v(" "),a("p",[e._v("Before configuring the VNC server we shoud install one of the favorite desktop environments like "),a("a",{attrs:{href:"https://www.gnome.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gnome"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://www.xfce.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xfce"),a("OutboundLink")],1),e._v(". I personally like Gnome. It's beautiful … and heavy! So be patient while everything gets installed..")]),e._v(" "),a("h4",{attrs:{id:"_5-setting-up-vnc-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-setting-up-vnc-server","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. Setting up VNC Server")]),e._v(" "),a("p",[e._v("Now that our instance has a desktop environment let’s make it accessible via VNC. Start the vncserver, and follow the directions to create a password")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ vncserver\nNote: this password will grant access to your instance, so make sure you remember this password.\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("If everything went fine your VNC server is now running and listening on port 5901. You can verify this with netcat from the Azure Ubuntu VM:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ nc localhost 5901\nRFB 003.008\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h4",{attrs:{id:"_6-installing-a-vnc-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-installing-a-vnc-client","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. Installing a VNC Client")]),e._v(" "),a("p",[e._v("You can google search for a VNC client. My favorite one is "),a("a",{attrs:{href:"https://www.realvnc.com/en/connect/download/viewer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RealVNC Viewer"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Install the VNC Client but don’t try to connect to your server just yet: it will fail as the firewall rules don’t allow it.")]),e._v(" "),a("h4",{attrs:{id:"_7-open-the-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-open-the-firewall","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. Open the firewall")]),e._v(" "),a("p",[e._v("Go to your VM's Network Security Group and allow traffic on port 5901")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/vnc-in-azure-linuxvms-file1.jpg")}}),e._v(" "),a("h4",{attrs:{id:"_8-connecting-to-the-vnc-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-connecting-to-the-vnc-server","aria-hidden":"true"}},[e._v("#")]),e._v(" 8. Connecting to the VNC server")]),e._v(" "),a("p",[e._v("From your local desktop, launch VNC Client")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/vnc-in-azure-linuxvms-file2.jpg")}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/vnc-in-azure-linuxvms-file3.jpg")}}),e._v(" "),a("p",[e._v("Open a terminal window in the linux vm.")]),e._v(" "),a("p",[e._v("Install your favorite browser")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" firefox\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Launch the browser")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/vnc-in-azure-linuxvms-file4.jpg")}}),e._v(" "),a("p",[e._v("And voilà! You can now use your favorite Desktop environment on your Azure VM instance.")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("The VNC tool provides a rich desktop experience, packed with features that will make you more productive. This is especially useful for native Windows or MAC users. Go ahead and give it a try!!")]),e._v(" "),a("h4",{attrs:{id:"reference-links-to-gnome-and-xfce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-links-to-gnome-and-xfce","aria-hidden":"true"}},[e._v("#")]),e._v(" Reference Links to Gnome and Xfce")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.gnome.org?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gnome"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.xfce.org?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xfce"),a("OutboundLink")],1)])])])])},[],!1,null,null,null);t.default=n.exports}}]);