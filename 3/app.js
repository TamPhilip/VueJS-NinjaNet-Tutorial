var app = new Vue({
    el: "#vue-app",
    data: {
        name: "Shawn",
        job: "Ninja"
    },
    methods: {
        greet: function(time){
            
            return 'Good ' + time +"  " +this.name;

        }
    }
});