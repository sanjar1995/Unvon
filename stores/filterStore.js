import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filterStore', {
  state: () => ({
    selectedfilters: [],
    allFilters: [],
    input: [],
    params:[]
  }),
  actions: {
    setSelectedfilters(data) {
      this.selectedfilters.push(data);
    },
    removeFilter(data,lang) {
      this.selectedfilters = this.selectedfilters.filter(item => item.name[lang] !== data.name[lang]);
    },
    removeAllFilters() {
      this.selectedfilters = [];
      this.input.forEach(item => {
        item.checked = false;
      });
      this.params.forEach(item => {
        item.input.checked = false;
        this.params = [];
      });
    },
    setAllFilters(data) {
      this.allFilters = data;
    },
    setInput(input) {
      this.input.push(input);
    },
    addOrRemoveParams(input, data) {
      if(input.checked){
        let params = {
          input,
          data
        }
        this.params.push(params);
      }else{
        this.params = this.params.filter(item => item.input.checked);
      }
    }
  },
  getters: {
    getCharacteristics(state) {
      return state.allFilters?.characteristics;
    },
    getCategories(state) {
      return state.allFilters?.categories;
    },
    getParams(state) {
      console.log(state.allFilters.characteristics);
      return state.allFilters?.characteristics.map(item => {
        return { 
          ...item, 
          params: { 
            ...item.params, 
            checked: false 
          } 
        };
      });
    }
  },
});