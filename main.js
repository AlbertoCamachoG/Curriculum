var app = new Vue({
    el: '#ccvv',
    data: {
      sideBar:false,
      sobreMi:'',
      experiencia:'',
      educacion:'',
      skills:'',
      idiomas:'',
      load:false,
      esp:"",
      ing:"",
      cv:true,
      projects:""
      
    },
    mounted()
    {
        //run when instance is created
        setTimeout(this.cargar, 3000);
        this.ajax();
        
    },
    methods: {
        ajax: function() {
            // GET /someUrl
            this.$http.get('ccvv.json').then(response => {
            // get body data
            this.esp = response.body.esp;
            this.ing = response.body.ing;
            if(this.cv){this.maket(this.esp);this.cv=true}else
            {this.maket(this.ing);this.cv=false}
            }, response => {
            // error callback
            });
        },
        maket: function(curriculum){
            this.sobreMi=curriculum.sobreMi;
            this.experiencia=curriculum.experiencia;
            this.educacion=curriculum.educacion;
            this.skills=curriculum.skills;
            this.idiomas=curriculum.idiomas;
            this.projects=curriculum.projects;
        },
        modal: function(project){
            switch(project){
                case "book":
                    var a="<div id='modal'class='w-50 sticky-bottom bg-white text-primary border bottom-50'><p>Name - "+this.projects.ajedrez.maket.name+"</p><p>Url - "+this.projects.ajedrez.maket.url+"</p><p>Description - "+this.projects.ajedrez.maket.description+"</p></div>"
                    $(ccvv).append(a);
                    setTimeout(this.borrar,3000);
                    ;break;
                case "chess":
                    var a="<div id='modal'class='w-50 sticky-bottom bg-white text-primary border bottom-50'><p>Name - "+this.projects.libreria.maket.name+"</p><p>Url - "+this.projects.libreria.maket.url+"</p><p>Description - "+this.projects.libreria.maket.description+"</p></div>"
                    $(ccvv).append(a);
                    setTimeout(this.borrar,3000);
                    ;break;
                case "fate":
                    var a="<div id='modal'class='w-50 sticky-bottom bg-white text-primary border bottom-50'><p>Name - "+this.projects.fate.maket.name+"</p><p>Url - "+this.projects.fate.maket.url+"</p><p>Description - "+this.projects.fate.maket.description+"</p></div>"
                    $(ccvv).append(a);
                    setTimeout(this.borrar,3000);
                    ;break;
                case "pong":
                    var a="<div id='modal'class='w-50 sticky-bottom bg-white text-primary border bottom-50'><p>Name - "+this.projects.pong.maket.name+"</p><p>Url - "+this.projects.pong.maket.url+"</p><p>Description - "+this.projects.pong.maket.description+"</p></div>"
                    $(ccvv).append(a);
                    setTimeout(this.borrar,3000);
                    ;break;
            }
        },
        borrar: function(){
            $("#modal").remove()
        },
        mouseOver: function(){
            this.sideBar=true;
        },
        mouseOut: function(){
            this.sideBar=false;
        },
        cargar: function(){
            window.scrollTo({top:0});
            setTimeout(this.load=true, 3000);
        },
        cambioIdioma: function(){

           if(!this.cv){this.maket(this.esp);this.cv=true}else
           {this.maket(this.ing);this.cv=false}
            
        }
    },
    computed: {

    }
});