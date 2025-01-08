/**
 * Calcule les frais de livraison selon la distance, le statut premium et le montant
 * @param {number} distance - Distance en kilomètres
 * @param {boolean} isPremium - Statut premium du client
 * @param {number} montantCommande - Montant de la commande
 * @returns {number} - Montant des frais en $
 */
function calculerFrais(distance, isPremium, montantCommande) {
    // Pour les commandes premium de plus de 150$
    if (isPremium && montantCommande > 150) {
        return 0;
    }

    // Calcul des frais de base selon la distance
    let frais = 0;
    if (distance < 10) {
        frais = 5;
    } else if (distance < 50) {
        frais = 10;
    } else {
        frais = 20;
    }

    // Ajout de la taxe fixe pour les non-premium
    if (!isPremium) {
        frais += 2;
    }

    return frais;
}

module.exports = { calculerFrais };