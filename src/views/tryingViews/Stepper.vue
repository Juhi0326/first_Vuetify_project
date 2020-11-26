<template>
  <v-container>
    <v-stepper v-model="stepper" vertical>
      <StepperStep propStep="1" propCompleteNumber="1" v-model="stepper">
        First Step
        <small>Summarize if needed from parent</small>
      </StepperStep>

      <StepperContent
        v-model="stepper"
        propStep="1"
        @step="leptet()"
        @start="start()"
      />
      <StepperStep propStep="2" propCompleteNumber="2" v-model="stepper">
        second Step
      </StepperStep>
      <StepperContent
        v-model="stepper"
        propStep="2"
        @step="leptet()"
        @start="start()"
      />
      <StepperStep propStep="3" propCompleteNumber="3" v-model="stepper">
        third Step
      </StepperStep>
      <StepperContent
        v-model="stepper"
        propStep="3"
        @step="leptet()"
        @start="start()"
      />

      <StepperStep propStep="4" propCompleteNumber="4" v-model="stepper">
        4th step, View setup instructions
      </StepperStep>

      <StepperContent
        v-model="stepper"
        propStep="4"
        @save="save()"
        @start="start()"
        save="true"
      />
    </v-stepper>
  </v-container>
</template>

<script>
import StepperStep from "../../components/trying/StepperStep";
import StepperContent from "../../components/trying/StepperContent";
export default {
  components: {
    StepperStep,
    StepperContent,
  },
  data() {
    return {
      stepper: 1,
    };
  },
  methods: {
    leptet() {
      this.stepper++;
    },
    start() {
      this.stepper = 1;
    },
    save() {
      console.log("save method fired!");
    },
    asyncMethod() {
      /*  const getTodos = (resource) => {
          return new Promise((resolve, reject)=>{

            const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
          // console.log(request, request.readyState);

          if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve(data);
          } else if (request.readyState === 4) {
            reject('error getting')
          }
        });
        request.open("GET", resource);
        request.send();
          })
      };

      getTodos('https://jsonplaceholder.typicode.com/todos/1').then((data)=> {
        console.log('promise 1 resolved', data);
        return getTodos('https://jsonplaceholder.typicode.com/todos/2');
      }).then(data=> {
        console.log('promise 2 resolved', data);
        return getTodos('https://jsonplaceholder.typicode.com/todos/3');
      }).then(data=>{
        console.log('promise 3 resolved', data);
      }).catch(err=>{
        console.log(err);
      }) */

      /*  old callback technic:
      #############################################################################################
      getTodos("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
        console.log("callback fired!", data);
        getTodos(
          "https://jsonplaceholder.typicode.com/todos/2",
          (err, data) => {
            console.log("callback fired!", data);
          }
        );
      });

      Promise:
      #################################################################################################
      const getSomething = ()=> {

        return new Promise((resolve, reject)=>{
          //fetch something
            resolve("some data");
            reject('some error');
        });
      }

      getSomething().then(data=> {
          console.log(data);
      }).catch(err=>{
        console.log(err);
      }) */
      console.log(1);
      console.log(2);

      //fetxh API with Promise
      //######################################################################################
      /*       fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
        return response.json();
      }).then(data=>{
        console.log(data);
      })
      .catch((err)=>{
        console.log('rejected', err);
      }) */

      //async & await

      const getTodos = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        if (response.status !== 200) {
          throw new Error('cannot fetch data');
        }
        const data = await response.json();
        return data;
      };

      getTodos()
        .then((data) => console.log("resolved", data))
        .catch((err) => console.log("rejected", err.message));

      console.log(3);
      console.log(4);
    },
  },
  created() {
    this.asyncMethod();
  },
};
</script>

<style scoped></style>
