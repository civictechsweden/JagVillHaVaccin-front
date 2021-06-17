import{L as t,S as e,R as a,l as i,a as s,b as r,h as n,C as o,c,d,p as l,e as m}from"./index.7baad340.js";import"./vendor.1d43dcfd.js";var v=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=(t,e,a,i)=>{for(var s,r=i>1?void 0:i?p(e,a):e,n=t.length-1;n>=0;n--)(s=t[n])&&(r=(i?s(e,a,r):s(r))||r);return i&&r&&v(e,a,r),r};let g=class extends t{constructor(){super(...arguments),this.recuperationCommunesEnCours=!1,this.statsLieu=void 0}async onSearch(t){const n="chronodose.fr"===window.location.hostname?"chronodose":"standard";if(e.isByDepartement(t.detail)){const e=t.detail.departement;a.navigateToRendezVousAvecDepartement(e.code_departement,i(e),n)}else{const e=t.detail.commune,o=(await s.current.departementsDisponibles()).find((({code_departement:t})=>t===e.codeDepartement));if(!o)return void console.error(`Can't find departement matching code ${e.codeDepartement}`);a.navigateToRendezVousAvecCommune("distance",o.code_departement,i(o),e.code,e.codePostal,r(e),n)}}render(){return n`
            <div class="searchAppointment">
                <div class="searchAppointment-title h1">
                  <slot name="main-title"></slot>
                </div>

                <div class="searchAppointment-form">
                    <div class="searchAppointmentForm-fields">
                          <vmd-search
                            @on-search="${this.onSearch.bind(this)}"
                          />
                    </div>
                </div>
            </div>

            <div class="platforms mt-5">
                <h2 class="text-gray-600 text-center mb-5 h5"><strong>Jag Vill Ha Vaccin!</strong> sammanställer vaccinationstider från många olika bokningsplattformar för att underlätta för dig som vill hita vaccinationstid.<br>
                <strong>OBS!</strong> Tjänsten visar varken alla mottagningar eller alla vaccintider och korrektheten kan inte garanteras. Du är själv ansvarig för att kontrollera att tiderna finns och att du uppfyller kriterierna innan du bokar. Bokningen sker på mottagningarnas egna plattformar.
                </h2>
            </div>

            <div class="container-xxl">
            <div class="homeCard">
                <div class="p-5 text-dark bg-light homeCard-container mt-5">
                    <div class="row gx-5">
                        <div class="col-24 col-md text-center">
                            <i class="bi vmdicon-building fs-6 text-primary"></i>
                            <a href="" >
                                <div class="h4 mt-4">${this.statsLieu?this.statsLieu.global.disponibles.toLocaleString():""}</div>
                                <p>Mottagningar med lediga tider</p>
                            </a>
                        </div>
                        <div class="col-24 col-md text-center">
                            <i class="bi vmdicon-geo-alt-fill fs-6 text-primary"></i>
                            <a href="" >
                                <div class="h4 mt-4">${this.statsLieu?this.statsLieu.global.total.toLocaleString():""}</div>
                                <p>Mottagningar vars tider visas på jagvillhavaccin.nu</p>
                            </a>
                        </div>
                        <div class="col-24 col-md text-center">
                            <i class="bi vmdicon-check-circle-fill fs-6 text-primary"></i>
                            <a href="" >
                                <div class="h4 mt-4">${this.statsLieu?this.statsLieu.global.creneaux.toLocaleString():""}</div>
                                <p>Lediga vaccinationstider</p>
                            </a>
                          <em style="font-size: 1.3rem">OBS: Siffran för lediga tider visar antalet bokningsbara tider, inte antalet tillgängliga vaccindoser</em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <slot name="about"></slot>
        `}async connectedCallback(){super.connectedCallback(),this.statsLieu=await s.current.statsLieux()}};g.styles=[o,c,d`
            :host {
                display: block;
            }
        `],h([l({type:Array,attribute:!1})],g.prototype,"recuperationCommunesEnCours",2),h([l({type:Array,attribute:!1})],g.prototype,"statsLieu",2),g=h([m("vmd-home")],g);export{g as VmdHomeView};
