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
        
    }
    
  },
};
</script>

<style scoped></style>
