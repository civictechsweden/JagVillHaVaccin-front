import{L as e,S as t,R as a,l as s,a as n,b as o,h as r,P as i,C as c,c as d,d as l,p as m,e as p}from"./index.fb0a1490.js";import"./vendor.1d43dcfd.js";var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u=(e,t,a,s)=>{for(var n,o=s>1?void 0:s?h(t,a):t,r=e.length-1;r>=0;r--)(n=e[r])&&(o=(s?n(t,a,o):n(o))||o);return s&&o&&v(t,a,o),o};let g=class extends e{constructor(){super(...arguments),this.recuperationCommunesEnCours=!1,this.statsLieu=void 0}async onSearch(e){const r="chronodose.fr"===window.location.hostname?"chronodose":"standard";if(t.isByDepartement(e.detail)){const t=e.detail.departement;a.navigateToRendezVousAvecDepartement(t.code_departement,s(t),r)}else{const t=e.detail.commune,i=(await n.current.departementsDisponibles()).find((({code_departement:e})=>e===t.codeDepartement));if(!i)return void console.error(`Can't find departement matching code ${t.codeDepartement}`);a.navigateToRendezVousAvecCommune("distance",i.code_departement,s(i),t.code,t.codePostal,o(t),r)}}render(){return r`
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
                <h2 class="text-gray-600 text-center mb-5 h5"><strong>Jag Vill Ha Vaccin!</strong> hämtar vaccinmottagningar från 1177.se och vaccintider från MittVaccin.se och Vaccina.se<br>
                <strong>OBS!</strong> Tjänsten är i prototypfas och visar varken alla mottagningar eller alla vaccintider. Den ersätter inte ett manuellt sök.
                </h2>

                <div class="row justify-content-center align-items-center">
                  ${Object.values(i).filter((e=>e.promoted)).map((e=>r`
                        <div class="col-auto">
                          <img class="platforms-logo ${e.styleCode}" src="${a.basePath}assets/images/png/${e.logo}" alt="Créneaux de vaccination ${e.nom}">
                        </div>
                      `))}
                </div>
            </div>

            <slot name="about"></slot>
        `}async connectedCallback(){super.connectedCallback(),this.statsLieu=await n.current.statsLieux()}};g.styles=[c,d,l`
            :host {
                display: block;
            }
        `],u([m({type:Array,attribute:!1})],g.prototype,"recuperationCommunesEnCours",2),u([m({type:Array,attribute:!1})],g.prototype,"statsLieu",2),g=u([p("vmd-home")],g);export{g as VmdHomeView};
