const { calculerFrais } = require('./livraison');

describe('calculerFrais', () => {
    // 1. Tests pour les frais de livraison standards
    test('devrait facturer 5$ si distance < 10km', () => {
        expect(calculerFrais(8, false, 100)).toBe(7); // 5$ + 2$ taxe fixe
    });

    test('devrait facturer 10$ si distance entre 10km et 50km', () => {
        expect(calculerFrais(25, false, 100)).toBe(12); // 10$ + 2$ taxe fixe
    });

    test('devrait facturer 20$ si distance > 50km', () => {
        expect(calculerFrais(51, false, 100)).toBe(22); // 20$ + 2$ taxe fixe
    });

    // 2. Tests pour la livraison gratuite premium
    test('devrait être gratuit pour commande premium > 150$', () => {
        expect(calculerFrais(25, true, 151)).toBe(0);
    });

    test('devrait facturer normalement pour commande premium < 150$', () => {
        expect(calculerFrais(25, true, 100)).toBe(10);
    });

    // 3. Tests pour les frais additionnels non-premium
    test('devrait ajouter 2$ pour clients non-premium', () => {
        expect(calculerFrais(8, false, 100)).toBe(7); // 5$ + 2$
    });

   
});