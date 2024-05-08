<template>
  <div id= "grid_inicio">
      <h2 id="h2">Ten un orden en tu vida</h2>        
      <br><br>
      <div class="card" style="width: 18rem;">
        <img src="../assets/todolist.svg" class="card-img-top" alt="todolist">
      <div class="card-body">
    <p class="card-text">
Una "to-do list" es una herramienta eficaz que organiza y gestiona actividades diarias. Es una lista que enumera tareas a realizar en un periodo específico, sirviendo para gestionar asuntos personales, profesionales o ambos.</p>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
        <img src="../assets/todo.svg" class="card-img-top" alt="todolist">
      <div class="card-body">
    <p class="card-text">¡Hora de poner manos a la obra! Echa un vistazo a tus pendientes y comienza.</p>
    </div>
  </div>  
</div>
</template>

<script>

export default {
  
  components: {
  },

};
</script>

<style>

* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#grid_inicio { 
    background-color: rgb(253, 253, 253);
    display: grid;
    align-items: left;
    grid-template-columns: repeat(3, 25%);
    grid-template-rows: repeat(2, auto);

    grid-template-areas:    "H  H   H"                             
                            "c1 c c2";  
  }
#h2 {
  font-size: 25pt;
  text-align: center;
  font-weight: bolder;
  grid-area: H; 
  margin-bottom: 10px;

}

.card{
  align-items: center;
}

.card:nth-child(1){
  grid-area: c1;
}

.card:nth-child(2){
  grid-area: c2;
}

@media (max-width: 768px) {
  #grid_inicio {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>