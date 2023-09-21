"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6968],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(7462),r=t(7294),l=t(6010),i=t(2466),o=t(6550),s=t(1980),c=t(7392),d=t(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,c]=h({queryString:t,groupId:a}),[u,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),g=(()=>{const e=s??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var g=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function z(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=d.indexOf(n),a=c[t].value;a!==o&&(u(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(z,(0,a.Z)({},e,n)),r.createElement(f,(0,a.Z)({},e,n)))}function b(e){const n=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},5059:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(7462),r=(t(7294),t(3905));t(8209);const l={toc:[]},i="wrapper";function o(e){let{components:n,...t}=e;return(0,r.kt)(i,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Sponsor-Token erforderlich",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Weitere Informationen zum \ud83d\udc9a evcc Sponsorship gibt es ",(0,r.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"hier"),".")))}o.isMDXComponent=!0},4529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),l=(t(8209),t(4866),t(5162),t(5059));const i={sidebar_position:3},o="Fahrzeuge",s={unversionedId:"devices/vehicles",id:"devices/vehicles",title:"Fahrzeuge",description:"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren.",source:"@site/docs/devices/vehicles.mdx",sourceDirName:"devices",slug:"/devices/vehicles",permalink:"/docs/devices/vehicles",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/devices/vehicles.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hausinstallation",permalink:"/docs/devices/meters"},next:{title:"Referenz",permalink:"/docs/reference/"}},c={},d=[{value:"Aiways",id:"aiways",level:2},{value:"Audi",id:"audi",level:2},{value:"BMW",id:"bmw",level:2},{value:"Citro\xebn",id:"citro\xebn",level:2},{value:"Dacia",id:"dacia",level:2},{value:"DS",id:"ds",level:2},{value:"Fiat",id:"fiat",level:2},{value:"Ford",id:"ford",level:2},{value:"Hyundai Bluelink",id:"hyundai-bluelink",level:2},{value:"Jaguar",id:"jaguar",level:2},{value:"Jeep",id:"jeep",level:2},{value:"Kia Bluelink",id:"kia-bluelink",level:2},{value:"Land Rover",id:"land-rover",level:2},{value:"Mini",id:"mini",level:2},{value:"Nissan",id:"nissan",level:2},{value:"Leaf",id:"leaf",level:3},{value:"Leaf (pre 2019)",id:"leaf-pre-2019",level:3},{value:"Opel",id:"opel",level:2},{value:"Peugeot",id:"peugeot",level:2},{value:"Porsche",id:"porsche",level:2},{value:"Renault",id:"renault",level:2},{value:"Seat",id:"seat",level:2},{value:"CupraConnect Gen3 (Ateca, Leon, Formentor)",id:"cupraconnect-gen3-ateca-leon-formentor",level:3},{value:"CupraConnect Gen4 (Born)",id:"cupraconnect-gen4-born",level:3},{value:"Skoda",id:"skoda",level:2},{value:"Andere",id:"andere",level:3},{value:"Enyaq",id:"enyaq",level:3},{value:"Smart EQ",id:"smart-eq",level:2},{value:"Tesla",id:"tesla",level:2},{value:"Volkswagen",id:"volkswagen",level:2},{value:"We Connect (legacy)",id:"we-connect-legacy",level:3},{value:"We Connect ID",id:"we-connect-id",level:3},{value:"Volvo",id:"volvo",level:2},{value:"legacy",id:"legacy",level:3},{value:"Generische Unterst\xfctzung",id:"generische-unterst\xfctzung",level:2},{value:"manuell",id:"manuell",level:3},{value:"evNotify",id:"evnotify",level:3},{value:"ISO15118",id:"iso15118",level:3},{value:"mazda2mqtt",id:"mazda2mqtt",level:3},{value:"mg2mqtt",id:"mg2mqtt",level:3},{value:"Offline",id:"offline",level:3},{value:"Open Vehicle Monitoring System",id:"open-vehicle-monitoring-system",level:3},{value:"PSA Car Controller",id:"psa-car-controller",level:3},{value:"TeslaMate",id:"teslamate",level:3},{value:"Tronity \ud83d\udc9a",id:"tronity-",level:3},{value:"Scooter",id:"scooter",level:2},{value:"NIU E-Scooter",id:"niu-e-scooter",level:3}],u={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fahrzeuge"},"Fahrzeuge"),(0,r.kt)("p",null,"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren."),(0,r.kt)("p",null,"In der Konfigurationsdatei gibt es hierzu den folgenden Bereich:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: ev\n    type: ...\n")),(0,r.kt)("p",null,"Auf dieser Seite findest du die Konfigurationen f\xfcr alle von evcc unterst\xfctzten Fahrzeuge.\nNachdem du das Code-Beispiel f\xfcr dein Fahrzeug angepasst und in die ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," \xfcbernommen hast, kannst du die Verbindung mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc vehicle")," testen. Dabei werden alle konfigurierten Fahrzeuge getestet. Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc vehicle --name my_ev")," kann man mittels des vergebenen Namens selektiv testen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./evcc vehicle\n\nSoC:           57%\nCharge status: B\nCharged:       4.7kWh\nCapacity:      77kWh\nRange:         280km\nOdometer:      4131km\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Qualit\xe4t und Verf\xfcgbarkeit der Fahrzeugschnittstellen variiert von Hersteller zu Hersteller. Solltest du anhaltende Probleme mit dem aktualisieren deiner Fahrzeugdaten haben melde dich bitte in den ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions"},"GitHub Discussions"),".")),(0,r.kt)("h2",{id:"aiways"},"Aiways"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: aiways\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"audi"},"Audi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: audi\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"bmw"},"BMW"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: bmw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"citro\xebn"},"Citro\xebn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: citroen\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"dacia"},"Dacia"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: dacia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"ds"},"DS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ds\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"fiat"},"Fiat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: ZFAE... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    pin: # optional \n")),(0,r.kt)("h2",{id:"ford"},"Ford"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ford\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WF0FXX... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"hyundai-bluelink"},"Hyundai Bluelink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: hyundai\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch (optional) \n")),(0,r.kt)("h2",{id:"jaguar"},"Jaguar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"jeep"},"Jeep"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: ZFAE... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    pin: # optional \n")),(0,r.kt)("h2",{id:"kia-bluelink"},"Kia Bluelink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: kia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch (optional) \n")),(0,r.kt)("h2",{id:"land-rover"},"Land Rover"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"mini"},"Mini"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mini\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"nissan"},"Nissan"),(0,r.kt)("h3",{id:"leaf"},"Leaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: nissan\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"leaf-pre-2019"},"Leaf (pre 2019)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: carwings\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"opel"},"Opel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: opel\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WP0... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"peugeot"},"Peugeot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: peugeot\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"porsche"},"Porsche"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: porsche\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"renault"},"Renault"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: renault\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WREN... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"seat"},"Seat"),(0,r.kt)("h3",{id:"cupraconnect-gen3-ateca-leon-formentor"},"CupraConnect Gen3 (Ateca, Leon, Formentor)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: seat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"cupraconnect-gen4-born"},"CupraConnect Gen4 (Born)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: cupra\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"skoda"},"Skoda"),(0,r.kt)("h3",{id:"andere"},"Andere"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: skoda\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"enyaq"},"Enyaq"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: enyaq\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"smart-eq"},"Smart EQ"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: smart\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"tesla"},"Tesla"),(0,r.kt)("p",null,"Es wird ein ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," und ein ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh")," Token f\xfcr die Kommunikation mit der Tesla API erstellt werden."),(0,r.kt)("p",null,"Folgende Apps erm\xf6glichen das Erstellen von den beiden Tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/auth-app-for-tesla/id1552058613#?platform=iphone"},"Auth app for Tesla (iOS)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=net.leveugle.teslatokens"},"Tesla Tokens (Android)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/adriankumpf/tesla_auth"},"Tesla Auth (macOS, Linux)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tesla\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    accessToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    refreshToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"volkswagen"},"Volkswagen"),(0,r.kt)("h3",{id:"we-connect-legacy"},"We Connect (legacy)"),(0,r.kt)("p",null,"\xe4ltere Modelle wie e-Up, e-Golf, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: vw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"we-connect-id"},"We Connect ID"),(0,r.kt)("p",null,"ID.3, ID.4 (funktioniert auch f\xfcr e-Golf, e-Up)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: id\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"volvo"},"Volvo"),(0,r.kt)("h3",{id:""}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: volvo-connected\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional)\n    vccapikey: # Volvo developer portal VCC API Key, siehe https://github.com/evcc-io/evcc/discussions/3677#discussioncomment-4106300 \n")),(0,r.kt)("h3",{id:"legacy"},"legacy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: volvo\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h2",{id:"generische-unterst\xfctzung"},"Generische Unterst\xfctzung"),(0,r.kt)("h3",{id:"manuell"},"manuell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: custom\n    title: Mein Auto # display name for UI\n    capacity: 50 # byttery capacity (kWh)\n    soc: # battery soc (%)\n      source: # plugin type\n      # ...\n    status: # optional charge status (A..F)\n      source: # plugin type\n      # ...\n    range: # optional electric range (km)\n      source: # plugin type\n      # ...\n")),(0,r.kt)("h3",{id:"evnotify"},"evNotify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: evnotify\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    akey:\n    token:\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"iso15118"},"ISO15118"),(0,r.kt)("p",null,"Nur unterst\xfctzt wenn das Fahrzeug den Ladestand (Soc) an die verbundene Wallbox \xfcbermitteln kann."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: iso15118\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"mazda2mqtt"},"mazda2mqtt"),(0,r.kt)("p",null,"Voraussetzung ist ein konfigurierter MQTT Broker und eine mazda2mqtt Installation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/C64Axel/mazda2mqtt"},"https://github.com/C64Axel/mazda2mqtt"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mazda2mqtt\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    vin: W... # Erforderlich\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"mg2mqtt"},"mg2mqtt"),(0,r.kt)("p",null,"Voraussetzung ist ein konfigurierter MQTT Broker und ein SAIC/MQTT Gateway (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAIC-iSmart-API/saic-python-mqtt-gateway"},"https://github.com/SAIC-iSmart-API/saic-python-mqtt-gateway")," oder ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAIC-iSmart-API/saic-java-client"},"https://github.com/SAIC-iSmart-API/saic-java-client"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mg2mqtt\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"offline"},"Offline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: offline\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"open-vehicle-monitoring-system"},"Open Vehicle Monitoring System"),(0,r.kt)("p",null,"Unterst\xfctzung f\xfcr alle Fahrzeuge via ODB2 Adapter im Fahrzeug. Mehr Infos bei ",(0,r.kt)("a",{parentName:"p",href:"http://api.openvehicles.com/"},"Open Vehicle Monitoring System"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ovms\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    vehicleid:\n    capacity: 12 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"psa-car-controller"},"PSA Car Controller"),(0,r.kt)("p",null,"Remote Control of PSA car ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flobz/psa_car_controller"},"https://github.com/flobz/psa_car_controller")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: flobz\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    url: http://192.0.2.2\n    vin: W... # Erforderlich\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"teslamate"},"TeslaMate"),(0,r.kt)("p",null,"Open Source Tesla Datenlogger ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adriankumpf/teslamate"},"https://github.com/adriankumpf/teslamate"),". Voraussetzung ist konfigurierter MQTT Broker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: teslamate\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    id: 1 # optional\n    capacity: 50 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)("h3",{id:"tronity-"},"Tronity \ud83d\udc9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tronity\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    clientid: # Einrichtung unter https://app.tronity.tech\n    clientsecret: # Einrichtung unter https://app.tronity.tech\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind (optional)\n    capacity: 10 # Akkukapazit\xe4t in kWh (optional) \n")),(0,r.kt)(l.ZP,{mdxType:"SponsorshipRequired"}),(0,r.kt)("h2",{id:"scooter"},"Scooter"),(0,r.kt)("h3",{id:"niu-e-scooter"},"NIU E-Scooter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: niu-e-scooter\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt (optional)\n    icon: scooter # Icon in der Benutzeroberfl\xe4che (optional)\n    user: # Benutzerkonto (bspw. E-Mail Adresse, User Id, etc.)\n    password: # Passwort des Benutzerkontos (bei f\xfchrenden Nullen bitte in einfache Hochkommata setzen)\n    serial:\n    capacity: 4 # Akkukapazit\xe4t in kWh (optional) \n")))}m.isMDXComponent=!0}}]);