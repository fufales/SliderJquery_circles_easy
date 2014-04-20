Slider jQuery facil de usar
===========================

Simple Slider HTML5 con jQuery y un controlador básico en HTML5/CSS3/JS.

<a href="http://jsfiddle.net/JnDBL/" target="_new">
DEMO ONLINE
</a>

Como usarlo?
============
- <b>HTML Slides</b>

Lo importante en el HTML son las siguientes lineas:

    <div class="active cn_slid" id="cont_1">
        /*Cualquier contenido*/
    </div>

En en esos divs podemos ver el id llamado <code>#cont_1</code>, el cual se está usando como valor para el jQuery por medio del HTML <b>data</b>.

<br>
- <b>HTML Controles</b>

Lo más importante en cuanto a los controles es lo siguiente:

    data-targetslid="cont_1"

Cambiando el atrivuto <code>cont_1</code> podemos mostrar u ocultar el div deceado con el mismo ID al hacer click en el controlador o boton especifico.

Como crear nuevo slide?
=======================

- <b>Podemos crear otro Div</b>:
Lo importante es crear el div dentro de <code>#con_slider .wrapper</code>.

Un nuevo div se vería algo así

        <div class="active cn_slid" id="cont_4">
            <!--Contenido del slide numero 4-->
        </div>
        
- <b>Y creamos un nuevo boton para el div creado</b>:
Creamos un nuevo boton para poder controlar el div añadido, el cual se vería de la siguiente forma:

        <span data-targetslid="cont_4"></span>

Se ouede notar que lo unico que le debemos cambiar es el atrivuto <code>data-targetslid="cont_4"</code> por el ID del div que acabamos de crear.

Y listo, luego podemos cambiar el CSS y ponerle los estilos que queramos.

<i>
Klooid.com | El codigo entregado acá es completamente libre de uso.
<br>
Christopher Quiros S.
</i>
