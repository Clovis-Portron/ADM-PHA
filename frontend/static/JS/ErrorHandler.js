
let ErrorHandler =
{
    State : {
        INFO : "INFO", 
        ERROR : "ERROR",
        FATAL : "FATAL"
    },


    /**
     * On gère ici les erreurs renvoyées après une requete AJAX
     * Doit throw une erreur si un problème est détecté
     */
    handle : function(response)
    {
        // On gère ici les réponses renvoyées par le serveur après une requete AJAX
    },

    /**
     * A appeler dans chaque catch après un App.request
     * Signale automatiquement l'erreur si il y a lieu de le faire 
     */
    alertIfError : function (error) 
    {
        if(error instanceof Error)
            window.alert(error.message);
    },

    /**
     * Analyse un formulaire et présente les erreurs commises à l'utilisateur 
     * errors: liste d'erreur de saisie au sein du formulaire 
     */
    diagnosticForm : function(errors)
    {
        throw new Error("Not implemented.");
    },
}