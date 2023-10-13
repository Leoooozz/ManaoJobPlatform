-- Création de la table des offres d'emploi
CREATE TABLE job_offer (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    company VARCHAR(255),
    publication_date DATE,
    status VARCHAR(50)
);

-- Insertion de données d'exemple
INSERT INTO job_offer (title, description, company, publication_date, status)
VALUES
    ('Développeur Web Full Stack', 'Nous recherchons un développeur web Full Stack expérimenté pour rejoindre notre équipe. Le candidat idéal aura une solide expérience en développement web, des compétences front-end et back-end, et une passion pour la création de produits exceptionnels. En tant que développeur Full Stack, vous travaillerez sur divers projets passionnants pour améliorer notre plateforme et offrir une expérience utilisateur exceptionnelle. Vous serez chargé de la conception, du développement et de la maintenance de nos applications web, en veillant à ce qu''elles soient rapides, conviviales et fiables.', 'Entreprise A', '2023-10-01', 'active'),
    ('Ingénieur en logiciel', 'Rejoignez notre entreprise en tant qu''ingénieur en logiciel et contribuez à des projets passionnants. En tant qu''ingénieur en logiciel, vous serez responsable du développement, de la maintenance et de l''amélioration de nos produits logiciels. Vous travaillerez en étroite collaboration avec une équipe talentueuse pour résoudre des problèmes complexes et créer des solutions innovantes. Votre rôle consistera à concevoir des architectures logicielles, à coder des fonctionnalités et à résoudre des bogues.', 'Entreprise B', '2023-09-28', 'active'),
    ('Designer UI/UX', 'Nous recherchons un designer UI/UX créatif pour améliorer l''expérience utilisateur de nos produits. Le candidat idéal aura une solide compréhension du design d''interface utilisateur et de l''expérience utilisateur. Vous collaborerez avec nos équipes de développement pour concevoir des interfaces conviviales et esthétiques qui répondent aux besoins de nos clients. Votre travail consistera à créer des wireframes, des prototypes et des maquettes pour les applications web et mobile, en veillant à ce qu''elles soient intuitives et attrayantes.', 'Entreprise C', '2023-09-30', 'expired'),
    ('Responsable des ventes', 'Nous avons une opportunité pour un responsable des ventes dynamique pour diriger notre équipe de vente. En tant que responsable des ventes, vous serez responsable de la stratégie de vente, du développement de nouvelles opportunités commerciales et de la gestion d''une équipe de vente performante. Si vous avez une passion pour la vente et le leadership, nous aimerions vous avoir dans notre équipe. Votre rôle impliquera la planification des campagnes de vente, le suivi des performances de l''équipe et la négociation avec les clients potentiels.', 'Entreprise D', '2023-10-05', 'upcoming'),
    ('Analyste de données', 'Rejoignez notre équipe en tant qu''analyste de données et aidez-nous à prendre des décisions basées sur les données. Vous serez responsable de l''extraction, de la transformation et de l''analyse des données pour fournir des informations exploitables à l''entreprise. Si vous êtes un expert en analyse de données et que vous aimez résoudre des problèmes complexes, cette offre est faite pour vous. Vos tâches comprendront l''exploration de jeux de données, la création de rapports et de visualisations, et la présentation des résultats aux parties prenantes.', 'Entreprise E', '2023-09-25', 'expired'),
    ('Spécialiste du support technique', 'Nous recherchons un spécialiste du support technique pour aider nos clients avec des problèmes techniques. Le candidat idéal aura d''excellentes compétences en communication et sera capable de résoudre efficacement les problèmes techniques. Vous travaillerez en étroite collaboration avec notre équipe de support pour garantir la satisfaction de nos clients. Vos responsabilités incluront la réponse aux demandes de support, la résolution des problèmes des clients et la documentation des solutions.', 'Entreprise F', '2023-10-10', 'upcoming'),
    ('Chef de projet marketing', 'Nous sommes à la recherche d''un chef de projet marketing créatif pour gérer nos campagnes marketing. En tant que chef de projet marketing, vous serez responsable de la planification, de l''exécution et de l''évaluation de nos campagnes publicitaires. Vous travaillerez en étroite collaboration avec nos équipes de marketing pour développer des stratégies efficaces et atteindre nos objectifs de visibilité et de conversion. Vos tâches incluront l''analyse de marché, la gestion du budget marketing et la coordination des campagnes publicitaires.', 'Entreprise G', '2023-10-15', 'upcoming');