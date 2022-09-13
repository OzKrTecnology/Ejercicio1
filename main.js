var app = new Vue({
  el: "#app",
  data: {
    precio: "",
    error: false,
    cantidad: "",
    rta: 0,
    contador: 0,
    opcion: null,
    color: "Vacio",
    index: "",
    msj: "No hay function ",
    frutas: [
      { nombre: "Manzana", precio: 1700, cantidad: 100 },
      { nombre: "Pera", precio: 1300, cantidad: 50 },
      { nombre: "Mandarina", precio: 300, cantidad: 40 },
    ],
    arrayFrutas: [],
  },
  methods: {
    agregarDatos(index) {
      this.getErrores();
      this.arrayFrutas.push({
        nombre: this.opcion,
        precio: this.precio,
        cantidad: this.cantidad,
        total: this.precio * this.cantidad,
      });
    },
    getErrores(){
      if(this.precio==''){
        this.error=true;
      }else{
        this.error=false;
      }
    },
    getIndex(evt) {
      this.index = evt.target.selectedIndex;
      alert(this.index);
    },
    deleteListItem(){
      this.frutas.splice(this.index, 1);
    },
    addListItem(){
      this.frutas2.push(this.opcion);
    },
    verDatos(data, index) {
      this.arrayFrutas.splice(index, 1);
      alert(data.nombre + "  index " + index);
    },
  },
  computed: {
    totalItems() {
      let total = 0;
      for (let i = 0; i < this.arrayFrutas.length; i++) {
        total += this.arrayFrutas[i].total;
      }
      return total;
    },
  },
});
