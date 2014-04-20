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
