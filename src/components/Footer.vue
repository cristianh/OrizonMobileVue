<template>
  <footer>
    <div class="footer-container">
      <div class="columns-left">
        <div>
          <h2><b>Lo que tenemos para ti</b></h2>
        </div>
        <div class="links">
          <ul class="menu-footer">
            <li><a href="internet.html">Internet</a></li>
            <li><a href="telefonia.html">Telefonia</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="soporte.html">Soporte</a></li>
          </ul>
        </div>
      </div>
      <div class="columns-middle">
        <div>
          <h2><b>Nosotros</b></h2>

          <div>
            <ul class="menu-footer">
              <li><a href="empresa.html">Empresa</a></li>
              <li><a href="persona.html">Persona</a></li>
            </ul>
          </div>

          <h2><b>Servicios</b></h2>
          <div>
            <ul class="menu-footer">
              <li><a href="empresa.html">Empresa</a></li>
              <li><a href="persona.html">Persona</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="columns-right">
        <div class="icons">
          <div><i class="fa fa-facebook fa-3x"></i></div>
          <div><i class="fa fa-twitter fa-3x"></i></div>
          <div><i class="fa fa-instagram fa-3x"></i></div>
        </div>
        <div class="container-form">
          <h2><b>Escribenos:</b></h2>
          <form id="form-newsletter" action="/action_page.php">
            <div>
              <input
                type="text"
                placeholder="Email address"
                name="mail"
                required
              />
            </div>

            <div class="container">
              <input type="submit" value="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="less">
.footer-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: flex-start;
  background: rgba(62, 96, 111, 1);
  color: white;
  padding-top: 23px;
  border-top: solid #d1dbbd 9px;
  border-bottom: solid #fcfff5 5px;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-basis: 100%;
  flex-wrap: nowrap;
  width: 100%;
}

.footer ul {
  list-style: none;
  flex-shrink: 3;
}

.menu-footer li {
  list-style-type: none;
  list-style-position: inherit;
  padding: 9px;
}

.menu-footer li a {
  text-align: left;
  color: white;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
}

.columns-left,
.columns-middle,
.columns-right {
  width: 100%;
  height: max-content;
  max-height: max-content;
}

.container-form h2 {
  text-align: left;
  margin-left: 15px;
}
.container-form input[type="submit"] {
  background-color: #d1dbbd;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.container-form input[type="submit"]:hover {
  background-color: #91aa9d;
}

.container-form #form {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

#form-newsletter {
  font-family: Arial;
}

#form-newsletter input[type="text"],
input[type="submit"] {
  width: 90%;
  padding: 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

@media (min-width: 320px) and (max-width: 480px) {
  .footer-container {
    flex-direction: column;
  }

  .footer-container .menu-footer {
    padding: 9px 33px !important;
  }

  .footer-container .menu-footer li {
    border-bottom: 1px solid white;
    width: 90%;
    margin-bottom: 13px;
  }

  .footer-container {
    overflow: hidden;
  }

  .icons {
    margin-top: 20px;
  }

  .columns-right {
    order: -1;
  }
}
</style>
