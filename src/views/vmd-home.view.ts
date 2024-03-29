import {css, customElement, html, LitElement, property } from 'lit-element';
import {Router} from "../routing/Router";
import {
    libelleUrlPathDeCommune,
    libelleUrlPathDuDepartement,
    SearchType,
    SearchRequest,
    State,
    StatsLieu, Departement,
} from "../state/State";
import {CSS_Global, CSS_Home} from "../styles/ConstructibleStyleSheets";

@customElement('vmd-home')
export class VmdHomeView extends LitElement {

    //language=css
    static styles = [
        CSS_Global,
        CSS_Home,
        css`
            :host {
                display: block;
            }
        `
    ];

    @property({type: Array, attribute: false}) recuperationCommunesEnCours: boolean = false;
    @property({type: Array, attribute: false}) statsLieu: StatsLieu|undefined = undefined;

    private async onSearch (event: CustomEvent<SearchRequest>) {
      const searchType: SearchType = window.location.hostname === 'chronodose.fr' ? 'chronodose':'standard';
      if (SearchRequest.isByDepartement(event.detail)) {
        const departement = event.detail.departement
        Router.navigateToRendezVousAvecDepartement(departement.code_departement, libelleUrlPathDuDepartement(departement), searchType)
      } else {
        const commune = event.detail.commune;
        const departements = await State.current.departementsDisponibles();
        const departement: Departement|undefined = departements.find(({ code_departement }) => code_departement === commune.codeDepartement);

        if (!departement) {
            console.error(`Can't find departement matching code ${commune.codeDepartement}`)
            return;
        }

        Router.navigateToRendezVousAvecCommune(
            'distance',
            departement.code_departement,
            libelleUrlPathDuDepartement(departement),
            commune.code,
            commune.codePostal,
            libelleUrlPathDeCommune(commune!),
            searchType
        );
      }
    }

    render() {
        return html`
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
                <h2 class="text-black-600 text-center mb-5 h1"><strong>⚠️ OBS: Den här webbsidan är arkiverad och visar inte längre uppdaterad information. 💀</strong>
                </h2>
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
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.statsLieu = await State.current.statsLieux()
    }
}
