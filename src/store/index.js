import { createStore } from 'vuex'

export default createStore({
  state: {
    data:[
      {
        "name":"Link Legal",
        "link": "redirect/alfdjkf",
        "date_create": "07/07/2021",
        "links_destinations":[
          {"link":"https://fkfdjs.com/fsdkfkds", "qtd_cliques":250, "qtd_cliques_feitos":10},
          {"link":"https://fkfdjs.com/fsdkfkds", "qtd_cliques":250, "qtd_cliques_feitos":10},
          {"link":"https://fkfdjs.com/fsdkfkds", "qtd_cliques":250, "qtd_cliques_feitos":10}
        ],
        "links_destinations_default": "https://dkfjsdkf.com"
      },
      {
        "name":"Link Legal 2",
        "link": "redirect/alfdjk55f",
        "date_create": "07/08/2021",
        "links_destinations":[
          {"link":"https://fkfdjs.com/fsddddkfkds", "qtd_cliques":250, "qtd_cliques_feitos":12},
          {"link":"https://fkfdjs.com/fddsdkfkds", "qtd_cliques":250, "qtd_cliques_feitos":10},
          {"link":"https://fkfdjs.com/fsddddkfkds", "qtd_cliques":250, "qtd_cliques_feitos":10}
        ],
        "links_destinations_default": "https://dkfjsdkf.com"
      }
    ]
  },
  mutations: {
    addDataMutation(state, data){
      state.data.push(data)
    }
  },
  actions: {
    addDataAction ({commit}, data) {
      commit('addDataMutation', data)
    }
  },
  modules: {
  }
})
