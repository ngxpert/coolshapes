import{a as p}from"./chunk-MLICEPNC.js";import"./chunk-PX7SDGVJ.js";import{S as D,a as d}from"./chunk-PEXZX57A.js";import{Ca as g,Qa as r,T as c,mb as l,nb as i}from"./chunk-MU3ZWAUM.js";import{a,b as o,h as y}from"./chunk-TWZW5B45.js";var u=y(D());var b={title:"API",mdFile:"./index.md",order:2},e=b;var m=[];var P={},h=P;var N='<h2 id="inputs" href="api" headinglink="true" class="ngde">Inputs<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="inputs"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">name</th><th class="ngde">data type</th><th class="ngde">default</th><th class="ngde">description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">size</code></td><td class="ngde"><em class="ngde">Number</em></td><td class="ngde">200</td><td class="ngde">The dimension of shape</td></tr><tr class="ngde"><td class="ngde"><a href="#categories" class="ngde"><code class="ngde">type</code></a></td><td class="ngde"><em class="ngde">String</em></td><td class="ngde">random</td><td class="ngde">The category of shapes, if left empty it will randomly select a category.</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">noise</code></td><td class="ngde"><em class="ngde">Boolean</em></td><td class="ngde">true</td><td class="ngde">Whether to add noise to the shape or not.</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">index</code></td><td class="ngde"><em class="ngde">Number</em></td><td class="ngde">random</td><td class="ngde">The index of shape within the shape <a href="#categories" class="ngde">category</a>, it would randomly select a shape from the category if type prop given. index starts from 0.</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">random</code></td><td class="ngde"><em class="ngde">Boolean</em></td><td class="ngde">false</td><td class="ngde">If set true it will select a random component</td></tr></tbody></table></div><ng-doc-blockquote type="note" class="ngde"><p class="ngde">Index starts from number 0, so if you want to retrieve the first shape of any category, you would use the index number 0.</p></ng-doc-blockquote><h3 id="categories" href="api" headinglink="true" class="ngde">Categories<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="categories"></ng-doc-heading-anchor></h3><p class="ngde">There are a total of <strong class="ngde">115</strong> shapes available in Coolshapes under the following categories.</p><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">name</th><th class="ngde">count</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">star</code></td><td class="ngde">13</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">triangle</code></td><td class="ngde">14</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">moon</code></td><td class="ngde">15</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">polygon</code></td><td class="ngde">8</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">flower</code></td><td class="ngde">16</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">rectangle</code></td><td class="ngde">9</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">ellipse</code></td><td class="ngde">12</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">wheel</code></td><td class="ngde">7</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">misc</code></td><td class="ngde">11</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">number</code></td><td class="ngde">10</td></tr></tbody></table></div><ng-doc-blockquote type="note" class="ngde"><p class="ngde">While passing the category name in the component, the name will be in lower case.</p></ng-doc-blockquote>',n=class t extends d{pageType="guide";pageContent=N;editSourceFileUrl="https://github.com/ngxpert/coolshapes/edit/main/src/app/pages/api/index.md?message=docs(): describe your changes here...";viewSourceFileUrl="https://github.com/ngxpert/coolshapes/blob/main/src/app/pages/api/index.md";page=e;demoAssets=h;constructor(){super()}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=c({type:t,selectors:[["ng-doc-page-talnhv1u"]],standalone:!0,features:[l([{provide:d,useExisting:t},m,e.providers??[]]),g,i],decls:1,vars:0,template:function(s,C){s&1&&r(0,"ng-doc-page")},dependencies:[p],encapsulation:2,changeDetection:0})},x=[o(a({},(0,u.isRoute)(e.route)?e.route:{}),{path:"",component:n,title:"API"})],q=x;export{n as PageComponent,q as default};
