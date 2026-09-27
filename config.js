/* ==========================================================
   CONFIGURATION GÉNÉRALE DU PORTFOLIO
   Blandy CONSTANTIN - BTS SIO SISR

   Ce fichier contient les informations qui peuvent changer.
   Modifiez-les ici plutôt que dans toutes les pages HTML.
========================================================== */

const portfolioConfig = {

    /* =========================
       INFORMATIONS PERSONNELLES
    ========================== */

    profil: {
        nom: "Blandy CONSTANTIN",
        formation: "BTS SIO",
        option: "SISR",

        description:
            "Étudiant en BTS SIO option SISR, passionné par les réseaux, les systèmes, la virtualisation et la cybersécurité.",

        cv: "documents/CV_Blandy.pdf"
    },


    /* =========================
       CONTACT
    ========================== */

    contact: {
        // Remplacez ces informations lorsque vous le souhaitez.

        email: "hotblann@gmail.com",

        linkedin: "https://www.linkedin.com/in/blandy-constantin-2064b0254",

        // Format conseillé :
        // 594XXXXXXXXX pour un numéro de Guyane
        // Ne mettez ni +, ni espace.
        whatsapp: "+594694099407"
    },


    /* =========================
       PROJET 1
    ========================== */

    projet1: {
        titre: "Installation et configuration de Zabbix",

        description:
            "Mise en place d'une solution de supervision réseau avec Zabbix.",

        technologies:
            "Zabbix, Linux, Réseau",

        image:
            "images/projet-zabbix.png",

        cahierDesCharges:
            "documents/cahier_zabbix.pdf"
    },


    /* =========================
       PROJET 2
    ========================== */

    projet2: {
        titre: "Projet 2",

        description:
            "Description de mon deuxième projet.",

        technologies:
            "Technologies à compléter",

        image:
            "images/projet2.jpg",

        cahierDesCharges:
            "documents/cahier_projet2.pdf"
    },


    /* =========================
       STAGE 1
    ========================== */

    stage1: {
        entreprise:
            "Mairie de Cayenne",

        ville:
            "Cayenne",

        poste:
            "Stagiaire au service informatique - Réseau",

        duree:
            "Durée à compléter",

        description:
            "Stage réalisé au sein du service informatique de la Mairie de Cayenne, principalement dans la partie réseau.",

        image:
            "images/mairie-cayenne.png",

        rapport:
            "documents/rapport_stage1.pdf"
    },


    /* =========================
       STAGE 2
    ========================== */

    stage2: {
        entreprise:
            "Entreprise à compléter",

        ville:
            "Ville à compléter",

        poste:
            "Poste à compléter",

        duree:
            "Durée à compléter",

        description:
            "Les informations concernant mon deuxième stage seront ajoutées prochainement.",

        image:
            "images/stage2.jpg",

        rapport:
            "documents/rapport_stage2.pdf"
    },


    /* =========================
       ÉPREUVE E5
    ========================== */

    e5: {
        titre:
            "Épreuve E5 - Support et mise à disposition de services informatiques",

        description:
            "Présentation de ma grille de synthèse E5 regroupant les compétences acquises au cours de ma formation en BTS SIO option SISR.",

        grille:"documents/grille_E5.xlsx"
    },


    /* =========================
       VEILLE INFORMATIQUE
    ========================== */

    veille: {
        titre:
            "Ma veille informatique",

        sujet:
            "Sujet de veille à compléter",

        description:
            "Cette section présente ma veille technologique réalisée dans le cadre de ma formation en BTS SIO."
    }
};


/* ==========================================================
   NE PAS MODIFIER CETTE PARTIE
   Elle permet aux pages HTML de récupérer automatiquement
   les informations présentes ci-dessus.
========================================================== */


/* ---------- Remplissage des textes ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const elementsTexte = document.querySelectorAll("[data-config]");

    elementsTexte.forEach(function (element) {

        const chemin = element.getAttribute("data-config").split(".");

        let valeur = portfolioConfig;

        chemin.forEach(function (cle) {

            if (
                valeur !== undefined &&
                valeur !== null &&
                valeur[cle] !== undefined
            ) {
                valeur = valeur[cle];
            }

        });

        if (
            typeof valeur === "string" ||
            typeof valeur === "number"
        ) {
            element.textContent = valeur;
        }

    });


    /* ---------- Gestion automatique des liens ---------- */

    const elementsLien = document.querySelectorAll("[data-link]");

    elementsLien.forEach(function (element) {

        const chemin = element.getAttribute("data-link").split(".");

        let valeur = portfolioConfig;

        chemin.forEach(function (cle) {

            if (
                valeur !== undefined &&
                valeur !== null &&
                valeur[cle] !== undefined
            ) {
                valeur = valeur[cle];
            }

        });

        if (typeof valeur === "string") {
            element.href = valeur;
        }

    });


    /* ---------- Gestion automatique des images ---------- */

    const elementsImage = document.querySelectorAll("[data-image]");

    elementsImage.forEach(function (element) {

        const chemin = element.getAttribute("data-image").split(".");

        let valeur = portfolioConfig;

        chemin.forEach(function (cle) {

            if (
                valeur !== undefined &&
                valeur !== null &&
                valeur[cle] !== undefined
            ) {
                valeur = valeur[cle];
            }

        });

        if (typeof valeur === "string") {
            element.src = valeur;
        }

    });


    /* ---------- Lien e-mail automatique ---------- */

    const liensEmail = document.querySelectorAll("[data-email]");

    liensEmail.forEach(function (element) {

        element.href =
            "mailto:" + portfolioConfig.contact.email;


    });


    /* ---------- Lien LinkedIn automatique ---------- */

    const liensLinkedin = document.querySelectorAll("[data-linkedin]");

    liensLinkedin.forEach(function (element) {

        element.href =
            portfolioConfig.contact.linkedin;

    });


    /* ---------- Lien WhatsApp automatique ---------- */

    const liensWhatsapp = document.querySelectorAll("[data-whatsapp]");

    liensWhatsapp.forEach(function (element) {

        const numero =
            portfolioConfig.contact.whatsapp.replace(/\D/g, "");

        element.href =
            "https://wa.me/" + numero;

    });

});