const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { calculerFrais } = require('../../livraison');

let context = {
    distance: 0,
    isPremium: false,
    montantCommande: 0,
    fraisCalcules: 0
};

Given('une livraison à {int} km', function(distance) {
    context.distance = distance;
});

Given('un client premium', function() {
    context.isPremium = true;
});

Given('un client non premium', function() {
    context.isPremium = false;
});

Given('une commande de {int} $', function(montant) {
    context.montantCommande = montant;
});

When('je calcule les frais de livraison', function() {
    context.fraisCalcules = calculerFrais(
        context.distance,
        context.isPremium,
        context.montantCommande
    );
});

Then('les frais devraient être de {int} $', function(fraisAttendus) {
    assert.strictEqual(context.fraisCalcules, fraisAttendus);
});