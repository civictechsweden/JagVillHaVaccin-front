import{L as e,S as t,R as a,l as n,a as s,b as r,h as o,C as i,c,d,p as l,e as m}from"./index.66f03ae4.js";import"./vendor.1d43dcfd.js";var p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,v=(e,t,a,n)=>{for(var s,r=n>1?void 0:n?h(t,a):t,o=e.length-1;o>=0;o--)(s=e[o])&&(r=(n?s(t,a,r):s(r))||r);return n&&r&&p(t,a,r),r};let u=class extends e{constructor(){super(...arguments),this.recuperationCommunesEnCours=!1,this.statsLieu=void 0}async onSearch(e){const o="chronodose.fr"===window.location.hostname?"chronodose":"standard";if(t.isByDepartement(e.detail)){const t=e.detail.departement;a.navigateToRendezVousAvecDepartement(t.code_departement,n(t),o)}else{const t=e.detail.commune,i=(await s.current.departementsDisponibles()).find((({code_departement:e})=>e===t.codeDepartement));if(!i)return void console.error(`Can't find departement matching code ${t.codeDepartement}`);a.navigateToRendezVousAvecCommune("distance",i.code_departement,n(i),t.code,t.codePostal,r(t),o)}}render(){return o`
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
                <h2 class="text-gray-600 text-center mb-5 h5"><strong>Jag Vill Ha Vaccin!</strong> hämtar vaccinmottagningar från 1177.se och vaccintider från många olika bokningsplattformar<br>
                <strong>OBS!</strong> Tjänsten visar varken alla mottagningar eller alla vaccintider. Den ersätter inte ett manuellt sök.
                </h2>
            </div>

            <slot name="about"></slot>
        `}async connectedCallback(){super.connectedCallback(),this.statsLieu=await s.current.statsLieux()}};u.styles=[i,c,d`
            :host {
                display: block;
            }
        `],v([l({type:Array,attribute:!1})],u.prototype,"recuperationCommunesEnCours",2),v([l({type:Array,attribute:!1})],u.prototype,"statsLieu",2),u=v([m("vmd-home")],u);export{u as VmdHomeView};
