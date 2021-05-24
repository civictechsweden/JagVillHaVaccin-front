import{L as e,S as t,R as a,l as s,a as o,b as n,h as r,P as c,C as i,c as d,d as l,p as m,e as p}from"./index.32d263ec.js";import"./vendor.1d43dcfd.js";var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u=(e,t,a,s)=>{for(var o,n=s>1?void 0:s?h(t,a):t,r=e.length-1;r>=0;r--)(o=e[r])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&v(t,a,n),n};let f=class extends e{constructor(){super(...arguments),this.recuperationCommunesEnCours=!1,this.statsLieu=void 0}async onSearch(e){const r="chronodose.fr"===window.location.hostname?"chronodose":"standard";if(t.isByDepartement(e.detail)){const t=e.detail.departement;a.navigateToRendezVousAvecDepartement(t.code_departement,s(t),r)}else{const t=e.detail.commune,c=(await o.current.departementsDisponibles()).find((({code_departement:e})=>e===t.codeDepartement));if(!c)return void console.error(`Can't find departement matching code ${t.codeDepartement}`);a.navigateToRendezVousAvecCommune("distance",c.code_departement,s(c),t.code,t.codePostal,n(t),r)}}render(){return r`
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
                <h2 class="text-gray-600 text-center mb-5 h5"><strong>Jag Vill Ha Vaccin</strong> hämtar vaccinsmottagningar från 1177.se och vaccintider från MittVaccin.se och Vaccina.se</h2>

                <div class="row justify-content-center align-items-center">
                  ${Object.values(c).filter((e=>e.promoted)).map((e=>r`
                        <div class="col-auto">
                          <img class="platforms-logo ${e.styleCode}" src="${a.basePath}assets/images/png/${e.logo}" alt="Créneaux de vaccination ${e.nom}">
                        </div>
                      `))}
                </div>
            </div>

            <slot name="about"></slot>
        `}async connectedCallback(){super.connectedCallback(),this.statsLieu=await o.current.statsLieux()}};f.styles=[i,d,l`
            :host {
                display: block;
            }
        `],u([m({type:Array,attribute:!1})],f.prototype,"recuperationCommunesEnCours",2),u([m({type:Array,attribute:!1})],f.prototype,"statsLieu",2),f=u([p("vmd-home")],f);export{f as VmdHomeView};
