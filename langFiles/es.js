/*
    * SIGESA LANGUAGE TRANSALTION FILE *
    - Language: Spanish
    - Transalted by: {
        Alejandro Delgado Rodríguez
    }

    # IF YOU WANT TO CONTRIBUTE TO TRANSLATE THIS, 
     ++ Respect the consts order (see the Spanish language)
     ++ Add your name before respecting all names written 
    #
*/

// Terms
export const login = "Entrar";
export const cancel = "Cancelar";
export const profile = "Perfil";
export const home = "Inicio";
export const welcome = "Bienvenido";
export const register = "Registrar";
export const error = "Error";
export const email = "Correo Electrónico";
export const username = "Nombre de Usuario";
export const password = "Contraseña";
export const access = "Acceder";
export const rememberMe = "Recuérdame";
export const deviceName = "Nombre del Dispositivo";
export const optional_Mayus = "OPCIONAL";
export const calendars = "Calendarios";
export const meetings = "Salidas";
export const organizations = "Organizaciones";
export const users = "Usuarios";
export const roles = "Rangos";
export const groups = "Grupos";
export const assistances = "Asistencias";
export const calendar = "Calendario";
export const meeting = "Salida";
export const organization = "Organización";
export const user = "Usuario";
export const role = "Rango";
export const group = "Grupo";
export const assistance = "Asistencia";
export const add = "Añadir";
export const save = "Guardar";
export const del = "Eliminar";
export const phone = "Teléfono";
export const phoneNumber = "Número de Teléfono";
export const active = "Activo";
export const maxSessions = "Límite Sesiones Abiertas";
export const warning = "Advertencia";
export const data = "Datos";
export const configuration = "Configuración";
export const configurations = "Configuraciones";
export const general = "General";
export const permissions = "Permisos";
export const no = "No";
export const yes = "Si";
export const nif = "NIF";
export const name = "Nombre";
export const description = "Descripción";

// Errors
export const errorCode = (code) => ("Error "+code);
export const resourceNotFound = "Recurso No Encontrado";
export const anInternalErrorHappend = "Se ha producido un error interno";
export const userWithoutPermissionsForThisAction = "El usuario actual no tiene permisos para realizar esa acción";
export const userWithoutPermissionsForAccesToThisResource = "El usuario actual no tiene permisos para acceder al recurso solicitado";
export const noResourcesToShow = (resource) => `No hay ${
    resource == "users" ? users : resource == "roles" ? roles : resource == "organizations" ? organizations : resource == "meetings" ? meetings : "recursos"
} para mostrar`;
export const noResourceAvailable = (resource) => `No hay ${
    resource == "users" ? users : resource == "roles" ? roles : resource == "organizations" ? organizations : resource == "meetings" ? meetings : "recursos"
} disponibles`;
export const noPermissions = "No tiene los permisos necesarios para realizar esta acción";

// Expressions
export const loadingMSG = "Cargando";
export const successMSG = "Completado con Éxito";
export const day = "¿Cuando?";
export const hour = "¿A qué hora?";
export const where = "¿Donde?";
export const userDD = "Usuario: ";
export const newUser = "Nuevo Usuario";
export const organizationDD = "Organización: ";
export const newOrganization = "Nueva Organización";
export const roleDD = "Rango: ";
export const newRole = "Nuevo Rango";
export const meetingDD = "Salida: ";
export const newMeeting = "Nueva Salida";
export const newAssistance = "Nueva Asistencia";
export const seeYou = "¡Hasta Pronto!";
export const sessionClosedSuccessfully = "Se ha cerrado su sesión correctamente";
export const welcomeAgain = "¡Bienvenido de nuevo!";
export const oops = "Oops...";
export const accessDenied = "Acceso Denegado";
export const loginSuccess = "Ha iniciado sesión correctamente";
export const loginError = "Algo ha sucedido al intentar iniciar sesión";
export const logoutError = "Se ha producido un error intentando cerrar sesión";
export const loginIntoTheSystem = "Ingrese al Sistema";
export const accessToTheSystem = "Acceso al Sistema";
export const registerIntoTheSystem = "Regístrese en el Sistema";
export const cancelWarningLoseChangesMSG = "Al Cancelar, si se ha editado algo y no se ha guardado, se perderán los cambios. ¿Está seguro que desea Cancelar?";
export const yesGo = "Si, ¡adelante!";
export const noContinueEditing = "No, seguiré editando";
export const resourceSavedSuccessfully = "El recurso se ha guardado correctamente";
export const resourceDeletedSuccessfully = "El recurso se ha eliminado correctamente";
export const deleteWarningMSG = "¿Está seguro que desea eliminar el recurso seleccionado? Esta operación es irreversible";
export const permAll = "Todos";
export const permGet = "Ver";
export const permAdd = "Añadir";
export const permUpd = "Actualizar";
export const permDel = "Eliminar";
export const assistanceExists = "Ya se ha creado una asistencia de esta salida y este usuario";
