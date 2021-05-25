import {css, customElement, html, LitElement, property } from 'lit-element';
import {Router} from "../routing/Router";
import {
    libelleUrlPathDeCommune,
    libelleUrlPathDuDepartement,
    PLATEFORMES, SearchType,
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
                <h2 class="text-gray-600 text-center mb-5 h5"><strong>Jag Vill Ha Vaccin!</strong> hämtar vaccinsmottagningar från 1177.se och vaccintider från MittVaccin.se och Vaccina.se<br>
                <strong>OBS!</strong> Tjänsten är if prototypfas och visar varken alla mottagningar eller alla vaccintider. Den ersätter inte ett manuellt sök.
                </h2>

                <div class="row justify-content-center align-items-center">
                  ${Object.values(PLATEFORMES).filter(p => p.promoted).map(plateforme => {
                      return html`
                        <div class="col-auto">
                          <img class="platforms-logo ${plateforme.styleCode}" src="${Router.basePath}assets/images/png/${plateforme.logo}" alt="Créneaux de vaccination ${plateforme.nom}">
                        </div>
                      `
                  })}
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
