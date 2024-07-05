(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{303:function(e,t,r){"use strict";r.r(t);const o=[{err:"Blocked by Cloudflare",answer:'When you encounter the "Blocked by Cloudflare" error, click on the WebView button. Solve the Cloudflare challenge, then close the WebView and click the refresh button.'},{err:"Receive timeout",answer:'When encountering the "Recieve timeout" error, it is possible that:<br />\n1. <strong>It could be due to a slow network</strong>. Please check your internet connection.<br />\n2. <strong>It could also be due to the slow performance of the extension</strong>. Please try operating at a slower pace. You can also try killing the app and retrying. Alternatively, you can try using other extensions, as most of them run faster.\n'},{err:["Stub","NoClassDefFoundError"],answer:"The current extension is not supported. We are working hard to support more extensions. You can use other extensions instead."},{err:["HTTP_error_5","HTTP error 5","webview"],answer:'When encountering the "#{err}" error, <strong>it is possible that you have been blocked by the site owner</strong>. Please try clicking the WebView button. Solve the captcha or other challenges, then close the WebView and click the refresh button. If this does not work, please switch to another source.'},{err:["HTTP_error_4","HTTP error 4"],answer:'When encountering the "#{err}" error, <strong>it is possible that the site is down</strong>. You can check the website in webview and switch to the extensions page to check for updates on the extension, or you can switch to another source.'},{err:"database is locked",answer:'When encountering the "#{err}" error, it could be caused by the extension\'s slow performance. <strong>Please try operating at a slower pace</strong>. You can also try killing the app and retrying. Alternatively, you can try using other extensions, as most of them run faster. <br>\nIf restarting the app does not resolve the issue, you may need to reinstall the app. Please note that reinstalling the app will result in the loss of your comic data.\n'},{err:"no such table",answer:"The initialization process has failed. Deleting the app and reinstalling it can resolve the issue."},{err:"SQLiteException",answer:'When encountering the "#{err}" error, it could be caused by the extension\'s slow performance. <strong>Please try operating at a slower pace</strong>. You can also try killing the app and retrying. Alternatively, you can try using other extensions, as most of them run faster.'}],n=["aaa"],s=["aaa"];var a={data:()=>({query:{},text:""}),mounted(){const e=this.$route.query;this.query=e;var t=!1;for(const r of o){console.log(r),"string"==typeof r.err&&(r.err=[r.err]);for(const o of r.err)if(-1!==e.err.toLowerCase().indexOf(o.toLowerCase())){this.text=r.answer.replace("#{err}",e.err),t=!0;break}}if(!t)for(const r of n)if(e.source===r){this.text="This source is broken. Please wait for the maintainer to update it. In the meantime, please switch to another source.",t=!0;break}if(!t)for(const r of s)if(e.ext===r){this.text="This extension is broken. Please wait for the maintainer to update it. In the meantime, please switch to another source.",t=!0;break}t||(this.text='<strong>Please check if the extension has any updates</strong>. The extension may be outdated. Switch to the extensions page to check if there are any updates available for the extension. If not, please wait for the developer to update the extension.<br>\n<strong>Alternatively, you can switch to another source</strong>. Other sources may also have the current manga available.<br>\nAdditionally, you can refer to the <a href="/help/faq/">FAQ</a> or join our  <a href="https://discord.com/invite/8aMcdYdaBz">Discord server</a> for support.\n')}},i=r(14),h=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.query.err))]),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.text)}}),e._v(" "),t("button",{staticStyle:{padding:"6px 16px","font-size":"12px","background-color":"#3eaf7c",color:"white",border:"none","border-radius":"4px"},attrs:{onclick:"setTimeout(() => {alert('Thank you for reporting the issue. We will investigate and resolve it as soon as possible.')}, 600);"}},[e._v("Report an Issue")]),e._v(" "),t("pre",[t("code",[e._v("Details: "+e._s(e.query))])])])}),[],!1,null,null,null);t.default=h.exports}}]);