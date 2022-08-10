(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{630:function(v,_,t){"use strict";t.r(_);var a=t(12),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"进程与线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[v._v("#")]),v._v(" 进程与线程")]),v._v(" "),t("p",[t("strong",[v._v("进程（Process）")]),v._v(" 是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。 在当代面向线程设计的计算机结构中，进程是线程的容器。程序是指令、数据及其组织形式的描述，进程是程序的实体。")]),v._v(" "),t("p",[t("strong",[v._v("线程（thread）")]),v._v(" 是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。")]),v._v(" "),t("p",[t("strong",[v._v("总结")])]),v._v(" "),t("p",[v._v("进程：指在系统中正在运行的一个应用程序；程序一旦运行就是进程；进程——资源分配的最小单位。")]),v._v(" "),t("p",[v._v("线程：系统分配处理器时间资源的基本单元，或者说进程之内独立执行的一个单元执行流。线程——程序执行的最小单位。")]),v._v(" "),t("p",[t("strong",[v._v("特点")]),v._v("：")]),v._v(" "),t("ol",[t("li",[v._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃。")]),v._v(" "),t("li",[v._v("线程之间共享进程中的数据。")]),v._v(" "),t("li",[v._v("当一个进程关闭之后，操作系统会回收进程所占用的内存，当一个进程退出时，操作系统会回收该进程所申请的所有资源；即使其中任意线程因为操作不当导致内存泄漏，当进程退出时，这些内存也会被正确回收。")]),v._v(" "),t("li",[v._v("进程之间的内容相互隔离。进程隔离就是为了使操作系统中的进程互不干扰，每一个进程只能访问自己占有的数据，也就避免出现进程 A 写入数据到进程 B 的情况。正是因为进程之间的数据是严格隔离的，所以一个进程如果崩溃了，或者挂起了，是不会影响到其他进程的。如果进程之间需要进行数据的通信，这时候，就需要使用用于进程间通信的机制了。")])]),v._v(" "),t("h2",{attrs:{id:"进程间的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程间的通信"}},[v._v("#")]),v._v(" 进程间的通信")]),v._v(" "),t("p",[v._v("每个进程各自有不同的用户地址空间，任何一个进程的全局变量在另一个进程中都看不到，所以进程之间要交换数据必须通过内核，在内核中开辟一块缓冲区，进程1把数据从用户空间拷到"),t("code",[v._v("内核缓冲区")]),v._v("，进程2再从内核缓冲区把数据读走，内核提供的这种机制称为"),t("strong",[v._v("进程间通信（IPC，InterProcess Communication）")]),v._v("。")]),v._v(" "),t("ol",[t("li",[t("p",[t("code",[v._v("匿名管道通信")])]),v._v(" "),t("p",[v._v("管道的实质是一个内核缓冲区，进程以先进先出的方式从缓冲区存取数据，管道一端的进程顺序的将数据写入缓冲区，另一端的进程则顺序的读出数据（单向通信）。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("有名管道通信")])]),v._v(" "),t("p",[v._v("有名管道不同于匿名管道之处在于它提供了一个路径名与之关联，"),t("strong",[v._v("以有名管道的文件形式存在于文件系统中")]),v._v("，因此，通过有名管道不相关的进程也能交换数据。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("消息队列通信")])]),v._v(" "),t("p",[v._v("消息队列提供了一种从一个进程向另一个进程发送一个数据块的方法。 每个数据块都被认为含有一个类型，接收进程可以独立地接收含有不同类型的数据结构。可以通过发送消息来避免有名管道的同步和阻塞问题。但是消息队列与有名管道一样，每个数据块都有一个最大长度的限制。")]),v._v(" "),t("p",[v._v("缺点：可能会受到数据块最大长度的限制约束；如果频繁的发生进程间的通信行为，那么进程需要频繁地读取队列中的数据到内存，相当于间接地从一个进程拷贝到另一个进程，这需要花费时间。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("信号量通信")])]),v._v(" "),t("p",[v._v("信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步，其中进行PV操作。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("信号通信")])]),v._v(" "),t("p",[v._v("信号是Linux系统中用于进程间互相通信或者操作的一种机制，信号可以在任何时候发给某一进程，而无需知道该进程的状态。如果该进程当前并未处于执行状态，则该信号就有内核保存起来，直到该进程回复执行并传递给它为止。如果一个信号被进程设置为阻塞，则该信号的传递被延迟，直到其阻塞被取消是才被传递给进程。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("共享内存通信")])]),v._v(" "),t("p",[v._v("为了在多个进程间交换信息，内核专门留出了一块内存区，可以由需要访问的进程将其映射到自己的私有地址空间。进程就可以直接读写这一块内存而不需要进行数据的拷贝，从而大大提高效率。共享内存是最快的 IPC 方式，往往与其他通信机制，如信号量，配合使用，来实现进程间的同步和通信。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("套接字通信")])]),v._v(" "),t("p",[v._v("凭借套接字这种通信机制，客户/服务器（即要进行通信的进程）系统的开发工作既可以在本地单机上进行，也可以跨网络进行。也就是说它可以让不在同一台计算机但通过网络连接计算机上的进程进行通信。")])])]),v._v(" "),t("h2",{attrs:{id:"僵尸进程和孤儿进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#僵尸进程和孤儿进程"}},[v._v("#")]),v._v(" 僵尸进程和孤儿进程")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("孤儿进程")]),v._v("：父进程退出了，而它的一个或多个进程还在运行，那这些子进程都会成为孤儿进程。孤儿进程将被init进程(进程号为1)所收养，并由init进程对它们完成状态收集工作。")]),v._v(" "),t("li",[t("strong",[v._v("僵尸进程")]),v._v("：子进程比父进程先结束，而父进程又没有释放子进程占用的资源，那么子进程的进程描述符仍然保存在系统中，这种进程称之为僵死进程。")])]),v._v(" "),t("h2",{attrs:{id:"进程调度策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程调度策略"}},[v._v("#")]),v._v(" 进程调度策略")]),v._v(" "),t("ul",[t("li",[v._v("先来先服务FCFS")]),v._v(" "),t("li",[v._v("短进程调度优先SPF")]),v._v(" "),t("li",[v._v("高优先权先调度\n"),t("ul",[t("li",[v._v("非抢占式优先")]),v._v(" "),t("li",[v._v("抢占式优先")])])]),v._v(" "),t("li",[v._v("高响应比优先")]),v._v(" "),t("li",[v._v("时间片轮转")])]),v._v(" "),t("h2",{attrs:{id:"死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[v._v("#")]),v._v(" 死锁")]),v._v(" "),t("p",[v._v("当线程A持有独占锁a，并尝试去获取独占锁b的同时，线程B持有独占锁b，并尝试获取独占锁a的情况下，就会发生AB两个线程由于互相持有对方需要的锁，而发生的阻塞现象，我们称为死锁。")]),v._v(" "),t("h3",{attrs:{id:"产生死锁的4个必要条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#产生死锁的4个必要条件"}},[v._v("#")]),v._v(" 产生死锁的4个必要条件")]),v._v(" "),t("ol",[t("li",[v._v("互斥条件：一个资源每次只能被一个线程使用。")]),v._v(" "),t("li",[v._v("请求与保持条件：一个线程因请求资源而阻塞时，对已获得的资源保持不放。")]),v._v(" "),t("li",[v._v("不剥夺条件：线程已获得的资源，在未使用完之前，不能强行剥夺。")]),v._v(" "),t("li",[v._v("循环等待条件：若干线程之间形成一种头尾相接的循环等待资源关系。")])]),v._v(" "),t("h3",{attrs:{id:"预防死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预防死锁"}},[v._v("#")]),v._v(" 预防死锁")]),v._v(" "),t("ul",[t("li",[v._v("资源一次性分配：一次性分配所有资源，这样就不会再有请求了（破坏请求条件）")]),v._v(" "),t("li",[v._v("只要有一个资源得不到分配，也不给这个进程分配其他的资源（破坏请求与保持条件）")]),v._v(" "),t("li",[v._v("可剥夺资源：即当某进程获得了部分资源，但得不到其它资源，则释放已占有的资源（破坏不可剥夺条件）")]),v._v(" "),t("li",[v._v("资源有序分配法：系统给每类资源赋予一个编号，每一个进程按编号递增的顺序请求资源，释放则相反（破坏循环等待条件）")])])])}),[],!1,null,null,null);_.default=s.exports}}]);