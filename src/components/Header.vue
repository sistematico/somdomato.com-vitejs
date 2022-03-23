<template>
  <header class="shadow shadow-sm">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #2B2522;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#/" style="margin-top: -2px;">
          <img
            src="/assets/img/logotipo.svg"
            alt="Rádio Som do Mato"
            width="28"
            height="28"
            style="margin: -4px 6px 0 0; padding: 0;"
          />
          <span class="d-none d-sm-none d-md-inline">Rádio&nbsp;</span>Som do Mato
        </a>
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse show" id="navbarCollapse">
          <!-- <ul class="navbar-nav me-auto mb-2 mb-md-0"> -->
          <ul class="d-flex navbar-nav mb-0 mb-md-0">
            <li class="nav-item">
              <a
                href="#/about"
                class="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >Sobre</a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <slot name="title" />
            <slot name="player" />
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>