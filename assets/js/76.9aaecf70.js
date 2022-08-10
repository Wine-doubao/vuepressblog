(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{622:function(s,t,e){"use strict";e.r(t);var a=e(12),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("持续更新中...")])]),s._v(" "),e("h2",{attrs:{id:"git-commit报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit报错"}},[s._v("#")]),s._v(" git commit报错")]),s._v(" "),e("p",[s._v("nothing to commit, working tree clean.")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2022/07/14/fAvQLyeVlci4mJX.png",alt:"image-20220324104121740"}})]),s._v(" "),e("p",[s._v("出现这种问题，要想一下自己是否已经提交过一次了。")]),s._v(" "),e("p",[s._v("还有一种情况就是没有修改内容，只是改变了大小写，因为git设置了忽略大小写，所以要更改一下设置：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.ignorecase "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果想全局设置可以在config后加“--global”")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"git-merge报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge报错"}},[s._v("#")]),s._v(" git merge报错")]),s._v(" "),e("ol",[e("li",[e("p",[e("code",[s._v("error: Merging is not possible because you have unmerged files.")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2022/07/14/ogJ3xFcnTVipmkN.png",alt:"image-20220419233630509"}})]),s._v(" "),e("p",[s._v("有冲突未合并的文件，先修改冲突文件，修改后再"),e("code",[s._v("git add")]),s._v("和"),e("code",[s._v("git commit")]),s._v("，就可以push成功了。")])])]),s._v(" "),e("h2",{attrs:{id:"git-push报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-push报错"}},[s._v("#")]),s._v(" git push报错")]),s._v(" "),e("ol",[e("li",[e("p",[e("code",[s._v("hint: Updates were rejected because the remote contains work that you do")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2022/07/14/nrObt6z2Tm3EPU4.png",alt:"image-20220713103820175"}})]),s._v(" "),e("p",[s._v("此时远程分支有新的commit未同步到本地，无法推送。有以下两种方式解决：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("先git pull再git push，但此时会自动生成一条merge commit，比较不整洁。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("给git pull加上--rebase，但是该命令要保证目录中没有Modified状态的文件。可参考"),e("a",{attrs:{href:"https://juejin.cn/post/6844903895160881166",target:"_blank",rel:"noopener noreferrer"}},[s._v("git pull --rebase的正确使用"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase origin master\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])])])]),s._v(" "),e("h2",{attrs:{id:"git-pull报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-pull报错"}},[s._v("#")]),s._v(" git pull报错")]),s._v(" "),e("ol",[e("li",[e("p",[e("code",[s._v("failed to push some refs to 'xxx'.")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2022/07/14/HZF7DkeV6uCpSsN.png",alt:"image-20220324105217468"}})]),s._v(" "),e("p",[s._v('在GitHub创建仓库的时候，一般都会勾选"Add a README file"选项，点击创建仓库时，它会帮我们做一次初始提交，这样仓库就有了一个README.md文件。当我们把本地库与远程库相关联时，因为两端都有内容，但这两份内容没有关联，导致两个库的内容不一致，无法直接提交，需要先拉取合并后才能提交。')]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull 仓库别名 分支名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("pull操作可能会导致以下错误。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("fatal: refusing to merge unrelated histories.")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s2.loli.net/2022/07/14/L9pMkZidXT1sn6y.png",alt:"image-20220324105958078"}})]),s._v(" "),e("p",[s._v("远端觉得这个本地库跟自己不相干，所以告知无法合并。")]),s._v(" "),e("p",[s._v("解决方法：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("先git clone远程仓库到本地，然后要push的东西放在该仓库下，然后再提交。这相当于一次update操作。")])]),s._v(" "),e("li",[e("p",[s._v('使用强制命令进行合并，这里会进入一个编辑页面，可以点击Esc，输入":wq"即可。')]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull 别名 分支名 --allow-unrelated-histories\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("p",[s._v("pull操作后可以使用git push推送到远程库。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("error: Your local changes to the following files would be overwritten by merge.")])]),s._v(" "),e("p",[s._v("拉取文件冲突，有两种解决方式：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("保留刚才本地修改的代码，并把git服务器上的代码pull到本地（本地刚才修改的代码将会被暂时封存起来）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如此一来，服务器上的代码更新到了本地，而且你本地修改的代码也没有被覆盖，之后使用add，commit，push 命令即可更新本地代码到服务器了。")])]),s._v(" "),e("li",[e("p",[s._v("完全地覆盖本地的代码，只保留服务器端代码，则直接回退到上一个版本，再进行pull：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);