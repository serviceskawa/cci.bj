export function formatUserRole(roles_array) {
    const OWNER = 'ROLE_SUPER_ADMIN'
    const ADMIN = 'ROLE_ADMIN'
    const MANAGER = 'ROLE_GESTION'
    const CHERCHEUR = 'ROLE_CHERCHEUR'
    const EVALUATEUR = 'ROLE_EVALUATEUR'
    const SYNTHESE = 'ROLE_SYNTHESE'
    const SUIVI_EVALUATION = 'ROLE_SUIVI_EVALUATION'
    const DONNEE_EXECUTION = 'ROLE_DONNEE_EXECUTION'
    const USER = 'ROLE_USER'
    if ( roles_array ) {
        if (roles_array.length > 0 && roles_array.includes(OWNER)) {
            return 'Administrateur'
        } else if (roles_array.length > 0 && roles_array.includes(ADMIN)) {
            return 'Administrateur'
        } else if (roles_array.length > 0 && roles_array.includes(MANAGER)) {
            return 'Gestionnaire'
        } else if (roles_array.length > 0 && roles_array.includes(CHERCHEUR)) {
            return 'Chercheur'
        } else if (roles_array.length > 0 && roles_array.includes(EVALUATEUR)) {
            return 'Evaluateur'
        } else if (roles_array.length > 0 && roles_array.includes(SYNTHESE)) {
            return 'Agent de Synthèse'
        } else if (roles_array.length > 0 && roles_array.includes(SUIVI_EVALUATION)) {
            return 'Superviseur evaluation'
        } else if (roles_array.length > 0 && roles_array.includes(USER)) {
            return 'Utilisateur'
        } else if (roles_array.length > 0 && roles_array.includes(DONNEE_EXECUTION)) {
            return 'Chercheur'
        }
    }

}