function insertTable(){var e=document.forms[0],t=tinyMCEPopup.editor,n=t.dom,r=2,i=2,s=0,o=-1,u=-1,a,f,l,c,h,p,d,v="",m,g,y,b,w;tinyMCEPopup.restoreSelection();if(!AutoValidator.validate(e))return tinyMCEPopup.alert(AutoValidator.getErrorMessages(e).join(". ")+"."),!1;g=n.getParent(t.selection.getNode(),"table"),r=e.elements.cols.value,i=e.elements.rows.value,s=e.elements["border"].value!=""?e.elements.border.value:0,o=e.elements["cellpadding"].value!=""?e.elements.cellpadding.value:"",u=e.elements["cellspacing"].value!=""?e.elements.cellspacing.value:"",a=getSelectValue(e,"align"),p=getSelectValue(e,"tframe"),d=getSelectValue(e,"rules"),f=e.elements.width.value,l=e.elements.height.value,bordercolor=e.elements.bordercolor.value,bgcolor=e.elements.bgcolor.value,c=getSelectValue(e,"class"),id=e.elements.id.value,summary=e.elements.summary.value,style=e.elements.style.value,dir=e.elements.dir.value,lang=e.elements.lang.value,background=e.elements.backgroundimage.value,h=e.elements.caption.checked,y=tinyMCEPopup.getParam("table_cell_limit",!1),b=tinyMCEPopup.getParam("table_row_limit",!1),w=tinyMCEPopup.getParam("table_col_limit",!1);if(w&&r>w)return tinyMCEPopup.alert(t.getLang("table_dlg.col_limit").replace(/\{\$cols\}/g,w)),!1;if(b&&i>b)return tinyMCEPopup.alert(t.getLang("table_dlg.row_limit").replace(/\{\$rows\}/g,b)),!1;if(y&&r*i>y)return tinyMCEPopup.alert(t.getLang("table_dlg.cell_limit").replace(/\{\$cells\}/g,y)),!1;if(action=="update")return n.setAttrib(g,"cellPadding",o,!0),n.setAttrib(g,"cellSpacing",u,!0),isCssSize(s)?n.setAttrib(g,"border",""):n.setAttrib(g,"border",s),s==""&&(n.setStyle(g,"border-width",""),n.setStyle(g,"border",""),n.setAttrib(g,"border","")),n.setAttrib(g,"align",a),n.setAttrib(g,"frame",p),n.setAttrib(g,"rules",d),n.setAttrib(g,"class",c),n.setAttrib(g,"style",style),n.setAttrib(g,"id",id),n.setAttrib(g,"summary",summary),n.setAttrib(g,"dir",dir),n.setAttrib(g,"lang",lang),m=t.dom.select("caption",g)[0],m&&!h&&m.parentNode.removeChild(m),!m&&h&&(m=g.ownerDocument.createElement("caption"),tinymce.isIE||(m.innerHTML='<br data-mce-bogus="1"/>'),g.insertBefore(m,g.firstChild)),f&&t.settings.inline_styles?(n.setStyle(g,"width",f),n.setAttrib(g,"width","")):(n.setAttrib(g,"width",f,!0),n.setStyle(g,"width","")),n.setAttrib(g,"borderColor",""),n.setAttrib(g,"bgColor",""),n.setAttrib(g,"background",""),l&&t.settings.inline_styles?(n.setStyle(g,"height",l),n.setAttrib(g,"height","")):(n.setAttrib(g,"height",l,!0),n.setStyle(g,"height","")),background!=""?g.style.backgroundImage="url('"+background+"')":g.style.backgroundImage="",bordercolor!=""?(g.style.borderColor=bordercolor,g.style.borderStyle=g.style.borderStyle==""?"solid":g.style.borderStyle,g.style.borderWidth=cssSize(s)):g.style.borderColor="",g.style.backgroundColor=bgcolor,g.style.height=getCSSSize(l),t.addVisual(),t.nodeChanged(),t.execCommand("mceEndUndoLevel"),(e.width.value!=orgTableWidth||e.height.value!=orgTableHeight)&&t.execCommand("mceRepaint"),tinyMCEPopup.close(),!0;v+="<table",v+=makeAttrib("id",id),isCssSize(s)||(v+=makeAttrib("border",s)),v+=makeAttrib("cellpadding",o),v+=makeAttrib("cellspacing",u),v+=makeAttrib("data-mce-new","1"),f&&t.settings.inline_styles?(style&&(style+="; "),/^[0-9\.]+$/.test(f)&&(f+="px"),style+="width: "+f):v+=makeAttrib("width",f),v+=makeAttrib("align",a),v+=makeAttrib("frame",p),v+=makeAttrib("rules",d),v+=makeAttrib("class",c),v+=makeAttrib("style",style),v+=makeAttrib("summary",summary),v+=makeAttrib("dir",dir),v+=makeAttrib("lang",lang),v+=">",h&&(tinymce.isIE?v+="<caption></caption>":v+='<caption><br data-mce-bogus="1"/></caption>');for(var E=0;E<i;E++){v+="<tr>";for(var S=0;S<r;S++)tinymce.isIE?v+="<td></td>":v+='<td><br data-mce-bogus="1"/></td>';v+="</tr>"}v+="</table>";if(t.settings.fix_table_elements){var x="";t.focus(),t.selection.setContent('<br class="_mce_marker" />'),tinymce.each("h1,h2,h3,h4,h5,h6,p".split(","),function(e){x&&(x+=","),x+=e+" ._mce_marker"}),tinymce.each(t.dom.select(x),function(e){t.dom.split(t.dom.getParent(e,"h1,h2,h3,h4,h5,h6,p"),e)}),n.setOuterHTML(n.select("br._mce_marker")[0],v)}else t.execCommand("mceInsertContent",!1,v);tinymce.each(n.select("table[data-mce-new]"),function(e){var r=n.select("td,th",e);try{t.selection.setCursorLocation(r[0],0)}catch(i){}n.setAttrib(e,"data-mce-new","")}),t.addVisual(),t.execCommand("mceEndUndoLevel"),tinyMCEPopup.close()}function makeAttrib(e,t){var n=document.forms[0],r=n.elements[e];if(typeof t=="undefined"||t==null)t="",r&&(t=r.value);return t==""?"":(t=t.replace(/&/g,"&amp;"),t=t.replace(/\"/g,"&quot;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;")," "+e+'="'+t+'"')}function init(){tinyMCEPopup.resizeToInnerSize(),document.getElementById("backgroundimagebrowsercontainer").innerHTML=getBrowserHTML("backgroundimagebrowser","backgroundimage","image","table"),document.getElementById("backgroundimagebrowsercontainer").innerHTML=getBrowserHTML("backgroundimagebrowser","backgroundimage","image","table"),document.getElementById("bordercolor_pickcontainer").innerHTML=getColorPickerHTML("bordercolor_pick","bordercolor"),document.getElementById("bgcolor_pickcontainer").innerHTML=getColorPickerHTML("bgcolor_pick","bgcolor");var e=2,t=2,n=tinyMCEPopup.getParam("table_default_border","0"),r=tinyMCEPopup.getParam("table_default_cellpadding",""),i=tinyMCEPopup.getParam("table_default_cellspacing",""),s="",o="",u="",a="",f="",l="",c="",h="",p="",d="",v="",m="",f="",a="",g="",y="",b=tinyMCEPopup.editor,w=b.dom,E=document.forms[0],S=w.getParent(b.selection.getNode(),"table");action=tinyMCEPopup.getWindowArg("action"),action||(action=S?"update":"insert");if(S&&action!="insert"){var x=S.rows,e=0;for(var T=0;T<x.length;T++)x[T].cells.length>e&&(e=x[T].cells.length);e=e,t=x.length,st=w.parseStyle(w.getAttrib(S,"style")),n=trimSize(getStyle(S,"border","borderWidth")),r=w.getAttrib(S,"cellpadding",""),i=w.getAttrib(S,"cellspacing",""),o=trimSize(getStyle(S,"width","width")),u=trimSize(getStyle(S,"height","height")),a=convertRGBToHex(getStyle(S,"bordercolor","borderLeftColor")),f=convertRGBToHex(getStyle(S,"bgcolor","backgroundColor")),s=w.getAttrib(S,"align",s),y=w.getAttrib(S,"frame"),g=w.getAttrib(S,"rules"),l=tinymce.trim(w.getAttrib(S,"class").replace(/mceItem.+/g,"")),c=w.getAttrib(S,"id"),h=w.getAttrib(S,"summary"),p=w.serializeStyle(st),d=w.getAttrib(S,"dir"),v=w.getAttrib(S,"lang"),m=getStyle(S,"background","backgroundImage").replace(new RegExp("url\\(['\"]?([^'\"]*)['\"]?\\)","gi"),"$1"),E.caption.checked=S.getElementsByTagName("caption").length>0,orgTableWidth=o,orgTableHeight=u,action="update",E.insert.value=b.getLang("update")}addClassesToList("class","table_styles"),TinyMCE_EditableSelects.init(),selectByValue(E,"align",s),selectByValue(E,"tframe",y),selectByValue(E,"rules",g),selectByValue(E,"class",l,!0,!0),E.cols.value=e,E.rows.value=t,E.border.value=n,E.cellpadding.value=r,E.cellspacing.value=i,E.width.value=o,E.height.value=u,E.bordercolor.value=a,E.bgcolor.value=f,E.id.value=c,E.summary.value=h,E.style.value=p,E.dir.value=d,E.lang.value=v,E.backgroundimage.value=m,updateColor("bordercolor_pick","bordercolor"),updateColor("bgcolor_pick","bgcolor"),isVisible("backgroundimagebrowser")&&(document.getElementById("backgroundimage").style.width="180px"),action=="update"&&(E.cols.disabled=!0,E.rows.disabled=!0)}function changedSize(){var e=document.forms[0],t=dom.parseStyle(e.style.value),n=e.height.value;n!=""?t.height=getCSSSize(n):t.height="",e.style.value=dom.serializeStyle(t)}function isCssSize(e){return/^[0-9.]+(%|in|cm|mm|em|ex|pt|pc|px)$/.test(e)}function cssSize(e,t){return e=tinymce.trim(e||t),isCssSize(e)?e:parseInt(e,10)+"px"}function changedBackgroundImage(){var e=document.forms[0],t=dom.parseStyle(e.style.value);t["background-image"]="url('"+e.backgroundimage.value+"')",e.style.value=dom.serializeStyle(t)}function changedBorder(){var e=document.forms[0],t=dom.parseStyle(e.style.value);e.border.value==""||!isCssSize(e.border.value)&&e.bordercolor.value==""?e.border.value||(t.border="",t["border-width"]=""):t["border-width"]=cssSize(e.border.value),e.style.value=dom.serializeStyle(t)}function changedColor(){var e=document.forms[0],t=dom.parseStyle(e.style.value);t["background-color"]=e.bgcolor.value,e.bordercolor.value!=""&&(t["border-color"]=e.bordercolor.value,t["border-width"]||(t["border-width"]=cssSize(e.border.value,1))),e.style.value=dom.serializeStyle(t)}function changedStyle(){var e=document.forms[0],t=dom.parseStyle(e.style.value);t["background-image"]?e.backgroundimage.value=t["background-image"].replace(new RegExp("url\\(['\"]?([^'\"]*)['\"]?\\)","gi"),"$1"):e.backgroundimage.value="",t.width&&(e.width.value=trimSize(t.width)),t.height&&(e.height.value=trimSize(t.height)),t["background-color"]&&(e.bgcolor.value=t["background-color"],updateColor("bgcolor_pick","bgcolor")),t["border-color"]&&(e.bordercolor.value=t["border-color"],updateColor("bordercolor_pick","bordercolor"))}tinyMCEPopup.requireLangPack();var action,orgTableWidth,orgTableHeight,dom=tinyMCEPopup.editor.dom;tinyMCEPopup.onInit.add(init);