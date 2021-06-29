import React from 'react';
import {Link} from 'react-router-dom'

import styles from './css/estilos.module.css' 

export const Inicio = () => (
            <div>
              <div className={styles.banner}>
                <img src="img/colita1.jpg"  title />
                <div className={styles.contenedor}>
                  <h1 className={styles.banner__titulo}>Colitas Felices</h1>
                  <p className={styles.banner__txt}>Cambiando la vida a colitas sin hogar</p>
                </div>
              </div>
              <main className={styles.main}>
                <section className={styles.info}>
                  <div className={styles.contenedor}>
                    <article className={styles.info__columna}>
                      <img src="img/Adop1.jpg" alt="" className={styles.info__img} />
                      <h2 className={styles.info__titulo}>Paco</h2>
                      <p className={styles.info__txt}> Cariñoso y juguetón.Encontrado el 12 de septiembre del 2020.
                        Busca Familia que lo cuide y le de el amor que merece. </p>
                    </article>
                    <article className={styles.info__columna}>
                      <img src="img/gatito.jpg" alt="" className={styles.info__img} />
                      <h2 className={styles.info__titulo}>Mila</h2>
                      <p className={styles.info__txt}>Tierna y Timida.Encontrada el 11 de julio del 2020.
                        Busca Familia que lo cuide y le de el amor que merece.</p>
                    </article>
                    <article className={styles.info__columna}>
                      <img src="img/perritos.jpg" alt="" className={styles.info__img} />
                      <h2 className={styles.info__titulo}>Luka y Fifi </h2>
                      <p className={styles.info__txt}>Cariñosos y traviesos.Encontrados el 12 de septiembre del 2020.
                        Busca Familia que lo cuide y le de el amor que merece.</p>
                    </article>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </section>
                <section className={styles.p}>
                  <div className={styles.contenedor}>
                    <h2 className={styles.p__titulo}>Colitas felices adoptadas</h2>
                    <p className={styles.p__txt}> Muchas colitas estan felices de tener una nueva familia, tu como muchas otras familias pueden cambiarle la vida a una colita</p>
                    <div className={styles.p__columna}>
                      <img src="img/nina1.jpg" alt="" className={styles.p__img} />
                      <h3>Miska</h3> <br />
                    </div>
                    <div className={styles.p__columna}>
                      <img src="img/Gina.jpg" alt="" className={styles.p__img} />
                      <h3>Milo</h3> <br />
                    </div>
                    <div className={styles.p__columna}>
                      <img src="img/CatDog.jpg" alt="" className={styles.p__img} />
                      <h3>Kally y Gustavo</h3>
                    </div>
                    <div className={styles.p__columna}>
                      <img src="img/husky.jpg" alt="" className={styles.p__img} />
                      <h3>Willy</h3>
                    </div>
                  </div></section>
                <section className={styles.p1}>
                  <div className={styles.contenedor1}>
                    <h2 className={styles.p1__titulo}> Proximos Eventos </h2>
                    <div className={styles.peliculas_recomendadas} ClassName={styles.contenedor}>
                      <div className={styles.contenedor_principal}>
                        <button role="button" id="flecha-izquierda" className={styles.flecha_izquierda}><i className="fas fa-angle-left" /></button>
                        <div className={styles.contenedor_carousel}>
                          <div className={styles.carousel}>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Halloween.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Navidad.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Mexico.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Pascua.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Tierra.png" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Reyes.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Carnaval.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Ani.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Halloween.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Navidad.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Mexico.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Pascua.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Tierra.png" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Reyes.jpg" alt="" /></a>
                            </div>
                            <div className={styles.pelicula}>
                              <a href="EventosC.html"><img src="img/Carnaval.jpg" alt="" /></a>
                            </div>
                          </div>
                        </div>
                        <button role="button" id="flecha-derecha" className={styles.flechaderecha}><i className="fas fa-angle-right" /></button>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </section>
              </main></div>
)