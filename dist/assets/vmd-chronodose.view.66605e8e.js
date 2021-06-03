import{L as e,h as r,C as t,d as s,e as o}from"./index.70806426.js";import"./vendor.1d43dcfd.js";var a=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let n=class extends e{render(){return r`
            <slot name="chronodose"></slot>

            <div class="homeCard-actions">
                <div class="row justify-content-center justify-content-lg-start mt-5">
                    <a href="https://vitemadose.covidtracker.fr/" target="_blank" rel="noreferrer" class="col-auto btn btn-primary btn-lg">
                        Accéder à Vite Ma Dose&nbsp;<i class="bi vmdicon-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        `}};n.styles=[t,s`
            :host {
                display: block;
            }
            #mapid { height: 180px; }
        `],n=((e,r,t,s)=>{for(var o,n=s>1?void 0:s?i(r,t):r,d=e.length-1;d>=0;d--)(o=e[d])&&(n=(s?o(r,t,n):o(n))||n);return s&&n&&a(r,t,n),n})([o("vmd-chronodose")],n);export{n as VmdChronodoseView};
