const prompt = require("prompt-sync")();

const candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: []
    },
    {
        cin: "CD234567",
        nom: "El Amrani",
        prenom: "Fatima Zahra",
        partiPolitique: "PJD",
        age: 35,
        electeurs: ["AB123456", "GH456789", "KL678901"]
    },
    {
        cin: "EF345678",
        nom: "Chraibi",
        prenom: "Younes",
        partiPolitique: "RNI",
        age: 45,
        electeurs: []
    },
    {
        cin: "GH456789",
        nom: "Bennani",
        prenom: "Salma",
        partiPolitique: "PAM",
        age: 29,
        electeurs: ["IJ567890"]
    },
    {
        cin: "IJ567890",
        nom: "Ouahbi",
        prenom: "Karim",
        partiPolitique: "Istiqlal",
        age: 52,
        electeurs: []
    },
    {
        cin: "KL678901",
        nom: "Ziani",
        prenom: "Nadia",
        partiPolitique: "Indépendant",
        age: 33,
        electeurs: []
    },
    {
        cin: "MN789012",
        nom: "Tazi",
        prenom: "Hamza",
        partiPolitique: "USFP",
        age: 60,
        electeurs: ["QR901234"]
    },
    {
        cin: "OP890123",
        nom: "Idrissi",
        prenom: "Meryem",
        partiPolitique: "PJD",
        age: 27,
        electeurs: []
    },
    {
        cin: "QR901234",
        nom: "Berrada",
        prenom: "Omar",
        partiPolitique: "RNI",
        age: 38,
        electeurs: ["CD234567", "EF345678", "MN789012"]
    },
    {
        cin: "ST012345",
        nom: "Fassi",
        prenom: "Khadija",
        partiPolitique: "PAM",
        age: 31,
        electeurs: []
    }
];


function afficherMenu() {
    console.log("==================================");
    console.log("   GESTION DES ELECTIONS - MAROC  ");
    console.log("==================================");
    console.log("1. Ajouter un candidat");
    console.log("2. Ajouter plusieurs candidats");
    console.log("3. Afficher les candidats");
    console.log("4. Rechercher un candidat par nom");
    console.log("5. Modifier un candidat");
    console.log("6. Supprimer un candidat par CIN");
    console.log("7. Voter pour un candidat");
    console.log("8. Trier les candidats par votes");
    console.log("9. Filtrer les candidats par parti");
    console.log("10. Afficher les statistiques");
    console.log("0. Quitter");
}


function ajouterCandidat() {
    const cin = prompt("Enter CIN : ");

    const candidatExiste = candidats.find(function(candidat) {
        return candidat.cin === cin;
    });

    if (candidatExiste !== undefined) {
        return "Ce CIN existe deja";
    }

    const nom = prompt("Enter nom : ");
    const prenom = prompt("Enter prenom : ");
    const age = Number(prompt("Enter age : "));
    const partiPolitique = prompt("Enter parti politique : ");

    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        age: age,
        partiPolitique: partiPolitique,
        electeurs: []
    };

    candidats.push(candidat);

    return "Candidat ajoute";
}


function ajouterPlusieursCandidats() {
    const nombre = Number(
        prompt("Entrer le nombre de candidats que tu veux ajouter : ")
    );

    for (let i = 0; i < nombre; i++) {
        console.log("Candidat", i + 1);
        console.log(ajouterCandidat());
    }
}


function afficherDetailsCandidat(candidat) {
    console.log("CIN :", candidat.cin);
    console.log("Nom :", candidat.nom);
    console.log("Prenom :", candidat.prenom);
    console.log("Parti politique :", candidat.partiPolitique);
    console.log("Age :", candidat.age);
    console.log("Nombre de votes :", candidat.electeurs.length);
    console.log("----------------------------");
}


function afficherCandidats(listeCandidats) {
    for (let i = 0; i < listeCandidats.length; i++) {
        console.log("Candidat", i + 1);
        afficherDetailsCandidat(listeCandidats[i]);
    }
}


function rechercherCandidat() {
    const nom = prompt("Entrer le nom que tu veux chercher : ");

    const result = candidats.find(function(candidat) {
        return candidat.nom === nom;
    });

    return result;
}


