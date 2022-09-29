
# Presentation Card

**Introduccion al proyecto**
--
Esta es una carta de presentacion en la que, valga la rebundancia, me presento a mi mismo, con una foto, mi nombre, una pequeña biografía de mi mismo y un QR que redirecciona a mi perfil de github

 **Organización del proyecto**
--

###### ***Empezando por arriba***

+ Container:
  + TopContainer:
    + Profile Image
    + Name
  + CenterContainer: 
    + Biography
  + BottomContainer:
    + QRcode

Donde:
-

- Top Container: Es donde se muestra la foto de perfil y el nombre

- Center Container: Es donde se muestra la biografia

- Bottom Container: Es donde se muestra el QRcode con el link a mi perfil de github


## Desarrollo
---
Lo primero que hice fue esquematizar el programa, lo vi claro desde un principio, partirlo en tres partes, para poder trabajar en cada una de ellas por separado.

Empecé con la parte de la imagen ya que fue lo que me parecio mas complejo (spoiler, no lo era)  
Aqui el codigo empleado para la imagen:

<pre><code><font color='magenta'>import</font> {... <font color='aqua'>Image</font> ...}<font color='magenta'> from</font><font color='lightgreen'> 'react-native'</font>
<<font color='Orangered'>Image </font>
<font color='yellow'>style</font><font color='orange'> = </font>{<font color='aqua'> styles</font>.<font color='orange'>image </font>}  
<font color='yellow'>source </font><font color='orange'>=</font> {<font color='yellow'> require </font>(<font color='lightgreen'>'./src/images/fotoPerfil.jpg'</font>) }>
<<font color='Orangered'>/ Image</font>>
</code></pre>

Posicionandolos con:
<pre><code>topContainer: <font color='aqua'>{</font>
    flex: <font color='Orange'>1</font>,
    flexDirection: <font color='lightgreen'>'row'</font>,
    alignItems: <font color='lightgreen'>'center'</font>,
    justifyContent: <font color='lightgreen'>'space-evenly'</font>,
    backgroundColor: <font color='lightgreen'>'grey'</font>,
    width: <font color='lightgreen'>'100%'</font>
  <font color='aqua'>}</font>
</code></pre>

Luego de esto, me encargué de la biografía, lo cual era solo un componente `<Text>` y escribir la biografia, esta posicionada con:

<pre><code>centerContainer: <font color='aqua'>{</font>
    flex: <font color='Orange'>2</font>,
    alignItems: <font color='lightgreen'>'center'</font>,
    justifyContent: <font color='lightgreen'>'center'</font>,
    width: <font color='lightgreen'>'95%'</font>
  <font color='aqua'>}</font>
</code></pre>

y por último, tuve que descargar las dependencias:
~~~~
expo add react-native-svg 
expo add react-native-qrcode-svg
~~~~
para poder usar `<QRcode>`

Codigo usado para el QR:

<pre><code><font color='magenta'>import</font> {... <font color='aqua'>QRcode</font> ...}<font color='magenta'> from</font><font color='lightgreen'> 'react-native-qrcode-svg'</font>
<<font color='Orangered'>QRcode </font>
<font color='yellow'>value </font><font color='orange'>= </font><font color='lightgreen'>"https://github.com/kuvii"</font>
      />
</code></pre>

Y con el posicionamiento: 
<pre><code>bottomContainer: <font color='aqua'>{</font>
    flex: <font color='Orange'>1</font>,
    alignItems: <font color='lightgreen'>'center'</font>,
    justifyContent: <font color='lightgreen'>'center'</font>,
    width: <font color='lightgreen'>'100%'</font>
  <font color='aqua'>}</font></code></pre>
___
## Problemas encontrados 

En realidad no tuve muchos, el primer problema que me encontré fue con el de implementar la imagen de forma local, ya que la ruta no la estaba poniendo bien, con un poco de busqueda en la api de react en la seccion de [Images](https://reactnative.dev/docs/images) encontré la solución para este problema.  
El segundo problema vino a la hora de implementar el QRcode, lo cual es lógico ya que es mi primera vez trabajando con estos, encontré la solución en github del creador '[awesomejerry QRcode](https://github.com/awesomejerry/react-native-qrcode-svg#readme)'.

***
## Final y opinión

Y esto es todo por este proyecto, la verdad es que me ha gustado mucho realizarlo (aunque tardé más en hacer el README que el código ^^' ) y espero que a partir de ahora sigamos haciendo más cosas de este estilo.