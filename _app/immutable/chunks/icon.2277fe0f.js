import{a0 as r}from"./index.0f961b9d.js";import{w as e}from"./index.462ffd87.js";function z(a){const s=a-1;return s*s*s+1}function _(a,{delay:s=0,duration:c=400,easing:m=z,x:p=0,y:l=0,opacity:g=0}={}){const o=getComputedStyle(a),n=+o.opacity,y=o.transform==="none"?"":o.transform,u=n*(1-g),[d,f]=r(p),[x,h]=r(l);return{delay:s,duration:c,easing:m,css:(i,b)=>`
			transform: ${y} translate(${(1-i)*d}${f}, ${(1-i)*x}${h});
			opacity: ${n-u*b}`}}const I={},S=e([]),U=e([]),$=e({}),v=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dark"}],O={},R={nav:[{text:"About",link:"/about"}]},D={nav:[{text:"Feed",link:"/atom.xml"},{text:"Sitemap",link:"/sitemap.xml"}]},w={locales:"en-US",options:{year:"2-digit",weekday:"long",month:"short",day:"numeric"}},t={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:{}.URARA_SITE_DOMAIN??"mb-izzo.github.io",title:"Izzo",subtitle:"A blog for my thoughts",lang:"en-US",description:"I am a programmer expressing stuff.",author:{avatar:"/assets/maskable@512.png",name:"Izzo",status:"",bio:"Dumb thoughts of a programmer."},themeColor:"#3D4451"},C={src:t.protocol+t.domain+"/favicon.png",sizes:"48x48",type:"image/png"},T={180:{src:t.protocol+t.domain+"/assets/any@180.png",sizes:"180x180",type:"image/png"},192:{src:t.protocol+t.domain+"/assets/any@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/any@512.png",sizes:"512x512",type:"image/png"}},E={192:{src:t.protocol+t.domain+"/assets/maskable@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/maskable@512.png",sizes:"512x512",type:"image/png"}};export{T as a,R as b,v as c,_ as d,S as e,C as f,U as g,O as h,w as i,D as j,E as m,I as p,t as s,$ as t};