<template>
  <div style="overflow-y: auto" class="sidebar">
    <div class="sidebar-bar-top">
        <span style="font-weight: bold;">
          Criação de Link
        </span>
      <span class="close-sidebar" style="cursor:pointer;">
          <i class="bi bi-x-lg"></i>
        </span>
    </div>
    <div class="sidebar-main">
      <form @submit.prevent="saveData($event)">
        <div class="mb-3">
          <label for="title-link" class="form-label">Título do link</label>
          <input required name="name" type="text" class="form-control" id="title-link">
        </div>
        <div class="mb-3">
          <label style="color:var(--color-primary);" class="form-label mt-5">URL original</label>
          <div class="form-text">Você poderá inserir uma ou várias URL’s, faça como desejar. Lembre-se de inserir a quantidade de cliques junto à URL.</div>
        </div>

        <div class="mb-3" v-for="(item, i) in qtd_links_destination" style="display: flex;">
          <label for="url-original" class="form-label" style="width: 5%;">{{i+1}}</label>
          <input required :name="'link'+(i+1)" type="text" class="form-control" placeholder="Insira a URL original" id="url-original" style="width: 70%; margin-left: 10px;">
          <span style="width: 5%;"></span>
          <input required :name="'qtd_clicks'+(i+1)" type="number" class="form-control" placeholder="qtd cliques" style="width: 20%;margin-right: 10px;">
        </div>


        <button class="button-default" @click.prevent="addQtd_links_destination()" style="background-color: white; border: 1px solid var(--color-primary);">
          <i class="bi bi-plus-lg"></i>  Adicionar mais URL
        </button>


        <div class="mb-3">
          <label style="color:var(--color-primary);" class="form-label mt-5">URL Default</label>
          <div class="form-text">Essa URL será associada ao redirecionamento apenas quando todas as outras chegarem ao limite de cliques. Ela será a uma url fixa sem limitação.</div>
          <input required name="url_default" type="text" class="form-control mt-3" placeholder="Insira a URL Default" id="">
        </div>

        <div class="mt-5 mb-3" style="display: flex; justify-content: space-between;">
          <span></span>
          <button type="submit" class="button-default btn-default-submit">Salvar Link 💪</button>
          <button type="reset" class="reset-form" style="display:none;">reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

.sidebar{
  height: 100vh;
  width: 35vw;
  background-color: white;
  z-index: 99;
  position: fixed;
  right: -35vw;
  border-left: var(--color-border-grey);
  transition: all 100ms;
}

.sidebar-bar-top{
  width: 100%;
  background-color: black;
  color:white;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

label{
  margin-bottom: 5px;
  font-weight: bold;
}

.sidebar-main{
  padding: 40px;
}

.form-control{
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
}

.form-control:focus{
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe00;
  border-bottom: 1px solid var(--color-primary);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253/0%);
}

.btn-default-submit{
  background-color: var(--color-primary);
  color: white;
  height: 60px;
  font-size: 1.1em;
}

</style>

<script>
import {onMounted, ref} from "vue";
import Moment from "moment";
import {useStore} from "vuex";

  export default {
    setup(props, {emit}){
      const store = useStore();

      const qtd_links_destination = ref(1)

      function generateString(){
        return  (Math.random() + 1).toString(36).substring(7);
      }

      function addQtd_links_destination(){
        qtd_links_destination.value++
      }

      function saveData(event){
        let dataForSave = {}
        dataForSave.name = event.target.name.value
        dataForSave.link = 'https://redirect/'+generateString()
        dataForSave.date_create = Moment(new Date()).format("DD/MM/YYYY")
        dataForSave.links_destinations = []
        dataForSave.links_destinations_default = event.target.url_default.value
        for (let i = 1; i <= qtd_links_destination.value; i++){
          dataForSave.links_destinations.push({link:event.target['link'+i].value, qtd_cliques:event.target['qtd_clicks'+i].value, qtd_cliques_feitos:0})
        }
        store.dispatch('addDataAction', dataForSave)
        document.querySelector(".close-sidebar").click()
        document.querySelector(".reset-form").click()
        emit('dataForSave', dataForSave)
        //itemSelected.value = dataForSave
        qtd_links_destination.value = 1

      }


      onMounted(()=>{
        document.querySelector(".btn-create-link").addEventListener('click', ()=>{
          document.querySelector(".sidebar").style = "right:0;"
          document.querySelector(".modal-backdrop").style = "z-index: 98 !important;"
          document.querySelector(".modal").setAttribute('tabindex', null)
        })
        document.querySelector(".close-sidebar").addEventListener('click', ()=>{
          document.querySelector(".sidebar").style = "right:-35vw;"
          document.querySelector(".modal-backdrop").style = ""
          document.querySelector(".modal").setAttribute('tabindex', "-1")
        })
      })

      return {saveData, addQtd_links_destination, qtd_links_destination}
    }
  }
</script>