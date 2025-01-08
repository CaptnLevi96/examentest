Feature: Calcul des frais de livraison
  En tant que service de livraison
  Je veux calculer les frais de livraison
  Afin de facturer correctement les clients

  # 1. Frais de livraison standards
  Scenario: Livraison inférieure à 10km
    Given une livraison à 8 km
    And un client non premium
    And une commande de 100 $
    When je calcule les frais de livraison
    Then les frais devraient être de 7 $

  Scenario: Livraison entre 10km et 50km
    Given une livraison à 25 km
    And un client non premium
    And une commande de 100 $
    When je calcule les frais de livraison
    Then les frais devraient être de 12 $

  Scenario: Livraison supérieure à 50km
    Given une livraison à 51 km
    And un client non premium
    And une commande de 100 $
    When je calcule les frais de livraison
    Then les frais devraient être de 22 $

  # 2. Livraison gratuite premium
  Scenario: Commande premium supérieure à 150$
    Given une livraison à 25 km
    And un client premium
    And une commande de 151 $
    When je calcule les frais de livraison
    Then les frais devraient être de 0 $

  Scenario: Commande premium inférieure à 150$
    Given une livraison à 25 km
    And un client premium
    And une commande de 100 $
    When je calcule les frais de livraison
    Then les frais devraient être de 10 $

  # 3. Frais additionnels non-premium
  Scenario: Taxe fixe pour client non-premium
    Given une livraison à 8 km
    And un client non premium
    And une commande de 100 $
    When je calcule les frais de livraison
    Then les frais devraient être de 7 $


