(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33801431"],{"8dab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("h1",{staticClass:"pageTitle"},[t._v(t._s(this.pageTitle))])]),a("el-col",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"this.loading"}],attrs:{id:"listData",xs:24,sm:24,md:24,lg:24,xl:24}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-popconfirm",{attrs:{confirmButtonText:"Excluir",cancelButtonText:"Cancelar",title:"Você tem certeza que deseja excluir os contatos selecionados?"},on:{onConfirm:function(e){return t.deleteDataModule()}}},[a("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v("Excluir")])],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange,"row-click":t.linkRowTable}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"cf_nome",label:"Nome"}}),a("el-table-column",{attrs:{prop:"cf_email",label:"E-mail"}}),a("el-table-column",{attrs:{prop:"cf_fone",label:"Telefone"}}),a("el-table-column",{attrs:{width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:t.linkToView(e.row.id)}},[a("el-button",{attrs:{size:"small"}},[a("i",{staticClass:"el-icon-right"})])],1)]}}])})],1)],1)],1),a("el-row",{attrs:{id:"paginationList"}},[this.pagination()?a("el-col",{attrs:{span:24}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3,"page-size":this.pageSize,"current-page":this.currentPage}})],1):t._e()],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}})],1)],1)},l=[],o={name:"Contatos",data:function(){return{pageSize:0,pages:0,currentPage:0,countTotalContatos:0,pageTitle:"Contatos",loading:!0,tableData:[],multipleSelection:[]}},head:{title:{inner:"Contatos",complement:"GuiaSales"}},methods:{linkToView:function(t){return"/dashboard/contacts/"+t},handleSelectionChange:function(t){this.multipleSelection=t},linkRowTable:function(t){this.$router.push({name:"Contact_View",params:{id:t.id}})},pagination:function(){return this.pages>1},loadData:function(){var t=this;this.$http.get("/module/contacts/view?fields=cf_nome,cf_sobrenome,cf_email,cf_fone").then((function(e){t.loading=!1,t.tableData=e.data.data,t.pages=e.data.meta.total_pages,t.currentPage=e.data.meta.page,t.pageSize=e.data.meta.per_page,t.countTotalContatos=e.data.meta.total_leads})).catch((function(e){t.loading=!1}))},deleteDataModule:function(){var t=this;if(0==this.multipleSelection.length)return this.$message({message:"Selecione ao menos 1 registro",type:"warning"}),!1;this.$http.post("/module/contacts/bulk",this.multipleSelection).then((function(e){t.loadData(),t.$notify.success({title:"Sucesso"})})).catch((function(e){t.$notify.error({title:"Houve um erro ao deletar"})}))}},mounted:function(){this.loadData()}},i=o,s=(a("b9ba"),a("2877")),c=Object(s["a"])(i,n,l,!1,null,null,null);e["default"]=c.exports},b9ba:function(t,e,a){"use strict";var n=a("f397"),l=a.n(n);l.a},f397:function(t,e,a){}}]);
//# sourceMappingURL=chunk-33801431.751edb14.js.map