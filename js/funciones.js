/*********************************************************************/
/*  Web del Romanticismo  - funciones de js para snippets            */
/*  CSS de Autores románticos                                        */
/*  Autora: Pilar González Augusto                                   */
/*  versión 1.0                                                      */
/*********************************************************************/

/* FUNCIÓN PARA BARRA DE NAVEGACIÓN (W3SCHOOLS) ****************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 