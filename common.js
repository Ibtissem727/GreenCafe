$(document).ready(function () {
    $("#header").load("header.html", function () {
        const menuItem = $(".menu-dropdown");
        const burger = $(".burger");
        const menu = $(".menu");
     $(".dropdown").hide().css("visibility", "hidden");

        // Gestion des hover pour desktop
        menuItem.hover(
            function () {
                if ($(window).width() > 768) {
                    $(this).find(".dropdown").stop(true, true).slideDown(200).css("visibility", "visible");
                    $(this).find("i").removeClass("fa-caret-right").addClass("fa-caret-down");
                }
            },
            function () {
                if ($(window).width() > 768) {
                    $(this).find(".dropdown").stop(true, true).slideUp(200);
                    $(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-right");
                }
            }
        );

        // Gestion des clics pour mobile
        menuItem.click(function () {
            
            if ($(window).width() <= 768) { 
                const dropdown = $(this).find(".dropdown");
                const icon = $(this).find("i")
                 
                if (dropdown.is(":hidden")) {
                    dropdown.stop(true, true).slideDown(200).css({ visibility: "visible", position: "static" });
                    icon.removeClass("fa-caret-right").addClass("fa-caret-down");
                } else {
                    dropdown.stop(true, true).slideUp(200);
                    icon.removeClass("fa-caret-down").addClass("fa-caret-right");
                }
                
            }
        });
        
       
        // Gestion du burger menu
        burger.click(function () {
            if (menu.is(":visible")) {
                menu.stop(true, true).slideUp(200, function () { 

                    //réinitialisation des sous-menus
                    $(".dropdown").stop(true, true).slideUp(200).css("visibility", "hidden");
                    $(".menu-dropdown i").removeClass("fa-caret-down").addClass("fa-caret-right");
                } );
            } else {
                menu.stop(true, true).slideDown(200).css({ visibility: "visible"});
            }
            } );
        
        
    
        // Réinitialisation au redimensionnement
        $(window).resize(function () {
            if ($(window).width() > 768) {
                menu.css({ display: "block", visibility: "visible"});
                $(".dropdown").css("position", "absolute");
                $(".dropdown").stop(true, true).slideUp(200).css("visibility", "hidden");
                $(".menu-dropdown i").removeClass("fa-caret-down").addClass("fa-caret-right");
            } else {
               menu.css({ display: "none" });

            }
        });  
    } );

    
    $("#footer").load("footer.html");
});

document.addEventListener("DOMContentLoaded", function () {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const sectionId = getUrlParameter('section');

    document.querySelectorAll('.menu-cafe').forEach(section => {
        section.classList.remove('active');
    });

    if (sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        } else {
            console.error(`Section with ID '${sectionId}' not found.`);
        }
    } 
    /*else {
        console.log("Aucune section spécifiée, afficher la section par défaut.");
        document.querySelector('.menu-cafe').classList.add('active');
    }*/
});


$(document).ready(() => {
    // Charger dynamiquement les images en background CSS
    $('.css-background').each(function () {
        const backgroundUrl = $(this).css('background-image').slice(5, -2); // Récupère l'URL
        const img = new Image();
        img.src = backgroundUrl;
        img.onload = () => {
            console.log(`Image ${backgroundUrl} chargée avec succès`);
        };
    });

    // Charger dynamiquement les balises img avec lazy loading
    $('.lazy-load').each(function () {
        $(this).attr('src', $(this).data('src'));
        $(this).on('load', () => {
            console.log(`Image ${$(this).attr('src')} chargée avec succès`);
        });
    });
});
