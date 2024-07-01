import{_ as n,m as s,l as a,a3 as p}from"./chunks/framework.CYyfuRgi.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/frontEnd/Algorithm/JSON2DOM.md","filePath":"column/frontEnd/Algorithm/JSON2DOM.md"}'),e={name:"column/frontEnd/Algorithm/JSON2DOM.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type Props = {</span></span>
<span class="line"><span>    [key: string]: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface Element {</span></span>
<span class="line"><span>    type: string;</span></span>
<span class="line"><span>    props: Props | null;</span></span>
<span class="line"><span>    children: (Element | string)[];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 创建一个虚拟 DOM 元素</span></span>
<span class="line"><span> * @param type 元素类型</span></span>
<span class="line"><span> * @param props 元素属性</span></span>
<span class="line"><span> * @param children 子元素</span></span>
<span class="line"><span> * @returns 虚拟 DOM 元素</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function createElement(type: string, props: Props | null,</span></span>
<span class="line"><span> ...children: (Element | string)[]): Element {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        type,</span></span>
<span class="line"><span>        props,</span></span>
<span class="line"><span>        children</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 将虚拟 DOM 元素渲染到指定的容器中</span></span>
<span class="line"><span> * @param element 虚拟 DOM 元素</span></span>
<span class="line"><span> * @param container 容器元素</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function render(element: Element, container: HTMLElement): void {</span></span>
<span class="line"><span>    let dom: HTMLElement;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if (typeof element === &#39;string&#39;) {</span></span>
<span class="line"><span>        dom = document.createTextNode(element);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        dom = document.createElement(element.type);</span></span>
<span class="line"><span>        if (element.props) {</span></span>
<span class="line"><span>            Object.keys(element.props).forEach(key =&gt; {</span></span>
<span class="line"><span>                const value = element.props![key];</span></span>
<span class="line"><span>                if (key in dom) {</span></span>
<span class="line"><span>                    (dom as any)[key] = value;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    dom.setAttribute(key, value);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        element.children.forEach(child =&gt; render(child, dom));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container.appendChild(dom);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 示例用法</span></span>
<span class="line"><span>const element = createElement(&#39;div&#39;, { id: &#39;container&#39; },</span></span>
<span class="line"><span>    createElement(&#39;h1&#39;, null, &#39;Hello&#39;),</span></span>
<span class="line"><span>    createElement(&#39;p&#39;, null, &#39;This is a paragraph.&#39;)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const container = document.getElementById(&#39;app&#39;)!;</span></span>
<span class="line"><span>if (container) {</span></span>
<span class="line"><span>    render(element, container);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1),i=[l];function c(t,r,o,m,d,h){return a(),s("div",null,i)}const f=n(e,[["render",c]]);export{_ as __pageData,f as default};
