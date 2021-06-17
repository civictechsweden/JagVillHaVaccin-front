import{L as e,h as r,C as t,d as s,e as o}from"./index.7baad340.js";import"./vendor.1d43dcfd.js";var a=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let i=class extends e{render(){return r`
            <slot name="chronodose"></slot>

            <div class="homeCard-actions">
                <div class="row justify-content-center justify-content-lg-start mt-5">
                    <a href="https://vitemadose.covidtracker.fr/" target="_blank" rel="noreferrer" class="col-auto btn btn-primary btn-lg">
                        Accéder à Vite Ma Dose&nbsp;<i class="bi vmdicon-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        `}};i.styles=[t,s`
            :host {
                display: block;
            }
            #mapid { height: 180px; }
        `],i=((e,r,t,s)=>{for(var o,i=s>1?void 0:s?d(r,t):r,n=e.length-1;n>=0;n--)(o=e[n])&&(i=(s?o(r,t,i):o(i))||i);return s&&i&&a(r,t,i),i})([o("vmd-chronodose")],i);export{i as VmdChronodoseView};
