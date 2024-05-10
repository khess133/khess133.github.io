(function(){"use strict";var e={8156:function(e,i,t){var a=t(5130),s=t(6768),u=t(4232);const r={class:"nav-bar"};function n(e,i,t,a,n,l){const o=(0,s.g2)("HomeView"),c=(0,s.g2)("CreativeWritingView"),m=(0,s.g2)("FormalWritingView"),d=(0,s.g2)("ArtifactView"),p=(0,s.g2)("PoemView");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",r,[(0,s.Lk)("div",{class:(0,u.C4)({"nav-item":!0,selected:0==n.currentPage}),onClick:i[0]||(i[0]=e=>n.currentPage=0)},"Home",2),(0,s.Lk)("div",{class:(0,u.C4)({"nav-item":!0,selected:1==n.currentPage}),onClick:i[1]||(i[1]=e=>n.currentPage=1)},"Creative Writing",2),(0,s.Lk)("div",{class:(0,u.C4)({"nav-item":!0,selected:2==n.currentPage}),onClick:i[2]||(i[2]=e=>n.currentPage=2)},"Formal Writing",2),(0,s.Lk)("div",{class:(0,u.C4)({"nav-item":!0,selected:3==n.currentPage}),onClick:i[3]||(i[3]=e=>n.currentPage=3)},"Artifact",2),(0,s.Lk)("div",{class:(0,u.C4)({"nav-item":!0,selected:4==n.currentPage}),onClick:i[4]||(i[4]=e=>n.currentPage=4)},"Poem",2)]),(0,s.bF)(o,{active:n.currentPage},null,8,["active"]),1==n.currentPage?((0,s.uX)(),(0,s.Wv)(c,{key:0,class:"page"})):(0,s.Q3)("",!0),2==n.currentPage?((0,s.uX)(),(0,s.Wv)(m,{key:1,class:"page"})):(0,s.Q3)("",!0),3==n.currentPage?((0,s.uX)(),(0,s.Wv)(d,{key:2,class:"page"})):(0,s.Q3)("",!0),4==n.currentPage?((0,s.uX)(),(0,s.Wv)(p,{key:3,class:"page"})):(0,s.Q3)("",!0)],64)}var l=t.p+"img/JustMercy.40986442.jpg",o=t.p+"img/SoC.da51708f.jpg";const c={class:"home-wrapper"},m={key:0,class:"header-text"},d={key:1,class:"book-wrapper"},p=(0,s.Lk)("img",{class:"cover",id:"just-mercy",src:l},null,-1),g=(0,s.Lk)("p",{class:"synopsis"}," After graduating from Harvard, Bryan Stevenson heads to Alabama to defend those wrongly condemned or those not afforded proper representation. One of his first cases is that of Walter McMillian, who is sentenced to die in 1987 for the murder of an 18-year-old girl, despite evidence proving his innocence. In the years that follow, Stevenson encounters racism and legal and political maneuverings as he tirelessly fights for McMillian's life. ",-1),v=(0,s.Lk)("img",{class:"cover",src:o},null,-1),A=(0,s.Lk)("p",{class:"synopsis"}," Six of Crows follows the adventures of six teenage criminals hired to undertake a dangerous heist, while searching for love and redemption along the way. The leader of the group is Kaz Brekker, the cunning, ruthless leader of the Dregs, one of many street gangs in the port city of Ketterdam. ",-1);function f(e,i,t,u,r,n){const l=(0,s.g2)("PopUp");return(0,s.uX)(),(0,s.CE)("div",c,[0==t.active?((0,s.uX)(),(0,s.CE)("h1",m,"Kalindi Hess Portfolio")):(0,s.Q3)("",!0),0==t.active?((0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("a",{class:"book-link",onClick:i[0]||(i[0]=(0,a.D$)((e=>r.selectedBook=1),["prevent"])),href:""},"Just Mercy"),(0,s.Lk)("a",{class:"book-link",onClick:i[1]||(i[1]=(0,a.D$)((e=>r.selectedBook=2),["prevent"])),href:""},"Six of Crows"),(0,s.bF)(l,{active:1==r.selectedBook,cb:n.bookCallback},{default:(0,s.k6)((()=>[p,g])),_:1},8,["active","cb"]),(0,s.bF)(l,{active:2==r.selectedBook,cb:n.bookCallback},{default:(0,s.k6)((()=>[v,A])),_:1},8,["active","cb"])])):(0,s.Q3)("",!0)])}const b={id:"popup-content"};function h(e,i,t,u,r,n){return t.active?((0,s.uX)(),(0,s.CE)("div",{key:0,id:"popup-wrapper",onClick:i[1]||(i[1]=(0,a.D$)((e=>t.cb()),["self"]))},[(0,s.Lk)("div",b,[(0,s.Lk)("div",{id:"popup-close",onClick:i[0]||(i[0]=e=>t.cb())},"x"),(0,s.RG)(e.$slots,"default",{},void 0,!0)])])):(0,s.Q3)("",!0)}var y={name:"PopUp",props:["active","cb"]},k=t(1241);const q=(0,k.A)(y,[["render",h],["__scopeId","data-v-2fc5d5d4"]]);var S=q,w={name:"HomeView",props:["active"],components:{PopUp:S},data(){return{selectedBook:0}},methods:{bookCallback(){this.selectedBook=0}}};const I=(0,k.A)(w,[["render",f]]);var K=I,C="data:image/jpeg;base64,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";const U={class:"creative-wrapper"},B=(0,s.Fv)('<h1 class="creativewritingheader"> Creative Writing </h1><p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, velit eu vestibulum luctus, risus nunc viverra erat, sed placerat felis quam ut sem. Phasellus sit amet ante ultrices, ultrices tellus fermentum, posuere felis. Curabitur eget nulla et leo rutrum accumsan. Ut felis lacus, lacinia quis libero a, iaculis ultrices mauris. Vivamus luctus justo ac consequat faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit vehicula arcu a molestie. Sed a eros a magna luctus condimentum. Maecenas ante sapien, maximus vel augue non, interdum euismod est. Quisque lobortis gravida erat id semper. Integer vel tellus tristique dolor malesuada scelerisque. Mauris iaculis ex tellus, quis luctus quam ultrices id. Aliquam nec nunc mollis, pulvinar elit sit amet, tempor sem. Integer vitae dolor id orci faucibus vulputate et non quam. Integer vulputate dignissim nisl in viverra. In sed neque ac justo mollis dictum. Etiam a justo et nibh rutrum placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non felis vitae neque egestas egestas. Duis eros dui, laoreet sit amet dolor ut, ornare mollis sem. Nunc ut luctus mauris. Donec eu lacus sem. Aenean quis viverra ex. Cras nec lacus velit. Sed quis justo tortor. Mauris vestibulum vulputate augue ut dictum. Maecenas nec venenatis nisi. Curabitur ut mauris ut turpis tempor consectetur in et ipsum. Vivamus nec scelerisque augue. Nullam ac nibh laoreet, sodales neque placerat, placerat nisl. Sed placerat tempus nisl vel pharetra. Etiam scelerisque vehicula tortor, at dictum orci consectetur id. Phasellus eleifend, sapien venenatis ultrices imperdiet, ante orci vehicula dui, ac eleifend nisl urna ut ligula. Mauris dignissim diam gravida nisi rutrum, eu suscipit lorem condimentum. Praesent tincidunt justo vehicula neque lacinia, at vulputate massa condimentum. Sed sed orci felis. Sed id dignissim nulla, vitae sollicitudin lorem. Duis rhoncus tellus id mattis luctus. Curabitur dignissim tortor eget risus interdum sodales. Vivamus auctor quam vel tempus vehicula. Vivamus malesuada maximus ligula, nec eleifend velit. Nunc neque lorem, imperdiet tempor aliquam quis, fringilla eget nisi. Phasellus sodales imperdiet faucibus. Aliquam justo nibh, tempus eget sapien eu, aliquet congue nulla. Curabitur et felis gravida, semper diam sit amet, rhoncus nulla. Nullam efficitur lorem non tellus laoreet, vel aliquam erat venenatis. Fusce turpis urna, efficitur quis facilisis quis, convallis in justo. Donec tincidunt sem mi, id consectetur nisl consequat vel. Phasellus vitae venenatis risus. Cras auctor leo quis felis imperdiet, ut laoreet massa porta. Integer mattis dui ac nibh mattis vehicula. Ut non lorem aliquam purus tempor ullamcorper sed non nisl. </p><div class="vines-wrapper"><img class="vines" src="'+C+'"><img class="vines" src="'+C+'"></div>',3),j=[B];function O(e,i,t,a,u,r){return(0,s.uX)(),(0,s.CE)("div",U,j)}var V={name:"CreativeWritingView"};const Q=(0,k.A)(V,[["render",O]]);var D=Q;const x={class:"creative-wrapper"},P=(0,s.Fv)('<h1 class="formalwritingheader"> Formal Writing </h1><p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, velit eu vestibulum luctus, risus nunc viverra erat, sed placerat felis quam ut sem. Phasellus sit amet ante ultrices, ultrices tellus fermentum, posuere felis. Curabitur eget nulla et leo rutrum accumsan. Ut felis lacus, lacinia quis libero a, iaculis ultrices mauris. Vivamus luctus justo ac consequat faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit vehicula arcu a molestie. Sed a eros a magna luctus condimentum. Maecenas ante sapien, maximus vel augue non, interdum euismod est. Quisque lobortis gravida erat id semper. Integer vel tellus tristique dolor malesuada scelerisque. Mauris iaculis ex tellus, quis luctus quam ultrices id. Aliquam nec nunc mollis, pulvinar elit sit amet, tempor sem. Integer vitae dolor id orci faucibus vulputate et non quam. Integer vulputate dignissim nisl in viverra. In sed neque ac justo mollis dictum. Etiam a justo et nibh rutrum placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non felis vitae neque egestas egestas. Duis eros dui, laoreet sit amet dolor ut, ornare mollis sem. Nunc ut luctus mauris. Donec eu lacus sem. Aenean quis viverra ex. Cras nec lacus velit. Sed quis justo tortor. Mauris vestibulum vulputate augue ut dictum. Maecenas nec venenatis nisi. Curabitur ut mauris ut turpis tempor consectetur in et ipsum. Vivamus nec scelerisque augue. Nullam ac nibh laoreet, sodales neque placerat, placerat nisl. Sed placerat tempus nisl vel pharetra. Etiam scelerisque vehicula tortor, at dictum orci consectetur id. Phasellus eleifend, sapien venenatis ultrices imperdiet, ante orci vehicula dui, ac eleifend nisl urna ut ligula. Mauris dignissim diam gravida nisi rutrum, eu suscipit lorem condimentum. Praesent tincidunt justo vehicula neque lacinia, at vulputate massa condimentum. Sed sed orci felis. Sed id dignissim nulla, vitae sollicitudin lorem. Duis rhoncus tellus id mattis luctus. Curabitur dignissim tortor eget risus interdum sodales. Vivamus auctor quam vel tempus vehicula. Vivamus malesuada maximus ligula, nec eleifend velit. Nunc neque lorem, imperdiet tempor aliquam quis, fringilla eget nisi. Phasellus sodales imperdiet faucibus. Aliquam justo nibh, tempus eget sapien eu, aliquet congue nulla. Curabitur et felis gravida, semper diam sit amet, rhoncus nulla. Nullam efficitur lorem non tellus laoreet, vel aliquam erat venenatis. Fusce turpis urna, efficitur quis facilisis quis, convallis in justo. Donec tincidunt sem mi, id consectetur nisl consequat vel. Phasellus vitae venenatis risus. Cras auctor leo quis felis imperdiet, ut laoreet massa porta. Integer mattis dui ac nibh mattis vehicula. Ut non lorem aliquam purus tempor ullamcorper sed non nisl. </p><div class="vines-wrapper"><img class="vines" src="'+C+'"><img class="vines" src="'+C+'"></div>',3),F=[P];function G(e,i,t,a,u,r){return(0,s.uX)(),(0,s.CE)("div",x,F)}var E={name:"FormalWritingView"};const H=(0,k.A)(E,[["render",G]]);var M=H,W=t.p+"img/artifactplaceholder.2fecd051.jpg";const Y={class:"creative-wrapper"},J=(0,s.Fv)('<h1 class="artifactheader"> Artifact </h1><img class="artifact-img" src="'+W+'"><p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, velit eu vestibulum luctus, risus nunc viverra erat, sed placerat felis quam ut sem. Phasellus sit amet ante ultrices, ultrices tellus fermentum, posuere felis. Curabitur eget nulla et leo rutrum accumsan. Ut felis lacus, lacinia quis libero a, iaculis ultrices mauris. Vivamus luctus justo ac consequat faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit vehicula arcu a molestie. Sed a eros a magna luctus condimentum. Maecenas ante sapien, maximus vel augue non, interdum euismod est. Quisque lobortis gravida erat id semper. Integer vel tellus tristique dolor malesuada scelerisque. Mauris iaculis ex tellus, quis luctus quam ultrices id. Aliquam nec nunc mollis, pulvinar elit sit amet, tempor sem. Integer vitae dolor id orci faucibus vulputate et non quam. Integer vulputate dignissim nisl in viverra. In sed neque ac justo mollis dictum. Etiam a justo et nibh rutrum placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non felis vitae neque egestas egestas. Duis eros dui, laoreet sit amet dolor ut, ornare mollis sem. Nunc ut luctus mauris. Donec eu lacus sem. Aenean quis viverra ex. Cras nec lacus velit. Sed quis justo tortor. Mauris vestibulum vulputate augue ut dictum. Maecenas nec venenatis nisi. Curabitur ut mauris ut turpis tempor consectetur in et ipsum. Vivamus nec scelerisque augue. Nullam ac nibh laoreet, sodales neque placerat, placerat nisl. Sed placerat tempus nisl vel pharetra. Etiam scelerisque vehicula tortor, at dictum orci consectetur id. Phasellus eleifend, sapien venenatis ultrices imperdiet, ante orci vehicula dui, ac eleifend nisl urna ut ligula. Mauris dignissim diam gravida nisi rutrum, eu suscipit lorem condimentum. Praesent tincidunt justo vehicula neque lacinia, at vulputate massa condimentum. Sed sed orci felis. Sed id dignissim nulla, vitae sollicitudin lorem. Duis rhoncus tellus id mattis luctus. Curabitur dignissim tortor eget risus interdum sodales. Vivamus auctor quam vel tempus vehicula. Vivamus malesuada maximus ligula, nec eleifend velit. Nunc neque lorem, imperdiet tempor aliquam quis, fringilla eget nisi. Phasellus sodales imperdiet faucibus. Aliquam justo nibh, tempus eget sapien eu, aliquet congue nulla. Curabitur et felis gravida, semper diam sit amet, rhoncus nulla. Nullam efficitur lorem non tellus laoreet, vel aliquam erat venenatis. Fusce turpis urna, efficitur quis facilisis quis, convallis in justo. Donec tincidunt sem mi, id consectetur nisl consequat vel. Phasellus vitae venenatis risus. Cras auctor leo quis felis imperdiet, ut laoreet massa porta. Integer mattis dui ac nibh mattis vehicula. Ut non lorem aliquam purus tempor ullamcorper sed non nisl. </p><div class="vines-wrapper"><img class="vines" src="'+C+'"><img class="vines" src="'+C+'"></div>',4),L=[J];function X(e,i,t,a,u,r){return(0,s.uX)(),(0,s.CE)("div",Y,L)}var N={name:"ArtifactView"};const R=(0,k.A)(N,[["render",X]]);var Z=R;const z={class:"creative-wrapper"},T=(0,s.Fv)('<h1 class="poemheader"> Poem </h1><p class="text"> I was born on September 13th; that makes me a Virgo. Honest, intelligent, hardworking, and reliable, are all traits I try to associate with myself. Perfectionist, judgemental, and analytical, are ones I don’t want to. I’m the youngest of three sisters, and my whole family. I have a fear of vomiting because I can’t control it, and I’m scared of what people would think of me, and I’m afraid of spiders because they have too many legs, and they look creepy when they walk. <br><br> My favorite color is purple, but not just plain purple. Purple like the wisteria flowers that grow every spring, purple like my best friend’s graceful laugh, purple like the taste of smooth ice cream when I share it with my mom. Not just plain purple. <br><br> I love the promise of friendship, but I’m too scared they’re crossing their fingers behind their backs. I love chocolate because it’s velvety and melts in your mouth. I’ve always wanted to travel the world, but I miss home the more I do. Sometimes I think it’s because I want to escape from normal, but I don’t like change. I want to see different things from my everyday life, but “ordinary” is my cornerstone, the sun I orbit. <br><br> I love to sing and dance and act, but I can’t stand public speaking. I love to put on a show for others, but not if it draws too much attention. I loathe when people are rude, but I can always justify it for them. I always read because it’s another way to travel without leaving home, but sometimes I find myself trying to read between the lines where there’s nothing special, so I write when reading becomes too out of control and I can fix it. <br><br> I always feel like I’m out of time, constantly chasing it while it slips away around a corner, or taunts me from the future I have yet to live. It’s always walking just a few steps ahead of me, but I can never catch up. Often it looks back and gives me a little wave, and sometimes it even holds my hand with a reassuring smile, but only for a moment before it runs off, again. <br><br> Hi, my name is Kalindi. It means “sun” in Sanskrit, but it’s strange in English. I always wondered about being named Katherine, or Kate, or Kaylin, or Kendall, but everyone loves my beautiful name. Just, sometimes it’s hard to say. </p><div class="vines-wrapper"><img class="vines" src="'+C+'"><img class="vines" src="'+C+'"></div>',3),_=[T];function $(e,i,t,a,u,r){return(0,s.uX)(),(0,s.CE)("div",z,_)}var ee={name:"PoemView"};const ie=(0,k.A)(ee,[["render",$]]);var te=ie,ae={name:"App",components:{HomeView:K,CreativeWritingView:D,FormalWritingView:M,ArtifactView:Z,PoemView:te},data(){return{currentPage:0}}};const se=(0,k.A)(ae,[["render",n]]);var ue=se;(0,a.Ef)(ue).mount("#app")}},i={};function t(a){var s=i[a];if(void 0!==s)return s.exports;var u=i[a]={exports:{}};return e[a].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(i,a,s,u){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],u=e[c][2];for(var n=!0,l=0;l<a.length;l++)(!1&u||r>=u)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(n=!1,u<r&&(r=u));if(n){e.splice(c--,1);var o=s();void 0!==o&&(i=o)}}return i}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[a,s,u]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(i){return 0===e[i]};var i=function(i,a){var s,u,r=a[0],n=a[1],l=a[2],o=0;if(r.some((function(i){return 0!==e[i]}))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(l)var c=l(t)}for(i&&i(a);o<r.length;o++)u=r[o],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(c)},a=self["webpackChunkkhess133_github_io"]=self["webpackChunkkhess133_github_io"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(8156)}));a=t.O(a)})();
//# sourceMappingURL=app.4e88bb73.js.map