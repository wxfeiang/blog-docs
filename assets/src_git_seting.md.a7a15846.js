import{_ as a,c as s,o as l,S as e}from"./chunks/framework.d5b537ad.js";const g=JSON.parse('{"title":"git","description":"","frontmatter":{"title":"git"},"headers":[],"relativePath":"src/git/seting.md","filePath":"src/git/seting.md"}'),t={name:"src/git/seting.md"},o=e(`<h1 id="常用操作" tabindex="-1">常用操作 <a class="header-anchor" href="#常用操作" aria-label="Permalink to &quot;常用操作&quot;">​</a></h1><h2 id="下载项目" tabindex="-1">下载项目 <a class="header-anchor" href="#下载项目" aria-label="Permalink to &quot;下载项目&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git clone url</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>下载地址后面可以追加文件夹名, 表示重新命名 ： git clone url dir</p></div><ol><li>下载指定操作</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git clone -b  [branch/tag] url</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>barnch 分支名<br> url 仓库地址<br> tag 版本/标签</p></div><h2 id="远程地址" tabindex="-1">远程地址 <a class="header-anchor" href="#远程地址" aria-label="Permalink to &quot;远程地址&quot;">​</a></h2><p><strong>查看</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git  remote -v</span></span></code></pre></div><p><strong>修改</strong></p><ol><li>命令修改</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git remote origin set-url [url]</span></span></code></pre></div><ol start="2"><li>先删后加</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git remote rm origin</span></span>
<span class="line"><span style="color:#babed8;">git remote add origin [url]</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这种操作不会保持历史记录</p></div><ol start="3"><li>直接修改config文件</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>打开.git文件夹找到config文件，替换远程地址<br> ----- 多个KEY 时候 已经添加好了Key</p></div><h2 id="本地操作" tabindex="-1">本地操作 <a class="header-anchor" href="#本地操作" aria-label="Permalink to &quot;本地操作&quot;">​</a></h2><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git init</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>初始化本地仓库</p></div><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git add  .</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>. 默认添加所有文件到本地仓库<br> dir 追加文件/文件夹</p></div><h3 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;commit&quot;">​</a></h3><p><strong>本次修改</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git commit -m  &quot;本次提交的描述信息&quot;</span></span></code></pre></div><p><strong>修改commit</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git commit --amend</span></span></code></pre></div><p>修改刚commit，还没有push的commit信息，=====在打开的 vim 界面 编辑即可</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git rebase -i HEAD~6</span></span></code></pre></div><p>修改某次 commit 信息</p></div><h3 id="push" tabindex="-1">push <a class="header-anchor" href="#push" aria-label="Permalink to &quot;push&quot;">​</a></h3><p>push(提交到远程仓库)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git push</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git push -u origin [main]</span></span></code></pre></div><p>【分支名】第一次提交使用,后面就可以继续使用git pull</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git push branch:branch</span></span></code></pre></div><p>提交本地 分支到远程分支</p></div><h3 id="pull" tabindex="-1">pull <a class="header-anchor" href="#pull" aria-label="Permalink to &quot;pull&quot;">​</a></h3><p>拉取/更新本地代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git pull</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>更新遇到本地文件冲突</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git stash         // 先把本地文件暂存起来</span></span>
<span class="line"><span style="color:#babed8;">git pull          // 在获取远程文件</span></span>
<span class="line"><span style="color:#babed8;">git stash  pop    // 把本地文件还原并于最新文件合并 =====》有冲突需要手动解决</span></span></code></pre></div></div>`,38),i=[o];function n(p,c,r,d,b,u){return l(),s("div",null,i)}const m=a(t,[["render",n]]);export{g as __pageData,m as default};
