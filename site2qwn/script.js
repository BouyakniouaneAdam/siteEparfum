// ==========================================
// 1. GESTION DU PANIER (Automatique)
// ==========================================

let panier = JSON.parse(localStorage.getItem("panierAirParfum")) || [];

function ajouterAuPanier(nom, prix) {
    panier.push({ nom: nom, prix: prix });
    localStorage.setItem("panierAirParfum", JSON.stringify(panier));
    alert( nom + " a été ajouté à votre panier !");
    afficherPanier();
}

function afficherPanier() {
    // Cherche automatiquement où afficher le panier
    let zonePanier = document.getElementById("zone-panier");
    let zoneTotal = document.getElementById("zone-total");
    
    // Si les IDs n'existent pas, on les crée automatiquement
    if (!zonePanier) {
        let main = document.querySelector("main") || document.body;
        zonePanier = document.createElement("div");
        zonePanier.id = "zone-panier";
        zonePanier.style.padding = "20px";
        main.insertBefore(zonePanier, main.firstChild);
    }
    
    if (!zoneTotal) {
        zoneTotal = document.createElement("div");
        zoneTotal.id = "zone-total";
        zoneTotal.style.textAlign = "right";
        zoneTotal.style.marginTop = "20px";
        zonePanier.parentNode.insertBefore(zoneTotal, zonePanier.nextSibling);
    }

    zonePanier.innerHTML = "";
    let total = 0;

    if (panier.length === 0) {
        zonePanier.innerHTML = "<p>Votre panier est vide.</p>";
        zoneTotal.innerHTML = "";
        return;
    }

    panier.forEach((produit, index) => {
        total += produit.prix;
        zonePanier.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <span>${produit.nom}</span>
                <span>
                    ${produit.prix} € 
                    <button onclick="supprimerDuPanier(${index})" style="background:red; color:white; border:none; padding:2px 6px; cursor:pointer; margin-left:10px;">X</button>
                </span>
            </div>
        `;
    });

    zoneTotal.innerHTML = "Total à payer : <strong>" + total + " €</strong>";
}

function supprimerDuPanier(index) {
    panier.splice(index, 1);
    localStorage.setItem("panierAirParfum", JSON.stringify(panier));
    afficherPanier();
}

afficherPanier();

// 2. DÉTECTION AUTOMATIQUE DES BOUTONS "AJOUTER"


window.onload = function() {
    // Trouve tous les boutons qui contiennent le mot "Ajouter"
    let boutons = document.querySelectorAll("button");
    
    boutons.forEach(bouton => {
        if (bouton.innerText.indexOf("Ajouter") !== -1) {
            bouton.onclick = function(event) {
                event.preventDefault();
                
                // Trouve la carte produit parente
                let carte = this.closest(".product-card");
                if (!carte) return;
                
                // Lit le nom et le prix directement depuis le HTML
                let nom = carte.querySelector("h3").innerText;
                let prixTexte = carte.querySelector(".price").innerText;
                let prix = parseInt(prixTexte.match(/\d+/)[0]);
                
                ajouterAuPanier(nom, prix);
            };
        }
    });
    

    // 3. FORMULAIRE DE PAIEMENT (Détection automatique)
    
    let formulaire = document.getElementById("form-paiement");
    
   
    if (formulaire) {
        formulaire.addEventListener("submit", function(event) {
            event.preventDefault();
            
            if (panier.length === 0) {
                alert("Votre panier est vide !");
                return;
            }
            
            alert(" Merci ! Votre commande a été validée !");
            panier = [];
            localStorage.removeItem("panierAirParfum");
            afficherPanier();
            formulaire.reset();
        });
    }
};