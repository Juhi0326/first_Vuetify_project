<template>
    <div>
        <!-- <input class="red" type="text" :value="value" @input="updateValue($event.target.value)"> -->
        <v-text-field type="text" :value="valuee" @input="updateValue($event)">

        </v-text-field>
    
    </div>
    
</template>

<script>
    export default {
        props: ["valuee"],
        methods: {
            updateValue(value) {
                this.$emit("input", value)
            }
        }
        
    }

</script>

<style scoped>
input {
    background-color: crimson;
}
</style>