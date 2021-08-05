<template>

  <Modal>
    <div class="top-modal">
      <div class="block-title">
        <p class="title-modal"><b>Links de Redirecionamento 🌐</b></p>
        <small class="subtitle-modal">Crie seus links de redirect em poucos passos</small>
      </div>
      <button class="button-default btn-create-link">Criar um link</button>
    </div>
    <div class="main-modal">
      <div class="main-block-left">
        <div class="itens-modal">
          <div class="item-modal-head">
            <span>{{data.length==1?data.length+' link': data.length+' links'}}</span>
            <span>Clique em tempo real</span>
          </div>
          <div :class="itemSelected.name == item.name?'item-modal item-modal-active':'item-modal'" v-for="(item, i) in data" @click="selectItem(i)">
            <div class="item-modal-row-1">
              <span class="item-title">{{item.name}} <span class="item-title-date">{{ item.date_create }}</span></span>
            </div>
            <div class="item-modal-row-2">
              <span class="item-link">{{ item.link }}</span>
              <span class="counter">👉 {{item.links_destinations[0].qtd_cliques_feitos}}/{{item.links_destinations[0].qtd_cliques}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-block-right">
        <div class="content-modal-block">
          <div class="content-modal-top">
            <div class="content-modal-title">
                <span>{{ itemSelected.name }}</span>
                <small class="content-modal-subtitle">
                  Criado em: {{ itemSelected.date_create }}
                </small>
            </div>
            <div class="content-modal-link-actions">
              <div class="content-modal-link">
                <span>{{ itemSelected.link }}</span>
              </div>
              <div class="content-modal-actions">
                <button class="button-default">Copiar</button>
                <button class="button-default">Editar</button>
              </div>
            </div>
          </div>
          <div class="content-modal-main">
            <div class="content-modal-main-itens" v-for="(item, i) in itemSelected.links_destinations">
              <div class="content-modal-main-itens-line-one">
                <span>{{i+1}}</span>
                <span>
                  {{ item.link }}
                </span>
                <button class="button-default">Editar</button>
              </div>
              <div class="content-modal-main-itens-line-two">
                <span>{{item.qtd_cliques_feitos}}/{{ item.qtd_cliques }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>


  <Sidebar @dataForSave="setItemSelected($event)"></Sidebar>


  <div class="row">
    <div class="col-md-1">
      <div class="menu">
        <div class="item" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="../assets/gift.svg" alt="">
        </div>

        <div class="item">
          <img src="../assets/academy.svg" alt="">
        </div>

        <div class="item">
          <img src="../assets/trophy.svg" alt="">
        </div>

        <div class="item">
          <img src="../assets/user.svg" alt="">
        </div>

        <div class="item">
          <img src="../assets/messages.svg" alt="">
        </div>

        <div class="item">
          <img src="../assets/logo.svg" alt="">
        </div>
      </div>
    </div>
    <div class="col-md-11">
      <div class="content">
        <h1>Welcome to our system.</h1>
      </div>

    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal"
import {onMounted, ref} from "vue";
import { useStore } from 'vuex'
import Moment from 'moment'
import Sidebar from "../components/Sidebar"

export default {
  name: 'Home',
  components: {
    Modal,
    Sidebar
  },
  setup(){
    const store = useStore();
    const {data} = useStore()._state.data

    const itemSelected = ref(data[0])


    function selectItem(index){
      itemSelected.value = data[index]
    }

    function setItemSelected(data){
      itemSelected.value = data
    }

    return {data,selectItem, itemSelected, setItemSelected}
  }
}
</script>


<style scoped>
.menu{
  height: 100vh;
  border-right: 1px solid #ededf0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu .item{
  margin: 40px;
  cursor:pointer;
}

.menu .item img{
  width: 30px;
}

.menu .item:nth-child(1){
  margin-bottom: 100px;
  cursor:pointer;
}

.menu .item:nth-child(6){
  margin-top: 200px;
  cursor:pointer;
}



.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.top-modal{
  display: flex;
  justify-content: space-between;
}

.title-modal{
  font-weight:bold;
  margin: 0px;
  font-size: 1.2em;
}

.subtitle-modal{
  color:#81858E;
  font-size: 0.8em;
}

.button-default{
  margin-top:10px;
}

.main-modal{
  margin-top: 30px;
  border-top:1px solid #EDEDF0;
  display: flex;
}

.main-block-left{
  border-right:1px solid #EDEDF0;
  width: 40% ;
}

.item-modal-head {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 20px 5px;
  border-bottom: 1px solid #EDEDF0;
}

.item-modal-head span:nth-child(1){
  color:#2133D2;
  font-weight: bold;
}
.item-modal-head span:nth-child(2){
  color:#81858E;
  font-size:0.8em;
}

.item-modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 20px 5px;
  border-bottom: 1px solid #EDEDF0;
}

.item-modal{
  cursor:pointer;

}

.item-modal:hover{
  border-bottom: 1px solid var(--color-primary);
}

.item-modal-active {
  color:var(--color-primary);
  border-bottom: 1px solid  var(--color-primary);

}

.item-modal-row-1 .item-title{
  font-weight: bold;
}

.item-modal .item-modal-row-1 .item-title span{
  font-weight: 500;
  font-size: 0.8em;
  margin-left: 10px;
}

.item-modal .item-modal-row-2{
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  margin-top:5px;
}

.main-block-right{
  padding: 30px;
}

.content-modal-title span{
  font-weight: bold;
  font-size: var(--font-size-default-title);
}

.content-modal-title small{
  font-weight: 500;
  font-size: var(--font-size-default-small);
  color:var(--color-font-sub);
  margin-left: 15px;
}

.content-modal-link-actions{
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom:1px solid var(--color-border-grey);
}

.content-modal-link{
  color: var(--color-primary);
  margin-top: 15px;
}

.content-modal-link-actions{
  display: flex;
}

.content-modal-link-actions button{
  margin-left: 10px;
  font-size: 12px;
  padding: 5px 30px;
}

.content-modal-link-actions button:nth-child(1){
  margin-left: 40px;
}

.content-modal-link-actions button:nth-child(2){
  background-color:white;
  border: 1px solid var(--color-primary)
}

.content-modal-main{
  margin-top: 20px;
}

.content-modal-main-itens{
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}

.content-modal-main-itens-line-one{
  display: flex;
  justify-content: space-between;
  min-width: 540px;
}

.content-modal-main-itens-line-one span:nth-child(1){
  white-space: nowrap;
  color: var(--color-primary);
  font-size: var(--font-size-default-small);
  font-weight: bold;
  margin-top:2px;
}

.content-modal-main-itens-line-one span:nth-child(2){
  margin-left: 20px;
  margin-top: 2px;
  min-width: 72%;
  white-space: nowrap;
  color: var(--color-font-sub);
  font-size: var(--font-size-default-small);
}

.content-modal-main-itens-line-one button{
  margin-top: -5px;
  font-size: 12px;
  padding: 5px 30px;
  background-color: white;
  border: 1px solid var(--color-primary);
  margin-left:10px;
}

.content-modal-main-itens-line-two{
  color:var(--color-primary);
  font-size:var(--font-size-default-small);
  margin-left: 35px;
}

</style>

