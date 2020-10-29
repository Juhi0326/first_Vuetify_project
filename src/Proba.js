import Registration2 from "../src/views/Registration2.vue";
export default {
  components: {
    Registration2,
  },

  kiir(data) {
      if (data) {
        return `ezt kívülről írtam ki, a Proba nevű js file-ból, és ez a first name ${data}`;
      } else {
          return "nincs adat"
      }
      
    
  },
};
