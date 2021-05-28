<template>
  <div>
    <section>
      <div>
        <h1 class="title-price">Internet para todos</h1>
        <hr style="width: 34%" />
        <p style="text-align: center">A la medida de su presupuesto</p>
        <br />
      </div>
      <div class="container-tableprice">
        <div class="columns-tablePrice">
          <ul class="priceTable">
            <li class="header">Plan Basico</li>
            <li class="grey">120.000 Cop / año</li>
            <li>10GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>1GB Bandwidth</li>
            <li class="grey">
              <a
                href="#"
                class="button-tablePrice"
                onclick="iraCotizarInternet('basico')"
                >Cotizar</a
              >
            </li>
          </ul>
        </div>

        <div class="columns-tablePrice">
          <ul class="priceTable">
            <li class="header" style="background-color: #3e606f">
              Plan familiar
            </li>
            <li class="grey">400.000 Cop/ año</li>
            <li>25GB Storage</li>
            <li>25 Emails</li>
            <li>25 Domains</li>
            <li>2GB Bandwidth</li>
            <li class="grey">
              <a
                href="#"
                class="button-tablePrice"
                onclick="iraCotizarInternet('familiar')"
                >Cotizar</a
              >
            </li>
          </ul>
        </div>

        <div class="columns-tablePrice">
          <ul class="priceTable">
            <li class="header">Plan premium</li>
            <li class="grey">800.000 Cop / año</li>
            <li>50GB Storage</li>
            <li>50 Emails</li>
            <li>50 Domains</li>
            <li>5GB Bandwidth</li>
            <li class="grey">
              <a
                href="#"
                class="button-tablePrice"
                onclick="iraCotizarInternet('premium')"
                >Cotizar</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less">
/* Tabla de precios de los productos */
.container-tableprice {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}

.title-price {
  font-size: 32px;
  text-align: center;
}

.columns-tablePrice {
  float: left;
  width: 100%;
  padding: 8px 64px 23px 64px;
  position: relative;
}

.priceTable {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.priceTable:hover {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
}

.priceTable .header {
  background-color: #193441;
  color: white;
  font-size: 25px;
}

.priceTable li {
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.priceTable .grey {
  background-color: #eee;
  font-size: 20px;
}

.button-tablePrice {
  background-color: #91aa9d;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  margin: 0px auto;
  float: inherit;
  cursor: pointer;
}

.button-tablePrice:hover {
  background-color: #193441;
}

@media (min-width: 320px) and (max-width: 480px) {
  .container-tableprice {
    flex-direction: column;
  }

  .columns-tablePrice {
    width: 89% !important;
    flex: 0 1 auto;
    align-self: auto;
  }
}
</style>