<template>
  <div id="grid_comp1" style="background-color: white;">
    <h2>INGRESAR LAS <strong>TAREAS</strong></h2>
    <div class="container">
      <div class="row pt-3">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form id="miFormulario" @submit.prevent="agregar_tarea">
                <div class="form-group">
                  <input type="text" placeholder="Insera una nueva tarea" class="form-control" v-model="tarea.title">
                </div>
                <div class="form-group pt-2">
                  <textarea class="form-control" cols="30" rows="10" placeholder="Insertar  descripción" v-model="tarea.description"></textarea>
                </div>
                <div class="form-group pt-2">
                  <input type="number" class="form-control" placeholder="Horas de duración" v-model="tarea.time">
                </div>
                <template v-if="editar === false">
                  <button class="btn btn-primary">Guardar</button>
                </template>
                <template v-else>
                  <button class="btn btn-primary">actualizar</button>
                </template>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <table class="table table-bordered" v-if="tareas.length > 0">
            <thead>
              <tr>
                <th>Tareas</th>
                <th>Descripción</th>
                <th>Tiempo en horas</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tarea of tareas" :key="tarea.id_todolist">
                <td>{{ tarea.title }}</td>
                <td>{{ tarea.description }}</td>
                <td>{{ tarea.time }}</td>
                <td><button @click="eliminar_tarea(tarea.id_todolist)" class="btn btn-danger">Eliminar</button></td>
                <td><button @click="editar_tarea(tarea.id_todolist)" class="btn btn-info">Editar</button></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Importa Axios

class TAREA {
  constructor(id, title = '', description = '', time = 0) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.time = time;
  }
}

export default {
  setup() {
    let tarea = ref(new TAREA());
    let tareas = ref([]);
    let tareaseleccionada = ref(null);

    const obtener_tarea = () => {
      axios.get('http://localhost:4001/api/list') // Utiliza Axios en lugar de fetch
        .then(response => {
          tareas.value = response.data.body;
          console.log(tareas.value);
        })
        .catch(error => console.error('Error al obtener las tareas:', error));
    };

    onMounted(() => {
      obtener_tarea();
    });

    return {
      tarea,
      tareas,
      editar: false,
      obtener_tarea,
      tareaseleccionada,
    };
  },

  methods: {
    agregar_tarea() {
      if (this.editar) {
        axios.put(`http://localhost:4001/api/list/actualizar/${this.tareaseleccionada.id}`, this.tarea, {
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
        })
          .then(response => {
            this.obtener_tarea();
            this.editar = false;
            this.tareaseleccionada = null;
          })
          .catch(error => console.error('Error al actualizar la tarea:', error));
      } else {
        axios.post('http://localhost:4001/api/list/agregar', this.tarea, {
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
        })
          .then(response => {
            console.log(response.data);
            this.obtener_tarea();
          })
          .catch(error => console.error('Error al agregar la tarea:', error));
      }
      this.tarea = new TAREA();
      this.$nextTick(() => {
        document.getElementById('miFormulario').reset();
      });
    },

    eliminar_tarea(id) {
      axios.delete(`http://localhost:4001/api/list/eliminar/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          this.obtener_tarea();
          alert("Tarea eliminada correctamente");
        })
        .catch(error => console.error('Error al eliminar la tarea:', error));
    },

    editar_tarea(id) {
      axios.get(`http://localhost:4001/api/list/consultar/${id}`)
        .then(response => {
          // Procesar la respuesta exitosa
          this.tareaseleccionada = new TAREA(response.data.id_todolist, response.data.title, response.data.description, response.data.time);
          this.editar = true; 
          this.tarea = this.tareaseleccionada;
        })
        .catch(error => {
          // Procesar el error
          console.error('Error al obtener la tarea para editar:', error);
        });
}
  },
};
</script>


<style>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}



h2 {
  text-align: center;
  background: linear-gradient(60deg, #0069be, #ff8be4f5);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  grid-area: H;
}


/* Estilos adicionales según sea necesario */
.row {
  margin-top: 20px; /* Ajusta el margen superior según sea necesario */
}

.card {
  margin-bottom: 20px; /* Ajusta el margen inferior según sea necesario */
}

</style>
