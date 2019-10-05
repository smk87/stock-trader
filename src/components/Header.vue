<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link activeClass="active" to="/">Stock Trader</router-link>
    </li>
    <!-- <li class="nav-item dropdown"></li>
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        >Dropdown</a
      >
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Save Data</a>
        <a class="dropdown-item" href="#">Load Data</a>
      </div>
    </li> -->
    <li class="nav-item">
      <router-link to="/portfolio" activeClass="active">Portfolio</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/stocks" activeClass="active">Stocks</router-link>
    </li>
  </ul>
</template>