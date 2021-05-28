<template>
  <div class="nav-bar">
    <div class="topnav">
      <router-link tag="a" to="/persona">Persona</router-link>
      <a href="empresa.html">Empresa</a>
      <!-- <a href="#nosotros">Nosotros</a> -->
      <div class="dropdown">
        <button onclick="navegar('nosotros')" class="dropbtn">
          Nosotros
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="politica-datos.html">Politica de tratamiento de datos</a>
          <a href="pqrs.html">PRQS</a>
        </div>
      </div>

      <div class="search-container">
        <form action="/action_page.php">
          <button type="submit"><i class="fa fa-search"></i></button>
          <input type="text" placeholder="Buscar..." name="search" />
        </form>
      </div>
    </div>
    <div id="navbar">
      <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
      <span href="javascript:void(0);" class="icon" @click="menuTobble()">
        <i class="fa fa-bars fa-2x"></i>
      </span>
      <span @click="inicio" id="logo"
        >OrizonMobile<br /><span
          style="font-size: 14px; margin-top: -12px; text-align: center"
          id="logo-subtext"
          >The Unlimited Network</span
        ></span
      >
      <div id="navbar-right">
        <a href="internet.html">Internet</a>
        <a href="telefonia.html">Telefonia</a>
        <a href="productos.html">Productos</a>
        <a href="servicios.html">Servicios</a>
        <a href="contactenos.html">Soporte</a>
      </div>
    </div>
     <div id="navbar-mobile">
      <div id="navbar-right-mobile">
        <a href="internet.html">Internet</a>
        <a href="telefonia.html">Telefonia</a>
        <a href="productos.html">Productos</a>
        <a href="servicios.html">Servicios</a>
        <a href="contactenos.html">Soporte</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emit: [],
  setup() {
    function menuTobble() {
      
        var x = document.getElementById("navbar-right");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      
    }

    function inicio(){
      //alert('click')
      //router.push('/')
    }

    return { menuTobble,inicio };
  },
};
</script>

<style lang="less" scoped>
.topnav {
  background-color: #3e606f;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  border-bottom: lightslategrey solid 3px;
}

/* Estilos para los menus del menu superior */

.topnav  router-link a {
  float: left;
  color: white;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Color de los links over sub-menu  */

.topnav a:hover {
  background-color: #d1dbbd;
  color: white;
}

.topnav a.active {
  /* //background-color: rgb(122, 131, 148); */
  color: white;
}

.topnav a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 17px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  cursor: pointer;
}

/*  Estilos para el menu principal*/

#navbar {
  overflow: hidden;
  background-color: #193441;
  padding: 77px 0px 7px 0px;
  font-size: 18px;
  transition: 0.4s;
  width: 100%;
  top: 0px;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #d1dbbd;
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-bottom: solid #3e3e3e 1px;
}

.dropdown-content a:hover {
  background-color: #3e606f;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Estilos de los links del menu principal */

#navbar span,
a {
  float: left;
  color: white;
  text-align: center;
  padding: 12px 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 0px;
}

/* Estilos para el logo */

#navbar #logo {
  font-size: 32px;
  font-weight: bold;
  transition: 0.4s;
  padding-left: 56px;
}

/* Over de los botones al pasar el mouse del menu principal */

#navbar a:hover {
  background-color: rgba(209, 219, 189, 0.8);
  color: white;
  padding: 12px 12px;
}

/* Estilo de los botones menu principal cuando esta activo */

#navbar a.active {
  color: white;
}

/* Estilo para ubicar los links del menu al lado derecho */

#navbar-right {
  float: right;
  padding-right: 45px;
}

#navbar span.icon {
  display: block;
  position: absolute;
  left: 0;
  top: 10px;
  border: none;
}

/* Añadimos css adicional cuando se visualice en mobil o tablet */

@media screen and (max-width: 580px) {
  #navbar a {
    float: none;
    display: block;
    text-align: left;
  }

  #navbar-right {
    float: none;
  }
}

/*  Menu principal */

.topnav .search-container button {
  float: right;
  padding: 6px 6px;
  margin-top: 8px;
  margin-right: 7px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav input[type="text"] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 5px;
  font-size: 17px;
  width: 20%;
}

@media (min-width: 320px) and (max-width: 480px) {
  #navbar {
    flex-direction: column;
    padding: 12px 0px;
    height: 52px;
  }

  #navbar a {
    float: none;
    display: block;
    text-align: center;
    border-top: 1px solid white;
    font-size: 14px;
  }

  #navbar a:hover {
    background-color: rgba(209, 219, 189, 0.8);
    color: white;
    padding: 12px 12px;
  }

  #navbar-right {
    padding-right: 0px;
    width: 100%;
  }

  #navbar:hover {
    display: block;
  }

  #navbar #logo {
    margin: 0px auto;
    text-align: center;
    margin-left: 10%;
  }

  .topnav {
    display: none;
  }
}
</style>
