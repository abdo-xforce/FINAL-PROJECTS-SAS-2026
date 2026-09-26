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


function ajouterCandidat() {
    const cin = prompt("Enter CIN : ");
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
}


function ajouterPlusieursCandidats() {
    const nombre = Number(
        prompt("Entrer le nombre de candidats que tu veux ajouter : ")
    );

    for (let i = 0; i < nombre; i++) {
        const cin = prompt("Enter CIN : ");
        const nom = prompt("Enter nom : ");
        const prenom = prompt("Enter prenom : ");
        const age = Number(prompt("Enter age : "));
        const partiPolitique = prompt("Enter partiPolitique : ");

        const candidat = {
            cin: cin,
            nom: nom,
            prenom: prenom,
            age: age,
            partiPolitique: partiPolitique,
            electeurs: []
        };

        candidats.push(candidat);
    }
}


function afficherCandidats() {
    for (let i = 0; i < candidats.length; i++) {
        console.log(candidats[i]);
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
    }
}


function voter() {
    const cinCandidat = prompt("Entrer CIN du candidat : ");
    const cinElecteur = prompt("Entrer CIN de l'electeur : ");

    const candidat = candidats.find(function(candidat) {
        return candidat.cin === cinCandidat;
    });

    if (candidat.electeurs.includes(cinElecteur)) {
        return "Electeur deja vote";
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

