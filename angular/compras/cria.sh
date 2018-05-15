#!/bin/bash
ng g module produtos --routing
ng g module listas --routing
ng generate component listas/crud
ng generate component produtos/crud

ng generate service produtos/produtos
ng generate component produtos/edita
ng generate component produtos/lista

ng generate service listas/listas
ng generate component listas/lista
ng generate component listas/edita

