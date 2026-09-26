/* ==========================================================
   PORTFOLIO BLANDY CONSTANTIN
   BTS SIO - OPTION SISR

   SCRIPT GÉNÉRAL DU PORTFOLIO

   Ce fichier est utilisé par toutes les pages :
   - Accueil
   - Profil
   - Projet 1
   - Projet 2
   - Stage 1
   - Stage 2
   - Veille informatique
   - E5
   - Contact
========================================================== */


/* ==========================================================
   ATTENDRE LE CHARGEMENT COMPLET DE LA PAGE
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================
       1. MENU MOBILE
    ====================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const menuOuvert =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                menuOuvert
            );

            /* Changement de l'icône */
            const icone = menuToggle.querySelector("i");

            if (icone) {

                if (menuOuvert) {
                    icone.classList.remove("fa-bars");
                    icone.classList.add("fa-xmark");
                } else {
                    icone.classList.remove("fa-xmark");
                    icone.classList.add("fa-bars");
                }

            }

        });

    }


    /* ======================================================
       2. MENUS DÉROULANTS
       PROJET ET STAGE
    ====================================================== */

    const dropdowns =
        document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {

        const bouton =
            dropdown.querySelector(".dropdown-toggle");

        if (!bouton) {
            return;
        }

        bouton.addEventListener("click", function (event) {

            /*
               Sur ordinateur le menu fonctionne aussi
               au survol grâce au CSS.

               Sur téléphone, le clic permet d'ouvrir
               Projet ou Stage.
            */

            if (window.innerWidth <= 768) {

                event.preventDefault();

                /* Fermer les autres menus */
                dropdowns.forEach(function (autreDropdown) {

                    if (autreDropdown !== dropdown) {
                        autreDropdown.classList.remove("open");
                    }

                });

                dropdown.classList.toggle("open");

            }

        });

    });


    /* ======================================================
       3. FERMER LE MENU APRÈS UN CLIC
    ====================================================== */

    const liensNavigation =
        document.querySelectorAll(
            ".nav-links a:not(.dropdown-toggle)"
        );

    liensNavigation.forEach(function (lien) {

        lien.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");
            });

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icone =
                    menuToggle.querySelector("i");

                if (icone) {

                    icone.classList.remove("fa-xmark");
                    icone.classList.add("fa-bars");

                }

            }

        });

    });


    /* ======================================================
       4. FERMER LE MENU SI ON CLIQUE EN DEHORS
    ====================================================== */

    document.addEventListener("click", function (event) {

        const navbar =
            document.querySelector(".navbar");

        if (!navbar) {
            return;
        }

        if (!navbar.contains(event.target)) {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");
            });

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icone =
                    menuToggle.querySelector("i");

                if (icone) {

                    icone.classList.remove("fa-xmark");
                    icone.classList.add("fa-bars");

                }

            }

        }

    });


    /* ======================================================
       5. ADAPTATION LORS DU REDIMENSIONNEMENT
    ====================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");
            });

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icone =
                    menuToggle.querySelector("i");

                if (icone) {

                    icone.classList.remove("fa-xmark");
                    icone.classList.add("fa-bars");

                }

            }

        }

    });


    /* ======================================================
       6. PAGE ACTIVE DANS LA NAVIGATION
    ====================================================== */

    let pageActuelle =
        window.location.pathname.split("/").pop();

    /*
       Si aucune page n'est indiquée,
       on considère qu'il s'agit de index.html.
    */

    if (
        pageActuelle === "" ||
        pageActuelle === "/"
    ) {
        pageActuelle = "index.html";
    }


    const liensMenu =
        document.querySelectorAll(".nav-links a");

    liensMenu.forEach(function (lien) {

        const href =
            lien.getAttribute("href");

        if (!href) {
            return;
        }

        if (href === pageActuelle) {

            lien.classList.add("active");

            /*
               Si la page active appartient à Projet
               ou Stage, on peut également identifier
               son menu parent.
            */

            const dropdownParent =
                lien.closest(".dropdown");

            if (dropdownParent) {

                const dropdownToggle =
                    dropdownParent.querySelector(
                        ".dropdown-toggle"
                    );

                if (dropdownToggle) {
                    dropdownToggle.classList.add("active");
                }

            }

        }

    });


    /* ======================================================
       7. ANNÉE AUTOMATIQUE DU FOOTER
    ====================================================== */

    const elementsAnnee =
        document.querySelectorAll(".annee-actuelle");

    const annee =
        new Date().getFullYear();

    elementsAnnee.forEach(function (element) {

        element.textContent = annee;

    });


    /* ======================================================
       8. OUVERTURE DES PDF
    ====================================================== */

    const liensPDF =
        document.querySelectorAll(
            'a[href$=".pdf"], a[data-link]'
        );

    liensPDF.forEach(function (lien) {

        /*
           Les PDF s'ouvriront dans un nouvel onglet.

           Cela concerne par exemple :
           - CV
           - Cahier des charges Projet 1
           - Cahier des charges Projet 2
           - Rapport Stage 1
           - Rapport Stage 2
           - Grille E5
        */

        const href =
            lien.getAttribute("href");

        if (
            href &&
            href.toLowerCase().endsWith(".pdf")
        ) {

            lien.setAttribute(
                "target",
                "_blank"
            );

            lien.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }

    });


    /* ======================================================
       9. LIENS EXTERNES
    ====================================================== */

    const liensExternes =
        document.querySelectorAll(
            'a[href^="http"]'
        );

    liensExternes.forEach(function (lien) {

        lien.setAttribute(
            "target",
            "_blank"
        );

        lien.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* ======================================================
       10. ANIMATION DES CARTES À L'AFFICHAGE
    ====================================================== */

    const cartes =
        document.querySelectorAll(
            ".card, " +
            ".accueil-contenu, " +
            ".profil-contenu, " +
            ".projet-card, " +
            ".stage-card, " +
            ".veille-card, " +
            ".e5-card, " +
            ".contact-card"
        );

    cartes.forEach(function (carte) {

        carte.classList.add("carte-visible");

    });


    /* ======================================================
       11. GESTION DU FORMULAIRE DE CONTACT
    ====================================================== */

    const formulaireContact =
        document.querySelector("#contact-form");

    if (formulaireContact) {

        formulaireContact.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const nom =
                    document.querySelector("#nom");

                const email =
                    document.querySelector("#email");

                const sujet =
                    document.querySelector("#sujet");

                const message =
                    document.querySelector("#message");


                if (
                    !nom ||
                    !email ||
                    !message
                ) {
                    return;
                }


                /* Vérification des champs obligatoires */

                if (
                    nom.value.trim() === "" ||
                    email.value.trim() === "" ||
                    message.value.trim() === ""
                ) {

                    alert(
                        "Veuillez remplir tous les champs obligatoires."
                    );

                    return;
                }


                /* Vérification simple de l'adresse e-mail */

                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    !emailRegex.test(
                        email.value.trim()
                    )
                ) {

                    alert(
                        "Veuillez entrer une adresse e-mail valide."
                    );

                    return;
                }


                /*
                   Pour le moment, le formulaire ouvre
                   l'application e-mail du visiteur.

                   Cela fonctionne même avec un site
                   statique hébergé en ligne.
                */

                let adresseDestination = "";

                if (
                    typeof portfolioConfig !== "undefined" &&
                    portfolioConfig.contact &&
                    portfolioConfig.contact.email
                ) {

                    adresseDestination =
                        portfolioConfig.contact.email;

                }


                if (
                    adresseDestination === "" ||
                    adresseDestination ===
                    "votre.email@example.com"
                ) {

                    alert(
                        "Vous devez d'abord renseigner votre adresse e-mail dans config.js."
                    );

                    return;
                }


                let sujetEmail =
                    "Contact depuis mon portfolio";

                if (
                    sujet &&
                    sujet.value.trim() !== ""
                ) {

                    sujetEmail =
                        sujet.value.trim();

                }


                const contenuMessage =
                    "Nom : " +
                    nom.value.trim() +
                    "\n\n" +

                    "E-mail : " +
                    email.value.trim() +
                    "\n\n" +

                    "Message :\n" +
                    message.value.trim();


                const mailto =
                    "mailto:" +
                    adresseDestination +
                    "?subject=" +
                    encodeURIComponent(sujetEmail) +
                    "&body=" +
                    encodeURIComponent(contenuMessage);


                window.location.href = mailto;

            }
        );

    }


    /* ======================================================
       12. MESSAGE DANS LA CONSOLE

       Utile pour vérifier que JavaScript fonctionne.
       F12 > Console dans le navigateur.
    ====================================================== */

    console.log(
        "Portfolio Blandy CONSTANTIN : script.js chargé."
    );

});


/* ==========================================================
   13. FONCTION POUR REVENIR EN HAUT DE LA PAGE
========================================================== */

function retourEnHaut() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}