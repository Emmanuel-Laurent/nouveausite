// -- Initialisation de jQuery
      


$(function() {
    
    
    
    
    
             // -- Ecouter a quel moment est soumi notre formulaire
    // -- A la soumission de mon Formulaire, lors du submit de celui-ci, ma fonction anonyme ci-dessous, sera exécutée.
            $('#contact').on('submit', function(event) {
       
        // -- Arrêt de la Propogation du Submit
        event.preventDefault();
                
                 // -- Réinitialisation des Erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert').remove();
                
                // -- Déclaration des Variables (Champs à vérifier)
        choix = $('#choix')
        message  = $('#message')
        
        // -- Vérification du choix du chat
        if(choix.val() === "un") {
            choix.parent().addClass('has-error');
            $("<p class='text-danger'>N'oubliez pas de choisir un chat</p>").appendTo(choix.parent());
        }
        
        // -- Vérification du message
        if(message.val().length < 15) {
            message.parent().addClass('has-error');
            $("<p class='text-danger'>Il faut que vous donnez une raison</p>").appendTo(message.parent());
        }
        
        if($(this).find('.has-error').length == 0) {
            $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée ! Nous étudierons votre demande, puis vous répondrons dans les meilleurs délais !!!</div>');
        } else {
            $('#contact').prepend("<div class='alert alert-danger'>Nous n'avons pas été en mesure de valider votre demande. Vérifiez vos informations.</div>");
        }        
                
                
                
            });
            
        });