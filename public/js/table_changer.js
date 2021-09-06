document.getElementById("prev_button").ondblclick = function () {
        // change first row
        document.getElementById("store_1").innerHTML = "Amazon MX"
        document.getElementById("price_1").innerHTML = "$229"
        document.getElementById("store_link_1").onclick = function() {
            location.href="https://www.amazon.com.mx/guerra-tiene-rostro-mujer/dp/607317442X/ref=asc_df_607317442X/?tag=gledskshopmx-20&linkCode=df0&hvadid=322484198829&hvpos=&hvnetw=g&hvrand=14988711749671023557&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031214&hvtargid=pla-600021207776&psc=1"
        }
    
        // change second row
        document.getElementById("store_2").innerHTML = "Mercado Libre"
        document.getElementById("price_2").innerHTML = "$349" 
        document.getElementById("store_link_2").onclick = function() {
            location.href="https://articulo.mercadolibre.com.mx/MLM-955336685-la-guerra-no-tiene-rostro-de-mujer-_JM?matt_tool=65890526&matt_word=&matt_source=google&matt_campaign_id=11721662054&matt_ad_group_id=116775494794&matt_match_type=&matt_network=g&matt_device=c&matt_creative=482774604425&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=322568880&matt_product_id=MLM955336685&matt_product_partition_id=354485897216&matt_target_id=aud-1185767631836:pla-354485897216&gclid=Cj0KCQjw1dGJBhD4ARIsANb6OdmcOkJGkzCUCFfrSmNjHNlyviJt9Qpf3z1l6S9lpPLK6liRxChWj_0aAt_fEALw_wcB"
        }
    
        // change third row
        document.getElementById("store_3").innerHTML = "Librerias Gandhi"
        document.getElementById("price_3").innerHTML = "$225"
        document.getElementById("store_link_3").onclick = function() {
            location.href="https://www.gandhi.com.mx/la-guerra-no-tiene-rostro-de-mujer-3?gclid=Cj0KCQjw1dGJBhD4ARIsANb6OdnAEI59qePQGglVVo51TSSYc-3EwZeFufAR5s3giu1S8liLArLNAVIaAqBUEALw_wcB"
        }
    
        // change fourth rouw
        document.getElementById("store_4").innerHTML = "Busca Libre"
        document.getElementById("price_4").innerHTML = "$447"
        document.getElementById("store_link_4").onclick = function() {
            location.href="https://www.buscalibre.com.mx/libro-la-guerra-no-tiene-rostro-de-mujer-alexievich-svetlana-debate/9789588931159/p/47008690?gclid=Cj0KCQjw1dGJBhD4ARIsANb6OdmKPnc1uiEUKX_qgvfZ6en3lhpIMl64EVNLPig12iTQpLfMrvZm4eIaAtmoEALw_wcB"
        }
}

document.getElementById("next_button").onclick = function() {
    // change first row
    document.getElementById("store_1").innerHTML = "Sanborns"
    document.getElementById("price_1").innerHTML = "$259"
    document.getElementById("store_link_1").onclick = function() {
        location.href="https://www.sanborns.com.mx/producto/50734/la-guerra-no-tiene-rostro-de-mujer/"
    }

    // change second row
    document.getElementById("store_2").innerHTML = "Claro Shop"
    document.getElementById("price_2").innerHTML = "$259" 
    document.getElementById("store_link_2").onclick = function() {
        location.href="https://www.claroshop.com/producto/856970/la-guerra-no-tiene-rostro-de-mujer/"
    }

    // change third row
    document.getElementById("store_3").innerHTML = "Mercado Libre"
    document.getElementById("price_3").innerHTML = "$535"
    document.getElementById("store_link_3").onclick = function() {
        location.href="https://articulo.mercadolibre.com.mx/MLM-947965413-libro-la-guerra-no-tiene-rostro-de-mujer-nvo-_JM?matt_tool=28238160&utm_source=google_shopping&utm_medium=organic"
    }

    // change fourth rouw
    document.getElementById("store_4").innerHTML = "Busca Libre MX"
    document.getElementById("price_4").innerHTML = "$471"
    document.getElementById("store_link_4").onclick = function() {
        location.href="https://www.buscalibre.com.mx/libro-la-guerra-no-tiene-rostro-de-mujer-svetlana-alexievich-debolsillo/9788466338844/p/48108169" 
    }

}
