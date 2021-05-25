import{L as e,h as r,C as t,d as s,e as o}from"./index.31c4ccad.js";import"./vendor.1d43dcfd.js";var a=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let d=class extends e{render(){return r`
            <slot name="chronodose"></slot>

            <div class="homeCard-actions">
                <div class="row justify-content-center justify-content-lg-start mt-5">
                    <a href="https://vitemadose.covidtracker.fr/" target="_blank" rel="noreferrer" class="col-auto btn btn-primary btn-lg">
                        Accéder à Vite Ma Dose&nbsp;<i class="bi vmdicon-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        `}};d.styles=[t,s`
            :host {
                display: block;
            }
            #mapid { height: 180px; }
        `],d=((e,r,t,s)=>{for(var o,d=s>1?void 0:s?c(r,t):r,i=e.length-1;i>=0;i--)(o=e[i])&&(d=(s?o(r,t,d):o(d))||d);return s&&d&&a(r,t,d),d})([o("vmd-chronodose")],d);export{d as VmdChronodoseView};
