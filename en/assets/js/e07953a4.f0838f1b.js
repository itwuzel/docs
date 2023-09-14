"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[2951],{261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Phasenhandling, Templates und Lithauisch",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},s=void 0,l={permalink:"/en/blog/2022/05/08/phases-templates-lithuanian",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2022-05-08/phases-templates-lithuanian.md",source:"@site/blog/2022-05-08/phases-templates-lithuanian.md",title:"Phasenhandling, Templates und Lithauisch",description:"Seit dem letzten Blogartikel sind schon wieder ein paar Monate vergangen. Wird also Zeit, dass wir hier mal wieder eine kurze Zusammenfassung und einen \xdcberblick \xfcber das geben was sich bei evcc in den letzten elf Releases (v0.81 bis v0.91) getan an.",date:"2022-05-08T00:00:00.000Z",formattedDate:"May 8, 2022",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:3.52,hasTruncateMarker:!1,authors:[{name:"Michael Geers",title:"Core-Team, UI",url:"https://github.com/naltatis",imageURL:"https://github.com/naltatis.png",key:"naltatis"}],frontMatter:{title:"Phasenhandling, Templates und Lithauisch",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},prevItem:{title:"Sponsoring und Umz\xfcge",permalink:"/en/blog/2022/11/26/one-time-sponsoring"},nextItem:{title:"evcc im pv magazin",permalink:"/en/blog/2022/01/18/pvmagazin"}},u={authorsImageUrls:[void 0]},c=[{value:"Neu unterst\xfctzte Ger\xe4te",id:"neu-unterst\xfctzte-ger\xe4te",level:2},{value:"Wallboxen \ud83d\udd0c",id:"wallboxen-",level:3},{value:"Fahrzeuge \ud83d\ude97 \ud83d\udef5",id:"fahrzeuge--",level:3},{value:"Wechselrichter \u2600\ufe0f \ud83d\udd0b",id:"wechselrichter-\ufe0f-",level:3},{value:"Netzz\xe4hler \ud83d\udcdf",id:"netzz\xe4hler-",level:3},{value:"RFID Support \ud83e\udeaa",id:"rfid-support-",level:3},{value:"Verbesserte Phasenumschaltung (1P/3P)",id:"verbesserte-phasenumschaltung-1p3p",level:2},{value:"Templates und Dokumentation",id:"templates-und-dokumentation",level:2},{value:"Neue Lokalisierung: Litauisch \ud83c\uddf1\ud83c\uddf9",id:"neue-lokalisierung-litauisch-",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Fehlerkorrekturen",id:"fehlerkorrekturen",level:2},{value:"Changelogs",id:"changelogs",level:2}],o={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Seit dem letzten Blogartikel sind schon wieder ein paar Monate vergangen. Wird also Zeit, dass wir hier mal wieder eine kurze Zusammenfassung und einen \xdcberblick \xfcber das geben was sich bei evcc in den letzten elf Releases (v0.81 bis v0.91) getan an."),(0,i.kt)("h2",{id:"neu-unterst\xfctzte-ger\xe4te"},"Neu unterst\xfctzte Ger\xe4te"),(0,i.kt)("p",null,"Die Liste der von evcc unterst\xfctzten Hardware w\xe4chst flei\xdfig weiter."),(0,i.kt)("h3",{id:"wallboxen-"},"Wallboxen \ud83d\udd0c"),(0,i.kt)("p",null,"Wir haben einige Wallbox-Anbindungen hinzugef\xfcgt. Da evcc nun auch den sehr verbreiteten ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/pull/3103"},"Bender Controller unterst\xfctzt")," konnten wir unsere Unterst\xfctzung deutlich verbreitern."),(0,i.kt)("p",null,"Hier die Hersteller, die seit Anfang des Jahres neu dazu gekommen sind: Alphatec, Ebee, Ensto, Garo, HardyBarth, Innogy, Juice, Mennekes, OpenWB Pro, Optec, PC Electric, SmartWB, TechniSat, Tapo Smarthome, Ubitricity Vestel, Webasto. ",(0,i.kt)("a",{parentName:"p",href:"/docs/devices/chargers"},"(Alle Wallboxen)")),(0,i.kt)("h3",{id:"fahrzeuge--"},"Fahrzeuge \ud83d\ude97 \ud83d\udef5"),(0,i.kt)("p",null,"Audi (e-tron), Cupra, Jaguar, Landrover, Mercedes, Silence S01, Smart. ",(0,i.kt)("a",{parentName:"p",href:"/docs/devices/vehicles"},"(Alle Fahrzeuge)")),(0,i.kt)("h3",{id:"wechselrichter-\ufe0f-"},"Wechselrichter \u2600\ufe0f \ud83d\udd0b"),(0,i.kt)("p",null,"SMA (Smart Energy Hybrid), Huawei (SUN2000), Solarwatt, Solax, Varta. ",(0,i.kt)("a",{parentName:"p",href:"/docs/devices/meters"},"(Alle Wechselrichter)")),(0,i.kt)("h3",{id:"netzz\xe4hler-"},"Netzz\xe4hler \ud83d\udcdf"),(0,i.kt)("p",null,"SMA (Data Manager M Lite), Shelly (1PM, 3EM), Siemens (PAC 2200), OpenEMS, TQ. ",(0,i.kt)("a",{parentName:"p",href:"/docs/devices/meters"},"(Alle Messger\xe4te)")),(0,i.kt)("h3",{id:"rfid-support-"},"RFID Support \ud83e\udeaa"),(0,i.kt)("p",null,"Bei den Wallboxen von Easee und Warp kann nun auch evcc's ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/vehicles#erkennung-%C3%BCber-rfid-karten"},"RFID Funktion zur Fahrzeugerkennung")," verwendet werden."),(0,i.kt)("h2",{id:"verbesserte-phasenumschaltung-1p3p"},"Verbesserte Phasenumschaltung (1P/3P)"),(0,i.kt)("p",null,"Die erste Version der Phasenumschaltung f\xfcr unterst\xfctzte Wallboxen ist bereits seit Mitte letzten Jahres in evcc vorhanden. Wir konnten einige Erfahrungen sammeln und haben auf dieser Grundlage im Februar ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/pull/2613"},"ein gr\xf6\xdferes Redesign")," an der Mechanik durchgef\xfchrt. Damit ist die Phasenumschaltung deutlich zuverl\xe4ssiger geworden und verh\xe4lt sich auch in Situationen mit unbekannten oder unplausiblen Konfigurations-/ bzw. Messwerten besser."),(0,i.kt)("h2",{id:"templates-und-dokumentation"},"Templates und Dokumentation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/blog/2021/12/12/version-0-73#evcc-configure"},"Im Dezember")," haben wir mit dem CLI Einrichtungsassistenten ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc configure")," die Grundlagen f\xfcr eine einfachere Ersteinrichtung gelegt."),(0,i.kt)("p",null,"Die Konfigurationssyntax von evcc ist sehr flexibel und m\xe4chtig. So lassen sich bspw. noch nicht offiziell unterst\xfctzte Ger\xe4te oft rein per Konfiguration anbinden, wenn man die entsprechenden Modbus Felder und JSON Strukturen der Schnittstelle kennt. Im nun archivierten ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc-io/config")," Repository hatten wir Beispielkonfigurationen gesammelt, die man per Copy & Paste in seine eigene Konfiguration \xfcbernehmen konnte."),(0,i.kt)("p",null,"Zusammen mit dem Kommandozeilenwizzard haben wir das Konzept von ",(0,i.kt)("strong",{parentName:"p"},"Templates")," eingef\xfchrt. Durch Templates ist es uns m\xf6glich Boilerplate und internes Ger\xe4tewissen (Protokolle, Adresse, Datentypen, Feldnamen) sauber zu kapseln. Das folgende Beispiel f\xfcr die Einrichtung eines Solarlog Netzz\xe4hlers illustriert die Umstellung ganz gut:"),(0,i.kt)("p",null,"Vorher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"meters:\n  - name: my_solarlog\n    type: custom\n    power:\n      source: calc\n      add:\n        - source: modbus\n          uri: 192.168.0.77:502\n          id: 1\n          register:\n            address: 3502\n            type: input\n            decode: uint32s\n          scale: -1\n        - source: modbus\n          uri: 192.168.0.77:502\n          id: 1\n          register:\n            address: 3518\n            type: input\n            decode: uint32s\n")),(0,i.kt)("p",null,"Nachher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"meters:\n  - name: my_solarlog\n    type: template\n    template: solarlog\n    usage: grid\n    host: 192.168.0.77\n")),(0,i.kt)("p",null,"Der Nutzer muss nun nur noch den Hostnamen oder die IP-Adresse seiner Solarlog Instanz wissen und eingeben - Protokoll und Datenstruktur werden im ",(0,i.kt)("inlineCode",{parentName:"p"},"solarlog")," Template gekapselt."),(0,i.kt)("p",null,"Zus\xe4tzlich erhalten Templates auch eine strukturierte Beschreibung aller erforderlichen und optionalen Parameter, sowie ggf. Standardwerte und lokalisierte Hilfetexte."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/docs/pull/92"},"Seit M\xe4rz")," haben wir die ",(0,i.kt)("a",{parentName:"p",href:"/docs/devices/chargers"},"Ger\xe4tedokumentation unter docs.evcc.io")," auf Templates umgestellt. Die bisherigen Schreibweisen funktionieren nat\xfcrlich weiterhin. Da zuk\xfcnftige Feature wie die webbasierte Einrichtung (ja, das wird kommen \ud83d\ude04) auf ",(0,i.kt)("inlineCode",{parentName:"p"},"type: template")," aufbauen werden empfehlen wir, dass ihr eure bestehenden Konfigurationen bereits jetzt auf das neue Format umschreibt."),(0,i.kt)("h2",{id:"neue-lokalisierung-litauisch-"},"Neue Lokalisierung: Litauisch \ud83c\uddf1\ud83c\uddf9"),(0,i.kt)("p",null,"Mit v0.91 haben wir eine neue Lokalisation erhalten. Die evcc UI ist nun auch auf lithauisch verf\xfcgbar. Das ist neben Deutsch, Englisch und Itali\xe4nisch nun die vierte Sprache. Vielen Dank ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RTTTC"},"RTTTC")," \ud83d\udc9a."),(0,i.kt)("p",null,"Da unser Sprachwissen relativ beschr\xe4nkt ist sind wir immer dankbar f\xfcr \xdcbersetzungs-Contributions. Eine Dokumentation daf\xfcr gibts momentan noch nicht, aber schaut euch bei Interesse einfach ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/pull/3205"},"RTTC's Pull Request")," an. Das ist kein Hexenwerk \ud83e\uddd9\u200d\u2640\ufe0f."),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"Einige von euch werden es sicher schon gesehen haben. Mit dem n\xe4chsten Release wird evcc eine optisch komplett \xfcberarbeitete Benutzeroberfl\xe4che bekommen. Diese ist bereits in den aktuellen Nightly Builds verf\xfcgbar und ihr findet ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions/3149"},"hier")," und ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/pull/2889"},"hier")," Infos zum Entwicklungsprozess. Mehr dazu aber im n\xe4chsten Blogartikel."),(0,i.kt)("h2",{id:"fehlerkorrekturen"},"Fehlerkorrekturen"),(0,i.kt)("p",null,"Die letzten Versionen erhalten nat\xfcrlich wieder eine Reihe von Fehlerkorrekturen und vielen kleinen Verbesserungen. Schaut euch gerne \xfcber den Changelog Link unten eine detaillierte Auflistung an."),(0,i.kt)("h2",{id:"changelogs"},"Changelogs"),(0,i.kt)("p",null,"Hier findet ihr mehr Details zu den letzten Neuerungen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.91"},"Version 0.91")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.90"},"Version 0.90")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.89"},"Version 0.89")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.88"},"Version 0.88")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.87"},"Version 0.87")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.86"},"Version 0.86")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.85"},"Version 0.85")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.84"},"Version 0.84")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.83"},"Version 0.83")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.82"},"Version 0.82")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/tag/0.81"},"Version 0.81"))))}d.isMDXComponent=!0}}]);