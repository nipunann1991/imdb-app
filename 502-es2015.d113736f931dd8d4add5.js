(self.webpackChunkimdb_portal_app=self.webpackChunkimdb_portal_app||[]).push([[502],{8502:function(n,e,t){"use strict";t.r(e),t.d(e,{SearchResultsPageModule:function(){return L}});var o=t(8583),i=t(4422),s=t(8002),c=t(639),r=t(6037),a=t(2340),g=t(1841);const l=`https://www.omdbapi.com/?apikey=${a.N.OMDB_API_KEY}`;let p=(()=>{class n{constructor(n){this.http=n}getMovieBySearchTerm(n){return this.http.get(`${l}&s=${n.movieTitle}&page=${n.page}`)}getMovieData(n){return this.http.get(`${l}&i=${n}`)}}return n.\u0275fac=function(e){return new(e||n)(c.LFG(g.eN))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=t(7709),P=t(6215);let u=(()=>{class n{constructor(){this.setPagination=new m.xQ,this.getPagination=new P.X({pageIndex:1,collection:[]}),this.setPaginationIndex=this.setPagination.asObservable(),this.getPaginationData=this.getPagination.asObservable()}setPage(n){this.setPagination.next(n)}getPageData(n){this.getPagination.next(n)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var M=t(2890),_=t(5183),O=t(2533);function C(n,e){if(1&n&&(c.TgZ(0,"li"),c._uU(1),c.qZA()),2&n){const n=e.$implicit;c.xp6(1),c.Oqu(n)}}const h=function(n,e){return{itemsPerPage:n,currentPage:e}};let v=(()=>{class n{constructor(n){this.pagination=n,this.collection=[],this.itemsPerPage=10}ngOnInit(){this.pagination.getPaginationData.subscribe(n=>{this.currentPage=n.pageIndex,this.collection=n.collection})}pageChanged(n){this.pagination.setPage(n)}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(u))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-pagination"]],decls:5,vars:7,consts:[[1,"pagination"],[4,"ngFor","ngForOf"],[3,"pageChange"]],template:function(n,e){1&n&&(c.TgZ(0,"div",0),c.TgZ(1,"ul"),c.YNc(2,C,2,1,"li",1),c.ALo(3,"paginate"),c.qZA(),c.TgZ(4,"pagination-controls",2),c.NdJ("pageChange",function(n){return e.pageChanged(n)}),c.qZA(),c.qZA()),2&n&&(c.xp6(2),c.Q6J("ngForOf",c.xi3(3,1,e.collection,c.WLB(4,h,e.itemsPerPage,e.currentPage))))},directives:[o.sg,O.LS],pipes:[O._s],styles:[".pagination[_ngcontent-%COMP%]{display:block;margin:auto;text-align:center;padding:1.5rem 0 3rem}.pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ngx-pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{display:none}"]}),n})();function d(n,e){1&n&&(c.TgZ(0,"div"),c._uU(1,"Searching Movies..."),c.qZA())}function f(n,e){if(1&n&&(c.TgZ(0,"li"),c._uU(1),c.qZA()),2&n){const n=e.$implicit;c.xp6(1),c.AsE("- ",n.Source,": ",n.Value,"")}}function b(n,e){if(1&n&&(c.TgZ(0,"ul",19),c.TgZ(1,"li",20),c.TgZ(2,"h4"),c._uU(3,"Plot"),c.qZA(),c.TgZ(4,"p"),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"li",20),c.TgZ(7,"h4"),c._uU(8,"Actors"),c.qZA(),c.TgZ(9,"p"),c._uU(10),c.qZA(),c.qZA(),c.TgZ(11,"li",20),c.TgZ(12,"h4"),c._uU(13,"Ratings"),c.qZA(),c.TgZ(14,"ul",21),c.YNc(15,f,2,2,"li",22),c.qZA(),c.qZA(),c.qZA()),2&n){const n=c.oxw().$implicit;c.xp6(5),c.Oqu(null==n.MovieData?null:n.MovieData.Plot),c.xp6(5),c.Oqu(null==n.MovieData?null:n.MovieData.Actors),c.xp6(5),c.Q6J("ngForOf",null==n.MovieData?null:n.MovieData.Ratings)}}function x(n,e){if(1&n){const n=c.EpF();c.TgZ(0,"button",23),c.NdJ("click",function(){c.CHM(n);const e=c.oxw(),t=e.$implicit,o=e.index;return c.oxw(2).expandDetails(t.imdbID,o)}),c._uU(1,"Details"),c.qZA()}}function w(n,e){if(1&n){const n=c.EpF();c.TgZ(0,"a",24),c.NdJ("click",function(){c.CHM(n);const e=c.oxw(),t=e.$implicit,o=e.index;return c.oxw(2).expandDetails(t.imdbID,o)}),c._uU(1,"Close"),c.qZA()}}const k=function(n){return{expand:n}};function Z(n,e){if(1&n&&(c.TgZ(0,"li",8),c.TgZ(1,"div",9),c.TgZ(2,"div",10),c._UZ(3,"img",11),c.qZA(),c.TgZ(4,"div",12),c.TgZ(5,"h3",13),c._uU(6),c.qZA(),c.YNc(7,b,16,3,"ul",14),c.TgZ(8,"div",15),c.TgZ(9,"p",16),c._uU(10),c.qZA(),c.YNc(11,x,2,0,"button",17),c.YNc(12,w,2,0,"a",18),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n){const n=e.$implicit;c.Q6J("ngClass",c.VKq(7,k,n.Expand)),c.xp6(3),c.Q6J("src",n.Poster,c.LSH),c.xp6(3),c.Oqu(n.Title),c.xp6(1),c.Q6J("ngIf",n.Expand),c.xp6(3),c.Oqu(n.Year),c.xp6(1),c.Q6J("ngIf",!n.Expand),c.xp6(1),c.Q6J("ngIf",n.Expand)}}function y(n,e){if(1&n&&(c.TgZ(0,"div",4),c.TgZ(1,"p",5),c._uU(2),c.qZA(),c.TgZ(3,"ul",6),c.YNc(4,Z,13,9,"li",7),c.qZA(),c._UZ(5,"app-pagination"),c.qZA()),2&n){const n=c.oxw();c.xp6(2),c.hij("Total Results: ",null==n.moviesList?null:n.moviesList.totalResults," "),c.xp6(2),c.Q6J("ngForOf",null==n.moviesList?null:n.moviesList.Search)}}const A=[{path:"",component:(()=>{class n{constructor(n,e,t,o){this.search=n,this.movie=e,this.pagination=t,this.notify=o,this.isLoading=!1}ngOnInit(){this.searchMovieSubscription=this.search.searchMovie.subscribe(n=>{this.searchString=n,this.searchString?this.getMovieList():this.notify.notifyError({Response:"Fasle",Error:"Search can't be empty. Please try again"})}),this.paginationSubscription=this.pagination.setPaginationIndex.subscribe(n=>{n&&this.getMovieList(n)})}getMovieList(n=1){this.notify.notifyHide(),this.isLoading=!0;let e={movieTitle:this.searchString,page:n};this.currentPage=n,this.movie.getMovieBySearchTerm(e).pipe((0,s.U)(n=>(this.checkResponse(n.Response)&&n.Search.map(n=>{n.Expand=!1,n.MovieData={}}),n))).subscribe({next:n=>{var e;if(this.moviesList=n,this.checkResponse(this.moviesList.Response)){let n=Array.from(Array(parseInt(null===(e=this.moviesList)||void 0===e?void 0:e.totalResults)).keys());this.pagination.getPageData({pageIndex:this.currentPage,collection:n})}else this.notify.notifyError(this.moviesList);this.isLoading=!1},error:n=>{console.log(n)}})}expandDetails(n,e){this.moviesList.Search[e].Expand=!this.moviesList.Search[e].Expand,this.moviesList.Search[e].Expand&&this.getMovieData(n,e)}getMovieData(n,e){this.movie.getMovieData(n).subscribe({next:n=>{this.moviesList.Search[e].MovieData=n},error:n=>{console.log(n)}})}checkResponse(n){return null!=n?JSON.parse(n.toLowerCase()):""}ngOnDestroy(){this.searchMovieSubscription.unsubscribe(),this.paginationSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(r.Q),c.Y36(p),c.Y36(u),c.Y36(M.g))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-search-results-page"]],decls:5,vars:2,consts:[[1,"search-results-page","page","container-fluid"],[1,"search-results-page-inner","container"],[4,"ngIf"],["class","movies-wrapper",4,"ngIf"],[1,"movies-wrapper"],[1,"total-results"],[1,"movies-list"],["class","movie-block",3,"ngClass",4,"ngFor","ngForOf"],[1,"movie-block",3,"ngClass"],[1,"movie-block-inner"],[1,"movie-image"],["alt","",3,"src"],[1,"movie-description"],[1,"movie-title"],["class","movie-expanded-details",4,"ngIf"],[1,"movie-footer-details"],[1,"year"],["class","btn btn-details",3,"click",4,"ngIf"],["href","javascript:void(0)","class","close-item",3,"click",4,"ngIf"],[1,"movie-expanded-details"],[1,"block"],[1,"ratings"],[4,"ngFor","ngForOf"],[1,"btn","btn-details",3,"click"],["href","javascript:void(0)",1,"close-item",3,"click"]],template:function(n,e){1&n&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c._UZ(2,"app-notification"),c.YNc(3,d,2,0,"div",2),c.YNc(4,y,6,2,"div",3),c.qZA(),c.qZA()),2&n&&(c.xp6(3),c.Q6J("ngIf",!e.moviesList&&e.isLoading),c.xp6(1),c.Q6J("ngIf",e.moviesList&&e.checkResponse(null==e.moviesList?null:e.moviesList.Response)))},directives:[_.c,o.O5,o.sg,v,o.mk],styles:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");html[_ngcontent-%COMP%]{font-size:55%}@media screen and (min-width: 768px){html[_ngcontent-%COMP%]{font-size:62.5%}}*[_ngcontent-%COMP%]{padding:0;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-weight:700}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}body[_ngcontent-%COMP%]{font-weight:400}body[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-size:1.5rem}p[_ngcontent-%COMP%]{line-height:1.9rem;margin-bottom:0}button[_ngcontent-%COMP%]{font-weight:400;border:0;outline:0}button[_ngcontent-%COMP%], button.btn[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}button.btn[_ngcontent-%COMP%]{font-weight:700;padding:.9rem 1.6rem;background-color:#307cfb;color:#fff;text-transform:uppercase;font-size:1.2rem;letter-spacing:.01rem;border-radius:.3rem;cursor:pointer}button.btn[_ngcontent-%COMP%]:hover{background-color:#055ef3}.container-fluid[_ngcontent-%COMP%]{width:calc(100% - 3rem);padding:0 1.5rem}.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:114rem;margin:auto}.page[_ngcontent-%COMP%]{padding-top:3rem;padding-bottom:3rem}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   p.total-results[_ngcontent-%COMP%]{margin-bottom:2rem}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -1.5rem;*zoom:1}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]:after, .search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]:before{content:".";display:block;height:0;font-size:0;clear:both;visibility:hidden}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]{flex:0 0 auto;flex-direction:row;padding:0 1.5rem;width:calc(100% - 3rem);list-style:none;height:27.5rem;margin-bottom:1.5rem}@media screen and (min-width: 768px){.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]{width:calc(50% - 3rem);margin-bottom:3rem}}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block.expand[_ngcontent-%COMP%]{flex:0 0 auto;flex-direction:row;padding:0 1.5rem;width:calc(100% - 3rem);height:auto}@media screen and (min-width: 768px){.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block.expand[_ngcontent-%COMP%]{width:calc(100% - 3rem)}}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]{box-shadow:0 1px 10px -1px rgba(50,50,50,.2);display:flex;height:inherit}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]{width:20rem;height:inherit;background-color:#eee;overflow:hidden}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]{width:calc(100% - 19rem);display:flex;flex-direction:column;flex-grow:1;justify-content:space-between}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   h3.movie-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:500;padding:1.5rem 1.5rem 0;font-size:1.6rem}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   ul.movie-expanded-details[_ngcontent-%COMP%]{padding:1.5rem}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   ul.movie-expanded-details[_ngcontent-%COMP%]   li.block[_ngcontent-%COMP%]{margin-bottom:1.5rem;list-style:none}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   ul.movie-expanded-details[_ngcontent-%COMP%]   li.block[_ngcontent-%COMP%]:last-child{margin-bottom:0}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   ul.movie-expanded-details[_ngcontent-%COMP%]   li.block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.3rem;margin-bottom:.5rem;font-family:Roboto,sans-serif;font-weight:400}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   ul.movie-expanded-details[_ngcontent-%COMP%]   li.block[_ngcontent-%COMP%]   ul.ratings[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .movie-footer-details[_ngcontent-%COMP%]{display:flex;padding:1.5rem;border-top:1px solid #ecedee}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .movie-footer-details[_ngcontent-%COMP%]   p.year[_ngcontent-%COMP%]{color:#c3c3c3;margin-right:auto}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .movie-footer-details[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%]{margin-left:auto}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .movie-footer-details[_ngcontent-%COMP%]   a.close-item[_ngcontent-%COMP%]{font-size:1.2rem;color:#c3c3c3}.search-results-page[_ngcontent-%COMP%]   .search-results-page-inner[_ngcontent-%COMP%]   .movies-wrapper[_ngcontent-%COMP%]   ul.movies-list[_ngcontent-%COMP%]   li.movie-block[_ngcontent-%COMP%]   .movie-block-inner[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .movie-footer-details[_ngcontent-%COMP%]   a.close-item[_ngcontent-%COMP%]:hover{color:#9d9d9d}']}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[i.Bz.forChild(A)],i.Bz]}),n})();var T=t(8740);let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({providers:[p],imports:[[o.ez,q,T.m]]}),n})()}}]);