function modifierCandidat() {
    const cin = prompt("Entrer CIN du candidat : ");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            const nouvelAge = Number(
                prompt("Entrer le nouvel age : ")
            );

            const nouveauParti = prompt(
                "Entrer le nouveau parti politique : "
            );

            candidats[i].age = nouvelAge;
            candidats[i].partiPolitique = nouveauParti;

            return "Candidat modifie";
        }
    }

    return "CIN non trouve";
}


function supprimerCandidat() {
    const cin = prompt("Entrer CIN du candidat : ");

    const index = candidats.findIndex(function(candidat) {
        return candidat.cin === cin;
    });

    if (index !== -1) {
        candidats.splice(index, 1);
        return "Candidat supprime";
    }

    return "CIN non trouve";
}


function voter() {
    const cinElecteur = prompt("Entrer CIN de l'electeur : ");
    const ageElecteur = Number(prompt("Entrer votre age : "));

    if (ageElecteur < 18) {
        return "Vous n'avez pas le droit de voter";
    }

    const cinCandidat = prompt("Entrer CIN du candidat : ");

    const candidat = candidats.find(function(candidat) {
        return candidat.cin === cinCandidat;
    });

    if (candidat === undefined) {
        return "Candidat non trouve";
    }

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].electeurs.includes(cinElecteur)) {
            return "Electeur deja vote";
        }
    }

    candidat.electeurs.push(cinElecteur);

    return "Vote ajoute";
}


function MaxVotes() {
    let max = 0;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].electeurs.length > max) {
            max = candidats[i].electeurs.length;
        }
    }

    return max;
}


function filtrerCandidatsParParti() {
   const parti = prompt("Entrer le parti politique : ");
   return candidats.filter(function(candidat) {
    return candidat.partiPolitique === parti
})};


function trierCandidatsParVotes() {
    for (let i = 0; i < candidats.length; i++) {
        for (let j = i + 1; j < candidats.length; j++) {
            if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
                const candidatTemporaire = candidats[i];
                candidats[i] = candidats[j];
                candidats[j] = candidatTemporaire;
            }
        }
    }

    return candidats;
}


function afficherStatistiques() {
    console.log("Nombre total de candidats :", candidats.length);

    let totalVotes = 0;

    for (let i = 0; i < candidats.length; i++) {
        totalVotes = totalVotes + candidats[i].electeurs.length;
    }

    console.log("Nombre total de votes :", totalVotes);

    trierCandidatsParVotes();

    console.log("Top 3 des candidats :");

    for (let i = 0; i < 3 && i < candidats.length; i++) {
        console.log(
            candidats[i].nom,
            candidats[i].prenom,
            ":",
            candidats[i].electeurs.length,
            "votes"
        );
    }

    const partis = [];
    const nombresCandidats = [];

    for (let i = 0; i < candidats.length; i++) {
        const parti = candidats[i].partiPolitique;

        if (partis.includes(parti)) {
            const index = partis.findIndex(function(partiActuel) {
                return partiActuel === parti;
            });

            nombresCandidats[index] = nombresCandidats[index] + 1;
        } else {
            partis.push(parti);
            nombresCandidats.push(1);
        }
    }

    console.log("Nombre de candidats par parti :");

    for (let i = 0; i < partis.length; i++) {
        console.log(partis[i], ":", nombresCandidats[i]);
    }
}


let choix = -1;

while (choix !== 0) {
    afficherMenu();
    choix = Number(prompt("Entrer votre choix : "));

    switch (choix) {
        case 1:
            console.log(ajouterCandidat());
            break;

        case 2:
            ajouterPlusieursCandidats();
            break;

        case 3:
            afficherCandidats(candidats);
            break;

        case 4:
            const resultatRecherche = rechercherCandidat();

            if (resultatRecherche === undefined) {
                console.log("Candidat non trouve");
            } else {
                afficherDetailsCandidat(resultatRecherche);
            }
            break;

        case 5:
            console.log(modifierCandidat());
            break;

        case 6:
            console.log(supprimerCandidat());
            break;

        case 7:
            console.log(voter());
            break;

        case 8:
            trierCandidatsParVotes();
            afficherCandidats(candidats);
            break;

        case 9:
            const resultatsFiltre = filtrerCandidatsParParti();

            if (resultatsFiltre.length === 0) {
                console.log("Aucun candidat trouve");
            } else {
                afficherCandidats(resultatsFiltre);
            }
            break;

        case 10:
            afficherStatistiques();
            break;

        case 0:
            console.log("Au revoir");
            break;

        default:
            console.log("Choix invalide");
    }
}
