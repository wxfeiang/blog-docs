import{_ as t,c as s,o as l,S as e}from"./chunks/framework.d5b537ad.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/outher/router.md","filePath":"src/outher/router.md"}'),n={name:"src/outher/router.md"},a=e(`<h2 id="前端路由划分" tabindex="-1">前端路由划分 <a class="header-anchor" href="#前端路由划分" aria-label="Permalink to &quot;前端路由划分&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:center;">案例值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:center;">1/’‘</td><td style="text-align:left;">Id</td></tr><tr><td style="text-align:left;">pid</td><td style="text-align:center;">上级ID</td><td style="text-align:left;">上级ID</td></tr><tr><td style="text-align:left;">menuType</td><td style="text-align:center;">一级菜单</td><td style="text-align:left;">菜单类型</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:center;">&#39;/user &#39;</td><td style="text-align:left;">访问地址</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:center;">&#39;manger&#39;</td><td style="text-align:left;">luyou 名称</td></tr><tr><td style="text-align:left;">component</td><td style="text-align:center;">layout,</td><td style="text-align:left;">前端根组件</td></tr><tr><td style="text-align:left;">redirect</td><td style="text-align:center;">&#39;/user/manage&#39;,</td><td style="text-align:left;">重定向</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:center;">&#39;用户管理&#39;,</td><td style="text-align:left;">名称</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:center;">&#39;icon-yonghu1&#39; ,</td><td style="text-align:left;">图标</td></tr><tr><td style="text-align:left;">show</td><td style="text-align:center;">true ,</td><td style="text-align:left;">是否显示</td></tr><tr><td style="text-align:left;">status</td><td style="text-align:center;">true ,</td><td style="text-align:left;">状态 0,1</td></tr><tr><td style="text-align:left;">siderShow</td><td style="text-align:center;">true ,</td><td style="text-align:left;">是否侧边显示</td></tr><tr><td style="text-align:left;">role</td><td style="text-align:center;">[&#39;admin&#39;, &quot;manger&quot;]</td><td style="text-align:left;">角色组</td></tr><tr><td style="text-align:left;">sort</td><td style="text-align:center;">0</td><td style="text-align:left;">Number</td></tr><tr><td style="text-align:left;">cache</td><td style="text-align:center;">true</td><td style="text-align:left;">是否缓存</td></tr><tr><td style="text-align:left;">routeMenu</td><td style="text-align:center;">true</td><td style="text-align:left;">是否路由菜单</td></tr><tr><td style="text-align:left;">breadcrumb</td><td style="text-align:center;">false</td><td style="text-align:left;">如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)</td></tr><tr><td style="text-align:left;">affix</td><td style="text-align:center;">true</td><td style="text-align:left;">如果设置为true，它则会固定在tags-view中(默认 false)</td></tr><tr><td style="text-align:left;">openingMode</td><td style="text-align:center;">link /center</td><td style="text-align:left;">外部 内部</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>时间字段数据库会自动更新生成</p></div><h2 id="前端路由结构" tabindex="-1">前端路由结构 <a class="header-anchor" href="#前端路由结构" aria-label="Permalink to &quot;前端路由结构&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">layout</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 根组件</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/user/manage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">用户管理</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">icon-yonghu1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">children</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/user/manage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/views/user-manage/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        meta</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">userManger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">el-icon-user</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    ]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">......</span></span></code></pre></div>`,5),o=[a];function p(r,c,y,d,F,i){return l(),s("div",null,o)}const x=t(n,[["render",p]]);export{g as __pageData,x as default};