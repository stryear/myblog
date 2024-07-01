import{_ as s,m as n,l as a,a3 as p}from"./chunks/framework.CYyfuRgi.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/frontEnd/Algorithm/PromiseAll.md","filePath":"column/frontEnd/Algorithm/PromiseAll.md"}'),e={name:"column/frontEnd/Algorithm/PromiseAll.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @description promiseAll函数接受一个数组，数组中的元素都是Promise对象，</span></span>
<span class="line"><span> * 返回一个Promise对象，这个Promise对象在数组中所有Promise对象都成功时才成功，否则失败。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function promiseAll&lt;T&gt;(promises: Promise&lt;T&gt;[]): Promise&lt;T[]&gt; {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        // 检查promises是否为数组</span></span>
<span class="line"><span>        if (!Array.isArray(promises)) {</span></span>
<span class="line"><span>            return reject(new TypeError(&#39;promises must be an array&#39;))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let resolvedCount = 0;</span></span>
<span class="line"><span>        const promiseNum = promises.length;</span></span>
<span class="line"><span>        const resolvedValues = new Array&lt;T&gt;(promiseNum);</span></span>
<span class="line"><span>        // 遍历promises数组，将每个Promise对象转换为Promise.resolve()，</span></span>
<span class="line"><span>        // 然后通过then()方法处理结果</span></span>
<span class="line"><span>        for (let i = 0; i &lt; promiseNum; i++) {</span></span>
<span class="line"><span>            Promise.resolve(promises[i]).then(value =&gt; {</span></span>
<span class="line"><span>                resolvedCount++;</span></span>
<span class="line"><span>                resolvedValues[i] = value;</span></span>
<span class="line"><span>                if (resolvedCount === promiseNum) {</span></span>
<span class="line"><span>                    resolve(resolvedValues);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }, reject);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (promiseNum === 0) {</span></span>
<span class="line"><span>            resolve(resolvedValues);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1),i=[l];function r(o,t,c,m,d,u){return a(),n("div",null,i)}const h=s(e,[["render",r]]);export{v as __pageData,h as default};
